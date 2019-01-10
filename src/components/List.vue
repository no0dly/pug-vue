<template lang="pug">
    ul
        app-item(v-for="item in todoList" :key="item.title" :title="item.title" :isDone="item.isDone")
</template>

<script>
import Item from './Item'
import { mapState } from 'vuex'

export default {
  name: 'List',
  components: {
    AppItem: Item
  },
  computed: {
    ...mapState({
      todoList: state => state.todoList
    })
  }
}
</script>
