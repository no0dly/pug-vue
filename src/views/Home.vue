<template lang="pug">
  el-container
    .wrapper
      app-input
      app-list
</template>

<script>
import Input from './../components/Input'
import List from './../components/List'

export default {
  name: 'home',
  components: {
    AppInput: Input,
    AppList: List
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
