<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { reqHospitalByName } from '@/api/home'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const keyword = ref('')
const handleSelect = (item: Record<string, any>) => {
  item.link && router.push('hospital') // + item.link
}

const querySearch = (queryString: string, cb: any) => {
  if (queryString === '') {
    cb([])
    return
  }
  reqHospitalByName(queryString)
    .then((res) => {
      const result: Record<string, any>[] = res.data.map((v) => {
        return {
          value: v.hosname,
          link: v.address,
        }
      })
      cb(result)
    })
    .catch((err) => {
      cb([])
      ElMessage({ type: 'error', message: err })
      return
    })
}

const onSubmit = () => {}

defineOptions({
  name: 'Search',
})
</script>

<template>
  <div class="search">
    <el-autocomplete
      v-model="keyword"
      :fetch-suggestions="querySearch"
      clearable
      class="input"
      placeholder="输入医院名称"
      @select="handleSelect" />
    <el-button type="primary" @click="onSubmit" class="submit" :icon="Search"
      >搜索</el-button
    >
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
    height: 50px;
  }
  .submit {
    width: 80px;
    height: 50px;
  }
}
</style>
