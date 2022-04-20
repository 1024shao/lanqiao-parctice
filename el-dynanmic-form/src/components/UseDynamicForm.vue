<template>
  <div class="dynamic-form">
    <div class="dynamic-form-content">
      <FormItem title="标题" required>
        <ElInput v-model="formData.title" />
      </FormItem>

      <FormItem title="类型" required>
        <label>
          <ElInput
            type="radio"
            value="横轴"
            v-model="formData.axial"
            name="axial"
          />横轴
        </label>
        <label>
          <ElInput
            type="radio"
            value="纵轴"
            v-model="formData.axial"
            name="axial"
          />纵轴
        </label>
      </FormItem>

      <FormItem title="时间节点">
        <div class="time-node-list">
          <div
            class="time-node"
            v-for="(node, index) in formData.timeNodes"
            :key="index"
          >
            <div class="left">
              <FormItem required title="时间">
                <el-input v-model="node.time" />
              </FormItem>
              <FormItem required title="内容">
                <el-input v-model="node.content" />
              </FormItem>
              <FormItem title="链接">
                <el-input v-model="node.url" />
              </FormItem>
            </div>
            <div class="right">
              <span class="delete" @click="deleteNodeByIndex(index)">删除</span>
              <span class="move-down" @click="moveNodeDown(index)">下移</span>
            </div>
          </div>
        </div>
      </FormItem>
    </div>

    <div class="add-node" @click="addNode">+添加节点</div>
    <div class="dynamic-form-footer">
      <div class="create" @click="showFormData">立即创建</div>
      <div class="remake" @click="remakeFormData">重制</div>
    </div>
  </div>
</template>

<script>
import FormItem from "./FormItem.vue";
import ElInput from "./ElInput.vue";
export default {
  name: "UseDynamicForm",
  components: {
    FormItem,
    ElInput,
  },
  data() {
    return {
      formData: {
        title: "",
        axial: "",
        timeNodes: [{ time: "", content: "", url: "" }],
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
    moveNodeDown(index) {
      if (index === this.formData.timeNodes.length - 1) {
        return;
      }
      let tempNode = this.formData.timeNodes[index];
      this.deleteNodeByIndex(index);
      this.formData.timeNodes.splice(index + 1, 0, tempNode);
    },
    showFormData() {
      console.log(this.formData);
    },
    remakeFormData() {
      this.formData.title = "";
      this.formData.axial = "";
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