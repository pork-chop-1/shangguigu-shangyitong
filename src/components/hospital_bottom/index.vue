<script setup lang="ts">
</script>

<template>
  <div class="bottom">
    <div class="content">
      <div class="left">
        <p>
          京IPC被114514111111
        </p>
        <p>
          电话挂号19190000
        </p>
      </div>
      <div class="right">
        <p>联系我们</p>
        <p>合作伙伴</p>
        <p>用户协议</p>
        <p>隐私协议</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bottom {
  width: 100%;
  height: 50px;
  background-color: #f5f6ff;
  color: gray;
  
  .content {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      p {
        margin-right: 1rem;
      }
    }

    .right {
      display: flex;
      p {
        margin-right: 1rem;
      }
    }
  }
}
</style>