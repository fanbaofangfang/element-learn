<template>
  <div class="home">
    <el-alert closeText="关闭" type="success" :closable="true" :center="true">
      <template v-slot:title>
        <div>123</div>
      </template>
      <p>这是内容</p>
    </el-alert>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
