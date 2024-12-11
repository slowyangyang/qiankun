<template>
  <div style="margin: 20px">
    <h2 @click="tolink('/home')">home</h2>
    <span style="margin: 0 20px">|</span>
    <h2 @click="tolink('/about')">about</h2>
  </div>
  <keep-alive>
    <el-config-provider namespace="sub1">
      <router-view></router-view>
    </el-config-provider>
  </keep-alive>

  <!-- <router-view></router-view> -->
</template>

<script setup>
import { provide } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const tolink = (path) => {
  router.push(path)
}
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
