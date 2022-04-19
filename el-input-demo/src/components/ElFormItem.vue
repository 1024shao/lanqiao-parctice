<template>
  <div class="el-form-item">
    <div class="el-form-item__inner">
      <span class="el-form-item__title">{{ label }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ElFormItem",
  props: {
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang='less' scoped>
.el-form-item {
  &__inner {
    display: flex;
    margin-bottom: 5px;
  }
  &__title {
    margin-right: 10px;
    width: 90px;
    text-align: right;
  }
}
</style>