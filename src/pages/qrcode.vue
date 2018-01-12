<template>
  <div class="page">
    <h1>二维码识别／生成</h1>
    <details id="tab1" ref="tab1" @toggle="handleToggle">
      <summary>识别二维码</summary>
      <div>
        <div>
          <p>选择图片：</p>
          <input type="file" accept="image/gif, image/png, image/jpg, image/jpeg" @change="handleFile">
          <!-- <p>或者输入图片链接并回车：</p> -->
          <!-- <input type="text" placeholder="输入图片链接" @keyup.enter="handleFileFromUrl"> -->
        </div>

        <div>
          <img class="preview" alt="" ref="img">
        </div>

        <div class="result-wrapper" v-if="decode.result">
          <p>识别结果:</p>
          <blockquote class="result">
            <a v-if="isLink" :href="decode.result" target="_blank">{{ decode.result }}</a>
            <em v-if="!isLink">{{ decode.result }}</em>
          </blockquote>
        </div>
      </div>
    </details>

    <details id="tab2" ref="tab2" @toggle="handleToggle">
      <summary>生成二维码</summary>
      <section>
        <div>
          <p>输入内容：</p>
          <textarea v-model="encode.input"></textarea>
          <button @click="generateQrCode">生成二维码</button>
        </div>
        <div class="result-wrapper">
          <p>canvas:</p>
          <canvas id="canvas" ref="canvas" width="200" height="200"></canvas>
          <p>svg:</p>
          <div v-html="encode.svg" class="svg-wrapper"></div>
        </div>
      </section>
    </details>

  </div>
</template>

<script>
import QrCode from 'qrcode'
import QrCodeReader from 'qrcode-reader'
const qrReader = new QrCodeReader()

export default {
  name: 'base64',
  data () {
    return {
      encode: {
        input: '',
        svg: ''
      },
      decode: {
        imgUrl: '',
        result: ''
      }
    }
  },
  computed: {
    isLink () {
      return this.decode.result.indexOf('://') > 0
    }
  },
  methods: {
    handleToggle (e) {
      ['tab1', 'tab2'].filter(item => item !== e.target.id).forEach(item => {
        if (e.target.getAttribute('open') === null) {
          this.$refs[item].setAttribute('open', '')
        } else {
          this.$refs[item].removeAttribute('open')
        }
      })
    },
    handleFile (e) {
      console.log(e.target.files)
      const file = e.target.files[0]
      const url = URL.createObjectURL(file)
      const img = this.$refs.img

      this.decode.imgUrl = url
      img.src = url

      qrReader.callback = (err, res) => {
        URL.revokeObjectURL(url)

        if (err) {
          console.error(err)
          this.decode.result = ''
          alert('没有检测到二维码。')
          return
        }

        this.decode.result = res.result
      }

      qrReader.decode(url)
    },
    generateQrCode (e) {
      const canvas = this.$refs.canvas
      const data = this.encode.input
      QrCode.toCanvas(canvas, data, (err) => {
        if (err) {
          console.error(err)
          return
        }

        console.log('success')
      })

      QrCode.toString(data, (err, svg) => {
        if (err) {
          console.error(err)
          return
        }
        this.encode.svg = svg
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .page {
    text-align: center;
  }

  details {
    border: 1px solid #000;
    margin: 30px auto;
    width: 80%;
    summary {
      text-align: left;
      cursor: pointer;
      padding: 10px;
    }
    summary:focus {
      outline: none;
    }
  }

  details[open] {
    height: 80vh;
    summary {
      border-bottom: 1px solid #000;
    }
  }

  img {
    max-width: 300px;
    max-height: 300px;
  }

  .result {
    border: 1px dashed #666;
    padding: 25px 10px;
    text-align: center;
  }

  textarea {
    display: block;
    width: 80%;
    height: 100px;
    margin: 0 auto 20px;
  }

</style>
<style lang="less">
  .svg-wrapper {
    svg {
      width: 200px;
    }
  }
</style>
