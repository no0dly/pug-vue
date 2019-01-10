import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {
    ADD_TODO(state, payload) {
      state.todoList.push({
        title: payload,
        isDone: false
      })
    },
    TOGGLE_TODO(state, payload) {
      state.todoList.forEach(item => {
        if (item.title === payload) {
          item.isDone = !item.isDone
        }
      })
    },
    REMOVE_TODO(state, payload) {
      state.todoList = state.todoList.filter(item => {
        return item.title !== payload
      })
    }
  },
  actions: {
    addTodo({ commit }, payload) {
      commit('ADD_TODO', payload)
    },
    toggleTodo({ commit }, payload) {
      commit('TOGGLE_TODO', payload)
    },
    removeTodo({ commit }, payload) {
      commit('REMOVE_TODO', payload)
    }
  }
})
