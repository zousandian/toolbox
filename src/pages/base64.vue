<template>
  <div class="page">
    <h1>Image to Base64</h1>

    <section>
      <div>
        <p>选择图片：</p>
        <input type="file" accept="image/gif, image/png, image/jpg, image/jpeg" @change="handlerFile">
        <p>或者输入图片链接并回车：</p>
        <input type="text" placeholder="输入图片链接" @keyup.enter="handlerFileFromUrl">
      </div>

      <div>
        <dl v-if="imgBase64">
          <dt>图片名称：</dt>
          <dd>{{ file.name }}</dd>
          <dt>图片类型：</dt>
          <dd>{{ file.type }}</dd>
          <dt>图片大小：</dt>
          <dd>{{ (file.size / 1024).toFixed(2)  }} KB</dd>
          <dt>图片尺寸：</dt>
          <dd>{{ file.width }} x {{ file.height }}</dd>
          <dt>base64</dt>
          <dd>
            <textarea v-model="imgBase64"></textarea>
          </dd>
        </dl>
        <img class="preview" alt="" ref="img">
      </div>
    </section>
  </div>
</template>

<script>
const reader = new FileReader()

export default {
  name: 'base64',
  data () {
    return {
      file: {
        name: '',
        type: '',
        size: 0,
        width: 0,
        height: 0
      },
      imgBase64: ''
    }
  },
  methods: {
    handlerFile (e) {
      console.log(e.target.files)
      const file = e.target.files[0]
      this.file = {
        name: file.name,
        type: file.type,
        size: file.size,
        width: 0,
        height: 0
      }
      reader.readAsDataURL(file)
    },
    handlerFileFromUrl (e) {
      const url = e.target.value.trim()
      if (!url.startsWith('http')) {
        alert('请输入正确的图片链接')
        return
      }

      const img = this.$refs.img
      img.onload = (e) => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = img.naturalWidth || img.clientWidth
        canvas.height = img.naturalHeight || img.clientHeight

        ctx.drawImage(img, 0, 0)
        const dataUrl = canvas.toDataURL('image/png')
        this.imgBase64 = dataUrl
      }

      img.crossOrigin = 'Anonymous'
      img.src = url
    }
  },
  mounted () {
    reader.onload = (e) => {
      this.imgBase64 = e.target.result
      img.src = this.imgBase64
    }

    const img = this.$refs.img
    img.onload = (e) => {
      console.log(img.naturalWidth || img.clientWidth, this)
      this.file.width = img.naturalWidth || img.clientWidth
      this.file.height = img.naturalHeight || img.clientHeight
    }
  }
}
</script>

<style scoped>
  dl {
    float: left;
    width: calc(100% - 200px);
  }
  .preview {
    max-width: 150px;
    float: right;
  }
  textarea {
    width: 100%;
    height: 500px;
    display: block;
  }

  input[type=text] {
    width: 500px;
  }
</style>
