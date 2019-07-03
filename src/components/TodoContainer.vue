<template>
  <div>
    <div class="main">
      <h1>Todo App</h1>
      <b-row>
        <FormTodo :loading="loading" :todoObj="todoObj" v-on:submitForm="addTodoMethod"/>
        <b-col cols="1"></b-col>
        <b-col cols="7">
          <h4>List of Activity</h4>
          <!-- Show a message there's no ToDo added yet -->
          <div v-if="todoIsEmpty">
            <b-alert show variant="danger">Whoops! There is no ToDo added yet.</b-alert>
          </div>
          <!-- Show a table contains list of ToDo -->
          <div v-else>
            <div class="table-col">
              <TableTodo
                :listOfTodo="todos"
                :tableField="fields"
                v-on:deleteTodo="deleteTodoMethod"
                v-on:editTodo="showModal"
              />
            </div>
          </div>
        </b-col>
      </b-row>
      <ModalTodo :todo="selectedTodo" v-on:setLoading="setLoading"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import { FormTodo, ModalTodo, TableTodo } from "./TodoComponents";
import { setTimeout } from "timers";

export default {
  name: "TodoContainer",
  components: {
    ModalTodo,
    FormTodo,
    TableTodo
  },
  created() {
    this.$store.dispatch("loadTodos");
  },
  data() {
    return {
      todoObj: { description: "", date: "" },
      selectedTodo: { id: "", description: "", date: "" },
      showAlert: true,
      loading: false,
      fields: [
        {
          key: "date",
          label: "Date (yyyy/MM/dd)",
          sortable: true,
          class: "text-center"
        },
        { key: "description", class: "text-center" },
        { key: "deleteTodo", label: "Delete Todo", class: "text-center" },
        { key: "editTodo", label: "Edit Todo", class: "text-center" }
      ]
    };
  },
  methods: {
    ...mapActions(["addTodo", "deleteTodo"]),
    addTodoMethod() {
      //create todo object
      this.todoObj.id = this.uniqueIdGenerator();
      const todo = { ...this.todoObj };
      this.$store.dispatch("addTodo", { todo });
      this.todoObj.id = "";
      this.todoObj.description = "";
      this.todoObj.date = "";
    },
    deleteTodoMethod(item) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$swal("Deleted!", "Your todo has been deleted.", "success");
          this.deleteTodo({ todo: item });
        }
      });
    },
    uniqueIdGenerator() {
      return (
        "_" +
        Math.random()
          .toString(36)
          .substr(2, 9)
      );
    },
    showModal(item) {
      this.selectedTodo = { ...item };
      this.$root.$emit("bv::show::modal", "modal-todo");
    },
    setLoading(flag) {
      this.loading = flag;
    }
  },
  computed: {
    todoIsEmpty() {
      return this.$store.getters.getTodos.length === 0;
    },
    todos() {
      return this.$store.getters.getTodos;
    },
    getTodoById(id) {
      var todo = this.todos.find(todo => todo.id === id);
      return todo;
    }
  }
};
</script>

<style>
h1 {
  margin: 10px 0px 40px 0px;
}
p,
legend {
  text-align: start;
}

h4,
h1,
th {
  text-align: center;
}

.main {
  padding-top: 15px;
  padding-bottom: 15px;
}

.table-col {
  border-radius: 2%;
  padding: 16px;
  margin-bottom: 20px;
  -webkit-box-shadow: 5px 2px 5px 3px rgba(139, 140, 133, 0.56);
  -moz-box-shadow: 5px 2px 5px 3px rgba(139, 140, 133, 0.56);
  box-shadow: 5px 2px 5px 3px rgba(139, 140, 133, 0.56);
}

[v-cloak]::after {
  display: none!important;
}
</style>
