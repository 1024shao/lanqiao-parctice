<template>
  <div class="dynamic-form">
    <div class="dynamic-form-content">
      <el-form ref="ruleForm" :model="formData" :rules="rules">
        <form-item title="标题" prop="title">
          <el-input v-model="formData.title" />
        </form-item>

        <form-item title="类型" prop="axis">
          <label>
            <el-input
              type="radio"
              value="横轴"
              v-model="formData.axis"
              name="axis"
            />横轴
          </label>
          <label>
            <el-input
              type="radio"
              value="纵轴"
              v-model="formData.axis"
              name="axis"
            />纵轴
          </label>
        </form-item>

        <form-item title="时间节点">
          <div class="time-node-list">
            <div
              class="time-node"
              v-for="(node, index) in formData.timeNodes"
              :key="index"
            >
              <div class="left">
                <form-item title="时间" :prop="'timeNodes[' + index + '].time'">
                  <el-input v-model="node.time" />
                </form-item>
                <form-item title="内容">
                  <el-input v-model="node.content" />
                </form-item>
                <form-item title="链接">
                  <el-input v-model="node.url" />
                </form-item>
              </div>
              <div class="right">
                <span class="delete" @click="deleteNodeByIndex(index)"
                  >删除</span
                >
                <span class="move-down" @click="moveDownNode(index)">下移</span>
              </div>
            </div>
          </div>
        </form-item>
      </el-form>
    </div>

    <div class="add-node" @click="addNode">+添加节点</div>
    <div class="dynamic-form-footer">
      <div class="create" @click="showFormData">立即创建</div>
      <div class="remake" @click="resetFormData">重制</div>
    </div>
  </div>
</template>

<script>
import FormItem from "./FormItem.vue";
import ElInput from "./ElInput.vue";
import ElForm from "./ElForm.vue";
export default {
  name: "UseDynamicForm",
  components: {
    FormItem,
    ElInput,
    ElForm,
  },
  data() {
    return {
      formData: {
        title: "",
        axis: "",
        timeNodes: [{ time: "", content: "", url: "" }],
      },
      rules: {
        title: { required: true, message: "标题不能为空" },
        axis: { required: true, message: "类型必选" },
        timeNodes: [{ time: { required: true, message: "时间必须" } }],
      },
    };
  },
  methods: {
    addNode() {
      this.formData.timeNodes.push({ time: "", content: "", url: "" });
    },
    deleteNodeByIndex(index) {
      this.formData.timeNodes.splice(index, 1);
    },
    moveDownNode(index) {
      if (index === this.formData.timeNodes.length - 1) {
        return;
      }
      let tempNode = this.formData.timeNodes[index];
      this.deleteNodeByIndex(index);
      this.formData.timeNodes.splice(index + 1, 0, tempNode);
    },
    showFormData() {
      this.$refs.ruleForm.validateFields();
      console.log(this.formData);
    },
    resetFormData() {
      this.$refs.ruleForm.resetFields();
      this.formData.title = "";
      this.formData.axis = "";
      this.formData.timeNodes = this.formData.timeNodes.map(() => ({
        title: "",
        content: "",
        url: "",
      }));
    },
  },
};
</script>

<style lang='less' scoped>
.dynamic-form {
  width: 500px;

  .add-node {
    text-align: center;
    margin-top: 15px;
    position: relative;
    left: -20px;
  }
  &-footer {
    margin-top: 20px;
    display: flex;
    .create,
    .remake {
      width: 100px;
      height: 50px;
      line-height: 50px;
      color: white;
      text-align: center;
      cursor: pointer;
    }
    .create {
      background-color: #008c8c;
      margin-right: 10px;
    }
    .remake {
      background-color: #ccc;
    }
  }
  .time-node-list {
    display: flex;
    flex-direction: column;
    .time-node {
      margin-top: 10px;
      display: flex;
      .left {
        border: 3px solid #000;
        width: 100%;
        padding: 20px;
      }
    }
  }
}
</style>