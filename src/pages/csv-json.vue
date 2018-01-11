<template>
  <div class="page">
    <h1>CSV-JSON Converter</h1>
    <section class="input-wrapper">
      <div class="form-control">
        选择CSV/XLS文件或直接输入：<input type="file" @change="handlerFile" accept=".xlsx, .xls, .csv">
      </div>
      <textarea v-model="csv"></textarea>
    </section>
    <section class="output-wrapper">
      <div class="form-control">
        <label for="hasHeader">
          <input type="checkbox" v-model="setting.hasHeader" id="hasHeader">
          第一行是头部
        </label>
      </div>
      <div class="form-control">
        <label for="jsonPretty">
          <input type="checkbox" v-model="setting.jsonPretty" id="jsonPretty">
          美化 JSON
        </label>
      </div>
      <div class="form-control">
        <div v-if="setting.jsonPretty">
          tab 大小
          <label for="tabSpace">
            <input type="radio" v-model="setting.tabSpace" name="tabSpace" value="2">2
            <input type="radio" v-model="setting.tabSpace" name="tabSpace" value="4">4
          </label>
        </div>
      </div>
      <textarea v-model="outputStr" disabled></textarea>
    </section>
  </div>
</template>

<script>
import csv2json from 'csvtojson'
import XLSX from 'xlsx'

export default {
  name: 'csv-json',
  data () {
    return {
      csv: '',
      output: [],
      setting: {
        hasHeader: true,
        jsonPretty: true,
        tabSpace: 2
      }
    }
  },
  computed: {
    outputStr () {
      return JSON.stringify(
        this.output,
        null,
        this.setting.jsonPretty ? Number(this.setting.tabSpace) : false
      )
    }
  },
  watch: {
    csv (val) {
      this.convert()
    },
    'setting.hasHeader' () {
      this.convert()
    }
  },
  methods: {
    handlerFile (e) {
      const file = e.target.files[0]
      this.fileType = file.type
      if (file.type.startsWith('text')) {
        this.handleCsv(file)
      } else {
        this.handleXls(file)
      }
    },
    handleCsv (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.csv = e.target.result
      }
      reader.readAsText(file)
    },
    handleXls (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, {
          type: 'array'
        })

        console.log(workbook)
        this.csv = XLSX.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[0]])
      }
      reader.readAsArrayBuffer(file)
    },
    convert () {
      this.csv2json()
    },
    csv2json () {
      this.output = []
      csv2json({
        noheader: !this.setting.hasHeader
      }).fromString(this.csv)
      .on('csv', (csvRow) => {
        // console.log(csvRow)
      })
      .on('json', (json) => {
        // console.log(json)
        this.output.push(json)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .page {
    text-align: center;

    h1 {
      font-size: 1.5rem;
    }
  }

  section {
    display: inline-block;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    text-align: left;
  }

  textarea {
    width: 100%;
    height: 40vh;
    font-size: 1rem;
    resize: none;
    padding: 10px;
  }

  .form-control {
    display: inline-block;
    margin-right: 10px;
  }
</style>
