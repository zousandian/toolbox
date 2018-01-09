<template>
  <div class="page">
    <h1>HTML entities encode & decode</h1>

    <section>
      <h2>decoded</h2>
      <textarea name="decoded" @input="encode" v-model="htmlDecoded"></textarea>
    </section>
    <section>
      <h2>encoded</h2>
      <textarea name="encoded" @input="decode" v-model="htmlEncoded"></textarea>
    </section>
  </div>
</template>

<script>
import he from 'he'

export default {
  name: 'html-entities',
  data () {
    return {
      htmlEncoded: '',
      htmlDecoded: ''
    }
  },
  methods: {
    encode (e) {
      this.htmlEncoded = he.encode(this.htmlDecoded, {
        useNamedReferences: true
      })
    },
    decode (e) {
      this.htmlDecoded = he.decode(this.htmlEncoded)
    }
  }
}
</script>

<style scoped>
  .page {
    text-align: center;
  }

  section {
    display: inline-block;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  textarea {
    width: 100%;
    height: 500px;
    font-size: 1rem;
  }

</style>
