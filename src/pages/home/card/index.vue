<script setup lang="ts">
import { HospitalTypes } from '@/api/home/model';
import { Timer, Odometer } from '@element-plus/icons-vue';

defineProps<{ hospitalInfo: HospitalTypes.Content }>()
</script>

<template>
  <el-card :shadow="'hover'">
    <div class="box-card">
      <div class="l">
        <div class="hospital-name">
          {{ hospitalInfo.hosname }}
        </div>
        <div class="tip">
          <div class="level">
            <el-icon>
              <Odometer />
            </el-icon>
            {{ hospitalInfo.param.hostypeString }}
          </div>
          <div class="time"><el-icon>
              <Timer />
            </el-icon>每天{{ hospitalInfo.bookingRule.releaseTime }}-{{ hospitalInfo.bookingRule.stopTime }}</div>
        </div>
      </div>
      <div class="r">
        <img :src="'data:image/jpg;base64,' + hospitalInfo.logoData" alt="">
      </div>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
.box-card {
  display: flex;

  .l {
    flex: 1 1 auto;

    .tip {
      margin-top: 1rem;
      display: flex;

      &>div {
        font-size: .8rem;
        color: gray;
        width: 50%;
        display: flex;
        align-items: center;
      }
    }
  }

  .r {
    flex: 0;

    img {
      width: 50px;
      height: 50px;
    }
  }
}</style>