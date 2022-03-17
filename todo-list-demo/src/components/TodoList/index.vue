<template>
  <div class="todo-list">
    <TodoListItem
      v-for="(item, index) in todoList"
      :key="index"
      :item="item"
      @updateIsDo="update(index)"
      @deleteTodoItem="$emit('deleteTodoItem', index)"
    />
  </div>
</template>

<script>
import TodoListItem from "../TodoListItem";
export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
  props: ["todoList", "updateIsDo", "deleteTodoItem"],
  methods: {
    update(index) {
      this.$emit("updateIsDo", index);
    },
  },
};
</script>

<style>
</style>