<template>
  <b-modal id="modal-todo" ref="modal-todo" title="Edit Your ToDo" hide-footer size="sm">
    <form id="form-modal" @submit="handleSubmit">
      <b-form-group label="Description">
        <b-form-input
          type="text"
          placeholder="Todo's description"
          required
          minlength="10"
          maxlength="50"
          v-model="todo.description"
        ></b-form-input>
        <p>{{ todo.description.length }} out of 50 characters</p>
      </b-form-group>
      <b-form-group label="Date">
        <b-form-input type="date" placeholder="Pick a day" required v-model="todo.date"></b-form-input>
      </b-form-group>
      <p>{{id}}</p>
      <b-button variant="primary" type="submit">Edit</b-button>
    </form>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";
import { setTimeout } from "timers";
// import ClipLoader from "vue-spinner/src/ClipLoader";

export default {
  name: "ModalTodo",
  // components: {
  //   ClipLoader
  // },
  props: {
    id: String,
    todo: {
      type: Object,
      default() {
        return {
          description : '',
          date: ''
        }
      }
    }
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    ...mapActions(["editTodo"]),
    async handleSubmit(e) {
      e.preventDefault();
      const newTodo = { ...this.todo };
      // show confirmation message before update ToDO
      this.$swal({
        title: "Are you sure?",
        text: "Your todo will be updated once you click OK.",
        type: "warning",
        showCancelButton: true,
        confirumButtonText: "OK"
      }).then(result => {
        if (result.value) {
          this.$swal("Updated!", "Your todo has been updated.", "success");
          this.editTodo({ todo: this.todo });
          this.hideModal();
        }
      });
    },
    hideModal() {
      this.$refs["modal-todo"].hide();
    }
  }
};
</script>
