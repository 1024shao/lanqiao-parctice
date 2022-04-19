<template>
  <div>
    <el-form-item label="来点文字:">
      <ElInput v-model="inputValue" />
    </el-form-item>

    <el-form-item label="纯文本:">
      {{ peerText }}
    </el-form-item>

    <el-form-item label="text:">
      <ElInput />
      <span>同行的第二个 </span><ElInput />
    </el-form-item>

    <el-form-item label="复选框:">
      <ElInput
        type="checkbox"
        v-for="(item, index) of checkedList"
        v-model="item.checked"
        :key="index"
        :disabled="index == 3"
        >checkbox - {{ index }}
      </ElInput>
    </el-form-item>

    <el-form-item label="单选框">
      <ElInput type="radio" v-model="radioValue" value="1">一</ElInput>
      <ElInput type="radio" v-model="radioValue" value="2">二</ElInput>
      <ElInput type="radio" v-model="radioValue" value="3">三</ElInput>
      <ElInput type="radio" v-model="radioValue" value="4" disabled>四</ElInput>
    </el-form-item>

    <el-form-item label="两个文本框:">
      <ElInput :style="{ width: '200px' }" />
      <ElInput :style="{ width: '300px' }" />
    </el-form-item>

    <el-form-item label="三个文本框:">
      <ElInput :style="{ width: '200px' }" />
      <ElInput :style="{ width: '200px' }" />
      <ElInput :style="{ width: '200px' }" />
    </el-form-item>

    <el-form-item label="下拉框">
      <ElInput
        type="select"
        v-model="selectValue"
        placeholder="请选择"
        :options="selectOptions"
      />
    </el-form-item>

    <el-form-item label="文本框:">
      <ElInput type="textarea" v-model="textareaValue" placeholder="初始化" />
    </el-form-item>
  </div>
</template>

<script>
import ElInput from "./components/ElInput.vue";
import ElFormItem from "./components/ElFormItem.vue";
export default {
  name: "App",
  components: {
    ElInput,
    ElFormItem,
  },
  data() {
    return {
      inputValue: "",
      peerText: "纯文本、纯文本、纯文本、。。。。。。",
      checkedList: [
        { id: 1, checked: false },
        { id: 2, checked: false },
        { id: 3, checked: false },
        { id: 4, checked: false },
      ],
      radioValue: "",
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
};
</script>
