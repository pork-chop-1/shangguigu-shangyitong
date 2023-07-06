<script setup lang="ts">
import Carousal from './carousal/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'
import { onMounted, ref } from 'vue'
import { reqHospital, reqHospitalDict } from '@/api/home'
import type { HospitalTypes, HospitalDictTypes } from '@/api/home/model'

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)
const hospitalList = ref<HospitalTypes.Content[]>([])
const loading = ref(false)
const hospitalTypeList = ref<HospitalDictTypes.Data[]>([])

// 显示数量变化
const handleSizeChange = () =>{ 
  getHospitalInfo()
}

// 页码变化
const handleCurrentChange = () =>{
  getHospitalInfo()
}

onMounted(async () => {
  getHospitalInfo()
  getHospitalDictInfo()
})

const getHospitalInfo = async () => {
  loading.value = true
  const res = await reqHospital({
    page: currentPage.value, 
    limit: pageSize.value
  })
  loading.value = false
  if(res.code === 200) {
    const data = res.data
    total.value = data.totalElements
    hospitalList.value = data.content
  }
}

const getHospitalDictInfo = async () => {
  const res = await reqHospitalDict({
    dictCode: 'Hostype'
  })
  if(res.code === 200) {
    const data = res.data
    hospitalTypeList.value = data
  }
}
</script>

<template>
  <div>
    <!-- 首页轮播图 -->
    <Carousal ></Carousal>
    <!-- 自动补全输入框 -->
    <Search />
    <!-- 中间布局 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <!-- 选择等级 -->
        <Level :hospitalTypeList="hospitalTypeList"/>
        <!-- 选择区域 -->
        <Region />
        <!-- 卡片列表 -->
        <el-skeleton :loading="loading" :throttle="300">
          <template #template>
            <!-- 加载中的时候显示五条杠 -->
            <el-skeleton :rows="5" animated />
          </template>
          <template #default>
            <!-- 实际加载后的卡片列表 -->
            <div class="hospital-card">
              <Card v-for="(item) in hospitalList" :key="item.id" :hospitalInfo="item"/>
            </div>
          </template>
        </el-skeleton>
        <!-- 分页 -->
        <el-pagination
          class="pagination"
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[5, 10, 15, 20]"
          :background="true"
          layout="prev, pager, next, sizes, jumper, ->, total"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-col>
      <el-col :span="4">312</el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.hospital-card {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0;

  &>div {
    width: 49%;
    margin-top: 1rem;
  }
}
.pagination {
  margin-bottom: 1rem;
}
</style>