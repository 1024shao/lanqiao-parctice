<template>
  <div class="footer">
    <span class="total">{{ total }} item left</span>
    <input
      type="checkbox"
      name="s"
      id="all"
      :checked="showState == 0"
      @click="$emit('changeShowState', 0)"
    /><label for="all">all</label>
    <input
      type="checkbox"
      name="s"
      id="active"
      :checked="showState == 1"
      @click="$emit('changeShowState', 1)"
    /><label for="active">active</label>
    <input
      type="checkbox"
      name="s"
      id="complected"
      :checked="showState == 2"
      @click="$emit('changeShowState', 2)"
    /><label for="complected">complected</label>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["total", "showState", "changeShowState"],
};
</script>

<style lang='less' scoped>
.footer {
  margin-top: 10px;
}
span {
  margin-right: 50px;
}
input {
  margin-left: 20px;
}
</style>