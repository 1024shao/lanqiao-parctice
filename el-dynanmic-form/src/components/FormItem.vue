<template>
  <div class="form-item">
    <div class="form-item__inner">
      <div class="right">
        <span v-if="required" class="form-item--required">*</span>
        <span class="form-item__title">{{ title }}</span>
      </div>
      <slot> </slot>
    </div>
    <div class="warning" v-show="validateMessage.length != 0">
      {{ validateMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FormItem",
  inject: ["ElForm"],
  data() {
    return {
      validateMessage: "",
      required: false,
      validateName: "",
      itemIndex: 0,
      arrName: "",
      arrItemName: "",
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    prop: String,
  },
  methods: {
    validate() {
      const { validateName, arrName, itemIndex, arrItemName } = this;
      if (validateName != "" && this.ElForm.model[validateName] === "") {
        this.validateMessage = this.ElForm.rules[validateName].message;
      } else if (
        arrName != "" &&
        this.ElForm.model[arrName][itemIndex][arrItemName] === ""
      ) {
        this.validateMessage =
          this.ElForm.rules[arrName][itemIndex][arrItemName].message;
      } else {
        this.validateMessage = "";
      }
    },
    reset() {
      this.validateMessage = "";
    },
    setRequired() {
      const { validateName, arrName, itemIndex, arrItemName } = this;
      if (validateName != "") {
        this.required = this.ElForm.rules[this.prop].required;
      } else if (arrName != "") {
        this.required =
          this.ElForm.rules[arrName][itemIndex][arrItemName].required;
      }
    },
    initValidateName() {
      if (this.prop && this.prop.indexOf("[") != -1) {
        this.itemIndex = parseInt(this.prop.replace(/[^\d]/g, " "));
        let lastIndex = this.prop.indexOf(this.itemIndex);
        this.arrName = this.prop.substring(0, lastIndex - 1);
        this.arrItemName = this.prop.substring(lastIndex + 3);
      } else if (this.prop) {
        this.validateName = this.prop;
      }
    },
  },
  mounted() {
    this.initValidateName();
    this.setRequired();
    if (this.prop) {
      this.$bus.$emit("add-form-item", this);
    }
  },
  beforeDestroy() {
    this.$bus.$emit("remove-form-item", this);
  },
};
</script>

<style lang='less' scoped>
.form-item {
  margin-top: 15px;
  margin-bottom: 20px;
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
  .warning {
    color: red;
    font-size: 12px;
    margin-left: 10px;
  }
}
</style>