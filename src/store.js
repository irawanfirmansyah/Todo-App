import Vue from 'vue'
import Vuex from 'vuex'
import { getAllTodo, editTodo, addTodo, deleteTodo } from "./APIUtils";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [],
    loading: false
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos = [...state.todos, todo]
    },
    DELETE_TODO(state, todo) {
      state.todos = state.todos.filter((item) => todo.id !== item.id);
    },
    EDIT_TODO(state, todo) {
      state.todos.map((item) => {
        if (item.id === todo.id) {
          Object.assign(item, todo);
        }
      })
    },
    LOAD_TODOS(state, todos) {
      state.todos = [...todos]
    }
  },
  actions: {
    addTodo({ commit }, { todo }) {
      addTodo(todo).then(res => {
        commit('ADD_TODO', res.data)
      })
    },
    deleteTodo({ commit }, { todo }) {
      deleteTodo(todo).then(res => {
        commit('DELETE_TODO', todo)
      });
    },
    editTodo({ commit }, { todo }) {
      editTodo(todo).then(res => {
        commit('EDIT_TODO', res.data)
      })
    },
    loadTodos({ commit }) {
      getAllTodo().then(res => {
        commit('LOAD_TODOS', res.data)
      })
    }
  },
  getters: {
    getTodoById: (state) => (id) => {
      var todo = state.todos.find((todo) => {
        todo.id === id
      })
      return todo
    },
    getTodos: (state) => {
      return state.todos;
    },
    isLoading: (state) => {
      return state.loading;
    }
  },
  modules: {

  }
});

export default store;