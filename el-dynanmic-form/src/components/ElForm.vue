<template>
  <div class="el-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ElForm",
  provide() {
    return {
      ElForm: this,
    };
  },
  data() {
    return {
      fields: [],
    };
  },
  props: {
    model: Object,
    rules: Object,
  },
  created() {
    this.$bus.$on("add-form-item", (field) => {
      this.fields.push(field);
    });
    this.$bus.$on("remove-form-item", (field) => {
      this.fields = this.fields.filter((item) => item != field);
    });
    this.$bus.$on("validateFields", () => {});
  },
  methods: {
    validateFields() {
      this.fields.forEach((item) => {
        item.validate();
      });
    },
    resetFields() {
      this.fields.forEach((item) => {
        item.reset();
      });
    },
  },
};
</script>

<style>
</style>