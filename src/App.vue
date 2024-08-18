<template>
  <div class="showcase">
    <example1-chart />
    <example2-chart />
    <example3-chart />
    <div class="container">
      <example4-chart />
      <example5-chart />
    </div>
    <example6-chart />
    <example7-chart />
    <example8-chart />
    <example9-chart />
    <example10-chart />
    <example11-chart />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.showcase {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.5rem;
  gap: 1rem;
}

.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
