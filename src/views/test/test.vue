<template>
  <div>
    <testSub v-slot:testSlot>
      <button>测试按钮</button>
    </testSub>
  </div>
</template>

<script>
import testSub from "./testSub";
export default {
  components: {
    testSub
  }
};
</script>

<style>
</style>
