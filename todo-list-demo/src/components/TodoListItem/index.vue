<template>
  <div class="todo-list-item">
    <input type="checkbox" :checked="item.isDo" @click="$emit('updateIsDo')" />
    <p class="content">{{ item.name }}</p>
    <button class="btn" @click="$emit('deleteTodoItem')">X</button>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: ["item", "updateIsDo", "deleteTodoItem"],
};
</script>

<style lang='less' scoped>
.todo-list-item {
  display: flex;
  height: 30px;
  border-bottom: 2px solid #008c8c;
  margin: 1px;
  display: flex;
  justify-content: space-between;
  input {
    margin-top: 10px;
    margin-right: 10px;
    vertical-align: text-bottom;
  }
  p {
    width: 250px;
    text-align: left;
    line-height: 30px;
  }
  .btn {
    visibility: hidden;
    width: 40px;
    align-self: flex-end;
  }
}
.todo-list-item:hover {
  .btn {
    visibility: visible !important;
  }
}
</style>