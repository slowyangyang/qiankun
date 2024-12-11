<template>
  <div id="subApp"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import runQiankun from '@/qiankun'

onMounted(() => {
  runQiankun({
    sandbox: {
      strictStyleIsolation: false,
      experimentalStyleIsolation: false
    }
  })
})
</script>

<style scoped></style>
