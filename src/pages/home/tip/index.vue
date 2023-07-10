<script setup lang="ts">
import { Bell, ArrowRight } from '@element-plus/icons-vue'
</script>

<template>
  <div class="tip">
    <div class="title">
      <div class="l">
        <el-icon><Bell /></el-icon>
        常见科室
      </div>
      <div class="r">
        全部
        <el-icon><ArrowRight /></el-icon>
      </div>
    </div>
    <ul class="list">
      <li>儿科</li>
      <li>儿科</li>
      <li>儿科</li>
      <li>儿科</li>
      <li>儿科</li>
      <li>儿科</li>
      <li>儿科</li>
      <li>儿科</li>
    </ul>
  </div>
  <div class="tip">
    <div class="title">
      <div class="l">
        <el-icon><Bell /></el-icon>
        平台公告
      </div>
      <div class="r">
        全部
        <el-icon><ArrowRight /></el-icon>
      </div>
    </div>
    <ul class="list">
      <li>脑科</li>
      <li>脑科</li>
      <li>脑科</li>
      <li>脑科</li>
      <li>脑科</li>
      <li>脑科</li>
      <li>脑科</li>
      <li>脑科</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.tip {
  color: gray;
  font-size: 1rem;
  margin: .5rem 0 1rem;

  .title {
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 1rem;

    li {
      width: 50%;
      margin: .2rem 0;
    }
  }
}
</style>
