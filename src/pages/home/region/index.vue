<script setup lang="ts">
import { reqHospitalDict } from '@/api/home'
import { HospitalDictTypes } from '@/api/home/model'
import { onMounted, ref } from 'vue'

const hospitalTypeList = ref<HospitalDictTypes.Data[]>([])
const active = ref('')

onMounted(() => {
  getHospitalDictInfo()
})

const getHospitalDictInfo = async () => {
  const res = await reqHospitalDict({
    dictCode: 'Beijin',
  })
  if (res.code === 200) {
    const data = res.data
    hospitalTypeList.value = data
  }
}

defineExpose({
  active,
})
</script>

<template>
  <div class="level">
    <div class="level1">
      <h2>地区:</h2>
      <ul>
        <li :class="{ active: active === '' }" @click="active = ''">全部</li>
        <li
          :class="{ active: active === item.id.toString() }"
          v-for="item in hospitalTypeList"
          :key="item.id"
          @click="active = item.id.toString()">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.level {
  color: gray;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 5px 20px 5px 0;
    flex-shrink: 0;
  }

  .level1 {
    display: flex;
    align-items: flex-start;

    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      li {
        margin: 0 1rem;
        cursor: pointer;
        height: 2rem;
        line-height: 2rem;

        &:hover {
          color: rgb(74, 201, 255);
        }
        &.active {
          color: rgb(74, 201, 255);
        }
      }
    }
  }
}
</style>
