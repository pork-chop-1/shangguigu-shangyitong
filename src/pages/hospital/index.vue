<script setup lang="ts">
import {
  ArrowRight,
  HomeFilled,
  Compass,
  Filter,
  Crop,
  Finished,
  DataLine,
} from '@element-plus/icons-vue'
import { onMounted } from 'vue'
import useHospital from '@/store/hospital'
const hospitalStore = useHospital()

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

console.log(route.query)
onMounted(() => {
  if (route.query.hoscode && typeof route.query.hoscode === 'string') {
    hospitalStore.getHospital(route.query.hoscode)
  }
})

const selectItem = (index: string) => {
  router.replace({
    path: `/hospital/${index}`,
    query: {
      hoscode: route.query.hoscode
    }
  })
}
</script>
<template>
  <div class="hospital">
    <!-- 左侧导航 -->
    <div class="menu">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }"
          ><el-icon><HomeFilled /></el-icon
        ></el-breadcrumb-item>
        <el-breadcrumb-item>医院详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open=""
        @close=""
        @select="selectItem">
        <el-menu-item index="register">
          <el-icon><Compass /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="detail">
          <el-icon><Filter /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="notice">
          <el-icon><Crop /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="close">
          <el-icon><Finished /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="search">
          <el-icon><DataLine /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 右侧内容 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hospital {
  display: flex;

  div.menu {
    flex: 2;
  }

  div.content {
    flex: 8;
  }
}
</style>
