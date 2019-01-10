<template lang="pug">
    div.input
        el-input(placeholder="Please input" v-model="value" class="input-with-select")
            el-button(slot="append" @click="addTodo") Submit
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      value: null
    }
  },
  methods: {
    addTodo() {
      this.$store.dispatch('addTodo', this.value).then(() => {
        this.value = null
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  margin-bottom: 20px;
}
</style>
