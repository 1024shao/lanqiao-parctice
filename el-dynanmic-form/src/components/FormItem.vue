<template>
  <div class="form-item">
    <div class="form-item__inner">
      <div class="right">
        <span v-if="required" class="form-item--required">*</span>
        <span class="form-item__title">{{ title }}</span>
      </div>
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormItem",
  props: {
    title: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='less' scoped>
.form-item {
  margin-top: 15px;
  &__inner {
    display: flex;
  }

  &__title {
    margin-right: 15px;
  }
  .right {
    position: relative;
    padding-left: 15px;
    text-align: right;
    .form-item--required {
      color: red;
      position: absolute;
      left: 3px;
    }
  }
}
</style>