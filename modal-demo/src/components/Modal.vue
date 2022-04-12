<template>
  <div class="modal" v-show="visible">
    <div class="modal__wrapper">
      <div class="modal__container">
        <div class="modal__title">
          <h3>{{ title }}</h3>
        </div>
        <div class="modal__footer">
          <div class="modal__btn--cancel">
            <button>取消</button>
          </div>
          <div class="modal__btn--confirm">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      default: "默认标题",
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang='less' scoped>
.modal__wrapper {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.modal__container {
  width: 40%;
  padding: 20px;
  margin: 15vh auto 0;
  background-color: #fff;
}
.modal__footer {
  display: flex;
  justify-content: flex-end;
  .modal__btn--confirm,
  .modal__btn--cancel {
    width: 80px;
    height: 40px;
    line-height: 40px;
    margin-left: 10px;
  }
}
</style>