<script setup lang="ts">
import { ref } from 'vue';
import {Search} from '@element-plus/icons-vue'

interface RestaurantItem {
  value: string
  link: string
}

const keyword = ref('')
const handleSelect = (_item: RestaurantItem) => {

} 

const restaurants = ref<RestaurantItem[]>([])
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}
const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const onSubmit = () => {
  
}
</script>

<template>
  <div class="search">
    <el-autocomplete
        v-model="keyword"
        :fetch-suggestions="querySearch"
        clearable
        class="input"
        placeholder="输入医院名称"
        @select="handleSelect"
      />
      <el-button type="primary" @click="onSubmit" class="submit" :icon="Search">搜索</el-button>
  </div>
</template>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  // 深度
  :deep(.el-input__wrapper) {
    width: 600px;
    height: 50px;;
  }
  .submit {
    width: 80px;
    height: 50px;
  }
}
</style>