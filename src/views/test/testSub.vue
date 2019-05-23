<template>
  <div>
    <div class="a">
      <slot name="testSlot"></slot>
    </div>
    <!-- <div class="a" v-if="$slots.default">
      没有名字的插槽
      <slot></slot>
    </div> -->
  </div>
</template>

<script>
export default {
  created() {
    console.log(this);
  }
};
</script>

<style>
</style>
