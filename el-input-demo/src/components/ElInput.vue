<template>
  <div class="el-input__wrapper">
    <div v-if="type === 'select'">
      <select
        :name="name"
        :placeholder="placeholder"
        v-model="inputValue"
        v-on="$listeners"
      >
        <option v-for="item in options" :value="item.value" :key="item.value">
          {{ item.label }}
        </option>
      </select>
    </div>
    <div v-else-if="type === 'textarea'">
      <textarea
        :name="name"
        v-model="inputValue"
        v-bind="$attrs"
        :cols="cols"
        :rows="rows"
        :placeholder="placeholder"
        v-on="$listeners"
      />
    </div>
    <div v-else>
      <input
        :name="name"
        :type="type"
        v-bind="$attrs"
        :value="value"
        v-model="inputValue"
        :disabled="disabled"
        :placeholder="placeholder"
        v-on="$listeners"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ElInput",
  inheritAttrs: false,
  model: {
    prop: "modelValue",
    event: "changeModelValue",
  },
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number, Boolean],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    rows: {
      type: Number,
      default: 10,
    },
    cols: {
      type: Number,
      default: 50,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.inputValue = this.modelValue;
  },
  watch: {
    inputValue(val) {
      this.$emit("changeModelValue", val);
    },
    modelValue(val) {
      this.inputValue = val;
    },
  },
};
</script>

<style lang='less' scoped>
.el-input__wrapper {
  display: inline-block;
  .el-input__text {
    display: inline-block;
    input {
      border: 1px solid #ddd;
      margin-right: 10px;
      border-radius: 5px;
      height: 20px;
    }
  }
  .el-input__checkbox {
    display: inline-block;
    margin-right: 5px;
  }
}
</style>