<template>
  <form @submit="submitMethod">
    <div class="input-container">
      <label class="label" for="todoDescription">
        <input
          placeholder=" "
          class="input"
          id="todoDescription"
          v-model="todoObj.description"
          type="text"
          pattern=".{10,50}"
          required
        />
        <span class="placeholder">Description</span>
        <span class="border-label"></span>
        <p class="input-length">{{todoObj.description.length}} out of 50 characters</p>
      </label>
    </div>
    <div class="input-container">
      <label class="label" for="date">
        <input
          placeholder=" "
          class="input"
          id="date"
          v-model="todoObj.date"
          type="date"
          pattern=".{10,50}"
          required
        />
        <span class="placeholder">Date</span>
        <span class="border-label"></span>
      </label>
    </div>
    <button class="c-btn" type="submit">
      <span>Add</span>
    </button>
  </form>
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
  border: 1px solid rgba(139, 140, 133, 0.56);
  background-color: #f1f0f0e7;
}
.c-btn {
  background: #008000;
  color: white;
  transition: 0.5s;
  border: 0;
  width: 120px;
  height: auto;
  padding: 2px 10px;
  border-radius: 0.2rem;
  margin: 10px auto;
}

.c-btn:hover {
  background: #4ca64c;
}

.label .input-length {
  position: absolute;
  font-size: 12px;
}
</style>
