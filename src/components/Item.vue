<template lang="pug">
    li.todo
        div.todo-check
            el-checkbox(v-model="checked")
        div.todo-content
            p.todo-content__text  {{title}}
        div.todo-actions
            el-button(@click="removeTodo") remove
</template>

<script>
export default {
  name: 'item',
  props: {
    title: {
      type: String,
      required: true
    },
    isDone: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    checked: {
      get() {
        return this.isDone
      },
      set(value) {
        this.$store.dispatch('toggleTodo', this.title)
      }
    }
  },
  methods: {
    removeTodo() {
      this.$store.dispatch('removeTodo', this.title)
    }
  }
}
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
