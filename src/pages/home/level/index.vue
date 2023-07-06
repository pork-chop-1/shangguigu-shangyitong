<script setup lang="ts">import { HospitalDictTypes } from '@/api/home/model';

defineProps<{hospitalTypeList: HospitalDictTypes.Data[]}>()
</script>

<template>
  <div class="level">
    <h2>医院:</h2>
    <div class="level1">
      <h2>等级:</h2>
      <ul>
        <li v-for="(item) in hospitalTypeList" :key="item.id">{{ item.name }}</li>
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
          color: rgb(74, 201, 255)
        }
      }
    }
  }
}
</style>