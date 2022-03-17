<template>
  <div id="app">
    <Header @addTodo="addTodo" />
    <TodoList
      :todoList="List"
      @updateIsDo="updateIsDo"
      @deleteTodoItem="deleteTodoItem"
    />
    <Footer
      v-show="todoList.length != 0"
      :total="todoList.length"
      :showState="showState"
      @changeShowState="changeShowState"
    />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Footer,
    TodoList,
    Header,
  },
  data() {
    return {
      todoList: [
        { name: "吃饭", isDo: false },
        { name: "shuijiao", isDo: true },
      ],
      showState: 0, // 0 all 1 active 2 complected
    };
  },
  computed: {
    List() {
      if (this.showState == 0) {
        return this.todoList;
      } else if (this.showState == 2) {
        return this.todoList.filter((item) => item.isDo);
      } else {
        return this.todoList.filter((item) => !item.isDo);
      }
    },
  },
  methods: {
    updateIsDo(index) {
      this.todoList[index].isDo = !this.todoList[index].isDo;
    },
    addTodo(name) {
      this.todoList.push({ name: name, isDo: false });
    },
    changeShowState(state) {
      this.showState = state;
    },
    deleteTodoItem(index) {
      this.todoList.splice(index, 1);
    },
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  margin: 20px auto;
  width: 400px;
}
</style>
