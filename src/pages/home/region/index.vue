<script setup lang="ts">
</script>

<template>
  <div class="level">
    <div class="level1">
      <h2>地区:</h2>
      <ul>
        <li>长山区</li>
        <li>长山区</li>
        <li>长山区</li>
        <li>长山区</li>
        <li>长山区</li>
        <li>长山区</li>
        <li>长山区</li>
        <li>长山区</li>
        <li>长山区</li>
        <li>长山区</li>
        <li>长山区</li>
        <li>长山区</li>
        <li>长山区</li>
        <li>长山区</li>
        <li>长山区</li>
        <li>长山区</li>
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