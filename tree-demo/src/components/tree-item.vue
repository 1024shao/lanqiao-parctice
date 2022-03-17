<template>
  <li>
    <div
      @click="isFolding = !isFolding"
      @dblclick="$emit('makeItemCanFold', item)"
    >
      {{ item.name }}
      <span v-show="item.children">[{{ isFolding ? "-" : "+" }}]</span>
    </div>
    <ol v-show="isFolding && item.children">
      <three-item
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        @addItem="$emit('addItem')"
        @makeItemCanFold="$emit('makeItemCanFold')"
      />
      <span @click="$emit('addItem', item)">+</span>
    </ol>
  </li>
</template>

<script>
export default {
  name: "ThreeItem",
  props: ["item"],
  data() {
    return {
      isFolding: false,
    };
  },
};
</script>

<style>
</style>