<template lang="pug">
  .hello
    h1 {{ msg }}
    p
     | For a chlen guide and recipes on how to configure / customize this project,<br>
     | check out the
     a( href="https://cli.vuejs.org" target="_blank" rel="noopener") vue-cli documentation.
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    chlen () {
      console.log('test')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
