<template>
  <div>
    <div>来点文字：<ElInput v-model="inputValue" /></div>
    <hr />
    纯文本 : <ElInput onlyShowText>纯文本纯文本....</ElInput>
    <hr />
    text: <ElInput />同行的第二个 <ElInput width="500px" />
    <hr />
    复选框 :
    <ElInput
      type="checkbox"
      v-for="(item, index) of checkedList"
      :key="index"
      :disabled="index == 3"
      >checkbox - {{ index }}
    </ElInput>
    <hr />
    单选框：
    <ElInput type="radio" v-model="radioValue" label="1">一</ElInput>
    <ElInput type="radio" v-model="radioValue" label="2">二</ElInput>
    <ElInput type="radio" v-model="radioValue" label="3">三</ElInput>
    <ElInput type="radio" v-model="radioValue" label="4" disabled>四</ElInput>
    <hr />
    两个文本框:
    <ElInput width="300px" /><ElInput width="300px" />
    <hr />
    三个文本框
    <ElInput width="200px" /><ElInput width="200px" /><ElInput width="200px" />
    <hr />
    下拉框
    <ElInput
      width="200px"
      type="select"
      v-model="selectValue"
      placeholder="请选择"
      :options="selectOptions"
      option-key="label"
      option-value="value"
    />
    <hr />
    文本框：
    <ElInput type="textarea" v-model="textareaValue" placeholder="初始化" />
  </div>
</template>

<script>
import ElInput from "./components/ElInput.vue";
export default {
  name: "App",
  components: {
    ElInput,
  },
  data() {
    return {
      inputValue: "",
      checkedList: [
        { id: 1, checked: false },
        { id: 2, checked: false },
        { id: 3, checked: false },
        { id: 4, checked: false },
      ],
      radioValue: "1",
      textareaValue: "",
      selectValue: "",
      selectOptions: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
    };
  },
  methods: {
    handleInput(e) {
      this.inputValue = e.target.value;
    },
    handleCheck(e) {
      this.checked1 = !this.checked1;
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
