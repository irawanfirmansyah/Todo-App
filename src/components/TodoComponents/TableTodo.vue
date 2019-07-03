<template>
  <b-table
    hover
    outlined
    responsive
    :items="listOfTodo"
    :fields="tableField"
    :tbody-tr-class="rowClass"
  >
    <template slot="deleteTodo" slot-scope="row">
      <b-button size="sm" variant="danger" @click="deleteMethod(row.item)">Delete</b-button>
    </template>
    <template slot="editTodo" slot-scope="row">
      <b-button size="sm" variant="warning" @click="editMethod(row.item)">Edit</b-button>
    </template>
    <template slot="table-caption">*Yellow row = past 7 days</template>
  </b-table>
</template>

<style scoped>
* {
  margin: 0;
}
ul {
  list-style: none;
}

.todo-item {
  padding: 8px 30px;
  text-align: left;
  /* background: #F5F5F5; */
}

.todo-item__container {
  margin: 8px 0px;
}

.todo-item__description {
  font-size: 18px;
  margin: 0px 10px;
  font-weight: 600;
  color: #323232;
}

.todo-item__date {
  font-size: 16px;
  opacity: 0.4;
  margin: 0 10px;
}

.todo-item__options {
  margin: 0 10px;
  float: right;
}
.todo-icon {
  width: 16px;
  height: auto;
  cursor: pointer;
  margin: 0 30px;
  padding: px;
  transition: 0.3s;
}

.todo-icon:hover {
  width: 24px;
}

.in-block {
  display: inline-block;
}
</style>


<script>
export default {
  name: "TableTodo",
  props: {
    listOfTodo: Array,
    tableField: Array
  },
  methods: {
    deleteMethod(item) {
      this.$emit("deleteTodo", item);
    },
    editMethod(item) {
      this.$emit("editTodo", item);
    },
    rowClass(item, type) {
      if (!item) return;
      var now = new Date();
      var itemDate = new Date(item.date);
      var dateDiffMS = now.getTime() - itemDate.getTime();
      let dateDiffDays;
      dateDiffDays = Math.floor(dateDiffMS / (1000 * 3600 * 24));
      if (dateDiffDays >= 7) {
        return "table-warning";
      }
    }
  }
};
</script>