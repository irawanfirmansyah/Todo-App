<template>
  <b-col cols="4">
    <h4>Add your todo here</h4>
    <b-form class="form-col" @submit="submitMethod">
      <div v-if="isLoading">
        <div>Loading ...</div>
        <!-- <pulse-loader :loading="true"></pulse-loader> -->
      </div>
      <div v-else>
        <b-form-group label="Todo description">
          <b-form-input
            type="text"
            placeholder="Tell me what will you do here"
            v-model="todoObj.description"
            required
            aria-required="true"
            minlength="10"
            maxlength="50"
          ></b-form-input>
          <p>{{ todoObj.description.length }} out of 50 characters</p>
        </b-form-group>
        <b-form-group label="Date">
          <b-form-input
            type="date"
            placeholder="Pick a day"
            v-model="todoObj.date"
            required
            aria-required="true"
          ></b-form-input>
        </b-form-group>
        <button class="btn-todo" type="submit">
          <span>Add</span>
        </button>
      </div>
    </b-form>
  </b-col>
</template>

<script>
// import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { mapGetters } from "vuex";
export default {
  name: "FormTodo",
  // components: {
  //   PulseLoader
  // },
  props: {
    todoObj: Object
  },
  methods: {
    submitMethod(e) {
      e.preventDefault();
      this.$emit("submitForm");
    }
  },
  computed: {
    ...mapGetters(["isLoading"])
  }
};
</script>

<style>
.form-col {
  border-radius: 3%;
  padding: 16px 16px 16px 16px;
  -webkit-box-shadow: 5px 2px 5px 3px rgba(139, 140, 133, 0.56);
  -moz-box-shadow: 5px 2px 5px 3px rgba(139, 140, 133, 0.56);
  box-shadow: 5px 2px 5px 3px rgba(139, 140, 133, 0.56);
}
.btn-todo {
  background: #008000;
  color: white;
  transition: 0.5s;
  border: 0;
  width: 120px;
  height: auto;
  padding: 2px 10px;
  border-radius: 0.2rem;
}

.btn-todo:hover {
  background: #4ca64c;
}
</style>
