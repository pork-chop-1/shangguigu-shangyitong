<script setup lang="ts">
import useHospital from '@/store/hospital';
import { Promotion } from '@element-plus/icons-vue'
import { toRef } from 'vue';

const hospitalStore = useHospital()
const detail = toRef(hospitalStore, 'detail')

</script>

<template>
  <div class="register">
    <div class="top">
      <div class="name">{{ detail?.hospital.hosname }}</div>
      <el-icon><Promotion /></el-icon>
      <div class="level">{{ detail?.hospital.param.hostypeString }}</div>
    </div>
    <div class="bottom">
      <div class="logo">
        <img :src="'data:image/jpg;base64,' + detail?.hospital.logoData" alt="logo">
      </div>
      <div class="r">
        <div class="title">挂号规则</div>
        <p>预约周期：{{ detail?.bookingRule.cycle }}  放号时间：{{ detail?.bookingRule.releaseTime }}  停挂时间:{{ detail?.bookingRule.stopTime }}</p>
        <p>具体地址：{{ detail?.hospital.param.fullAddress }}</p>
        <p>规划路线：{{ detail?.hospital.route }}</p>
        <p>退号时间：退诊前一工作日{{ detail?.bookingRule.quitTime }}前取消</p>
        <div class="title">医院预约规则</div>
        <p v-for="item, index in detail?.bookingRule.rule" :key="index">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top {
  display: flex;
  align-items: center;
  margin: 1rem 2rem;

  .name {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  .level {
    color: #999;
  }
}

.bottom {
  display: flex;
  margin: 1rem;
  .logo {
    width: 80px;
    img {
      width: 80px;
    }
  }

  .r {
    flex: 1;

    .title {
      font-size: 1rem;
      line-height: 2rem;
    }

    p {
      font-size: .8rem;
      line-height: 1.2rem;
    }
  }
}
</style>
