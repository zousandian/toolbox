<template>
  <span class="field-wrapper">
    <span class="field-value">
      {{field}}
    </span>
    <span class="field-slider">
      <input type="range" :value="field" @input="updateFeild" :max="max" :min="min">
    </span>
  </span>
</template>

<script>
export default {
  props: {
    field: Number,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  methods: {
    updateFeild (e) {
      this.$emit('update:field', Number(e.target.value))
    }
  }
}
</script>

<style scoped>
  .field-wrapper {
    position: relative;
    display: inline-block;
    white-space: nowrap;
  }

  .field-value {
    font-weight: bold;
    font-size: 1.25rem;
    color: #00d200;
    padding: 5px;
    /*margin: 5px;*/
    display: inline-block;
    border: 1px dashed
  }

  .field-slider {
    display: none;
    position: absolute;
    left: 0;
    top: -30px;
    padding: 5px 15px;
    transform: translateX(-30%);
    border: 1px dashed #000;
    background: #fff;
  }

  .field-wrapper:hover .field-slider {
    display: block;
  }
</style>
