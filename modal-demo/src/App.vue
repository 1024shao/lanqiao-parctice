<template>
  <div id="app">
    <button @click="modalAVisible = true">showModalA</button>
    <Modal title="ModalA" :visible="modalAVisible">
      <button @click="modalBVisible = true">showModalB</button>
    </Modal>
    <Modal title="ModalB" :visible="modalBVisible">
      <button @click="modalCVisible = true">showModalC</button>
    </Modal>
    <Modal title="ModalC" :visible="modalCVisible">
      <button>showModalC</button>
    </Modal>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      modalAVisible: false,
      modalBVisible: false,
      modalCVisible: false,
    };
  },
};
</script>

<style lang="less">
</style>
