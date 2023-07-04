<script setup lang="ts">
</script>

<template>
  <div class="top">
    <div class="content">
      <div class="left">
        <img src="@/assets/images/logo.png" alt="上已通">
        <p>上已通 雨夜挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top {
  width: 100%;
  height: 70px;
  background-color: #fff;
  position: fixed;
  z-index: 100;

  .content {
    width: 1200px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        aspect-ratio: 1/1;
        margin-right: 1rem;
      }
      p {
        font-size: 1.6rem;
        color: #1f5dae;
      }
    }

    .right {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      .help {
        margin-right: 1rem;
      }
    }
  }
}
</style>