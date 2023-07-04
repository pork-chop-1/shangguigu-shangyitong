<script setup lang="ts">
</script>

<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HospitalTop />
    <div class="content">
      <router-view ></router-view>
    </div>
    <!-- 底部全局组件 -->
    <HospitalBottom />
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  
  .content {
    width: 1200px;
    min-height: 700px;
    margin: 70px auto 0;
  }
}
</style>