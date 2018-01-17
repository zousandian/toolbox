<template>
  <div class="page">
    <h1>Mock Tool</h1>
    <div class="mockup-wrapper">
      <!-- <img class="mockup-frame" src="../assets/iOS.png" @load="drawFrame"/> -->
      <div class="mockup-inner">
        <canvas id="mockup-board" :width="canvasSize.w" :height="canvasSize.h"></canvas>
      </div>
      <div>
        选择设备：
        <select name="" id="" v-model="deviceIndex">
          <option :value="index" v-for="(item, index) in devices">{{ item.name }}</option>
        </select>

        选择图片：
        <input type="file" accept="image/*" @change="handleFile">
      </div>
      <a class="btn-download" v-if="resultImgUrl" :href="resultImgUrl" :download="devices[deviceIndex].name + '-' + resultImgName">下载</a>
    </div>
  </div>
</template>

<script>
class Board {
  constructor (canvas, frameImg, screenArea) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.width = canvas.width
    this.height = canvas.height
    this.frameImg = frameImg
    this.screenArea = {
      w: screenArea.w,
      h: screenArea.h,
      x: screenArea.x,
      y: screenArea.y
    }
    this.init()
  }

  init () {
    this.clear()
    this.drawFrame()
  }

  clear () {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }

  clearScreenArea () {
    this.ctx.clearRect(this.screenArea.x, this.screenArea.y, this.screenArea.w, this.screenArea.h)
  }

  drawFrame () {
    this.ctx.drawImage(this.frameImg, 0, 0, this.width, this.height)
  }

  drawImage (img) {
    let hRatio = this.screenArea.w / img.width
    let vRatio = this.screenArea.h / img.height
    let ratio = Math.min(hRatio, vRatio)
    let centerShiftX = this.screenArea.x + (this.screenArea.w - img.width * ratio) / 2
    let centerShiftY = this.screenArea.y + (this.screenArea.h - img.height * ratio) / 2
    this.clearScreenArea()
    this.ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShiftX, centerShiftY, img.width * ratio, img.height * ratio)
  }

  toDataURL (backgroundColor) {
    backgroundColor = backgroundColor || '#000'

    if (backgroundColor) {
      // store the current globalCompositeOperation
      var compositeOperation = this.ctx.globalCompositeOperation

      // set to draw behind current content
      this.ctx.globalCompositeOperation = 'destination-over'

      // set background color
      this.ctx.fillStyle = backgroundColor

      // draw background / rect on entire canvas
      this.ctx.fillRect(this.screenArea.x, this.screenArea.y,
        this.screenArea.w, this.screenArea.h)

      // reset the globalCompositeOperation to what it was
      this.ctx.globalCompositeOperation = compositeOperation
    }

    // return the Base64 encoded data url string of the image data from the canvas
    return this.canvas.toDataURL('image/png')
  }
}

export default {
  name: 'mockup-tool',
  data () {
    return {
      board: null,
      ghostImg: null,
      ghostFrameImg: null,
      resultImgName: null,
      resultImgUrl: null,
      devices: [{
        name: 'iOS',
        frameImgUrl: require('@/assets/mockup-ios.png'),
        canvasSize: {
          w: 325,
          h: 650
        },
        screenArea: {
          x: 20,
          y: 75,
          w: 285,
          h: 502
        }
      }, {
        name: 'Android',
        frameImgUrl: require('@/assets/mockup-android.png'),
        canvasSize: {
          w: 325,
          h: 640
        },
        screenArea: {
          x: 20,
          y: 58,
          w: 287,
          h: 520
        }
      }],
      deviceIndex: 0
    }
  },
  mounted () {
    let device = this.devices[this.deviceIndex]
    this.initBoard(device)
  },
  computed: {
    canvasSize () {
      return this.devices[this.deviceIndex].canvasSize
    }
  },
  watch: {
    deviceIndex (newIndex, oldIndex) {
      let device = this.devices[newIndex]
      this.initBoard(device, () => {
        if (this.ghostImg) {
          this.board.drawImage(this.ghostImg)
          this.resultImgUrl = this.board.toDataURL()
        }
      })
    }
  },
  methods: {
    initBoard (device, callback) {
      let canvas = document.getElementById('mockup-board')

      this.ghostFrameImg = this.ghostFrameImg ? this.ghostFrameImg : new Image()
      this.ghostFrameImg.onload = () => {
        this.board = new Board(canvas, this.ghostFrameImg, device.screenArea)

        if (callback) {
          callback()
        }
      }
      this.ghostFrameImg.src = device.frameImgUrl
    },
    handleFile (e) {
      const file = e.target.files[0]
      this.resultImgName = 'mock-' + file.name

      this.ghostImg = this.ghostImg ? this.ghostImg : new Image()
      this.ghostImg.onload = () => {
        this.board.drawImage(this.ghostImg)
        this.resultImgUrl = this.board.toDataURL()
        URL.revokeObjectURL(this.ghostImg.src)
      }
      this.ghostImg.src = URL.createObjectURL(file)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  min-width: 740px;
  text-align: center;
}
.mockup-wrapper {
  position: relative;
}
/*.mockup-inner {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}*/
#mockup-board {
  width: 325px;
  height: 650px;
}

.btn-download {
  display: inline-block;
  margin: 20px;
  padding: 5px 20px;
  border: 1px solid blue;
  color: blue;
  text-decoration: none;
}
</style>
