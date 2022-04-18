<template>
  <div class="el-input__wrapper">
    <span v-if="onlyShowText">
      <slot>{{ value }}</slot>
    </span>
    <div class="el-input__text" v-if="isShowText">
      <input
        :name="name"
        :type="type"
        :value="value"
        :style="{ width }"
        @input="handleInput"
      />
    </div>
    <div class="el-input__checkbox" v-if="isShowCheckbox">
      <label>
        <input
          :name="name"
          :type="type"
          :checked="value"
          :style="{ width }"
          :class="{ 'is-disabled': disabled }"
          :disabled="disabled"
          @change="handleCheck"
        />
        <slot></slot>
      </label>
    </div>
    <div class="el-input__radio" v-show="isShowRadio">
      <label>
        <input
          :name="name"
          :type="type"
          :value="label"
          :disabled="disabled"
          :checked="disabled || label === value"
          @change="handleInput"
        />
        <slot></slot>
      </label>
    </div>
    <div class="el-input__select" v-show="isShowSelect">
      <select
        :disabled="disabled"
        :name="name"
        :placeholder="placeholder"
        :style="{ width }"
        :value="value"
        @change="handleInput"
      >
        <option
          :value="item[optionValue]"
          v-for="item in options"
          :key="item[optionValue]"
        >
          {{ item[optionKey] }}
        </option>
      </select>
    </div>
    <div class="el-input__textarea" v-show="isShowTextarea">
      <textarea
        :name="name"
        :value="value"
        :cols="cols"
        :rows="rows"
        @input="handleInput"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ElInput",
  props: {
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
    label: {
      type: [String, Number],
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
    optionKey: {
      type: String,
      default: "",
    },
    optionValue: {
      type: String,
      default: "",
    },
    onlyShowText: {
      type: Boolean,
      default: false,
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
    width: String,
  },
  computed: {
    isShowText() {
      return this.type === "text" && !this.onlyShowText;
    },
    isShowCheckbox() {
      return this.type === "checkbox" && !this.onlyShowText;
    },
    isShowRadio() {
      return this.type === "radio" && !this.onlyShowText;
    },
    isShowSelect() {
      return this.type === "select" && !this.onlyShowText;
    },
    isShowTextarea() {
      return this.type === "textarea" && !this.onlyShowText;
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    handleCheck(e) {
      this.$emit("input", e.target.checked);
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