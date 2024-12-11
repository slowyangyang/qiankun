<template>
  <div id="subApp"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import runQiankun from '@/qiankun'

onMounted(() => {
  runQiankun({
    sandbox: {
      strictStyleIsolation: false,
      experimentalStyleIsolation: true,
    },
  })
})
</script>

<style scoped></style>
