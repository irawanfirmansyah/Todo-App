<template>
  <div class="todo container">
    <TodoContainer/>
  </div>
</template>

<script>
import TodoContainer from "@/components/TodoContainer.vue";

export default {
  name: "TodoPage",
  components: {
    TodoContainer
  }
};
</script>
