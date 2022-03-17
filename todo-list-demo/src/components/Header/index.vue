<template>
  <div class="header">
    <input
      type="text"
      class="input"
      v-model="todoName"
      placeholder="what needs to be done ? "
      @keydown.enter="
        () => {
          $emit('addTodo', todoName);
          todoName = '';
        }
      "
    />
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      todoName: "",
    };
  },
  props: ["addTodo"],
  methods: {},
};
</script>

<style lang='less' scoped>
.header {
  height: 50px;
  .input {
    height: 40px;
    width: 100%;
  }
}
</style>