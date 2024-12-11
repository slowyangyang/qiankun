<template>
  <div class="baseLayout">
    <!-- 菜单 -->
    <!-- <BaseSidebar /> -->
    <!-- 工具导航 -->
    <BaseNav />
    <div class="layout_content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import BaseNav from '@/layout/MainBaseNav.vue'
import { useRouter } from 'vue-router'
import eventBus from '@/utils/eventBus'
import { onMounted } from 'vue'

const router = useRouter()

eventBus.on('linkToMainApp', () => {
  router.push('/home')
})
eventBus.on('ddd', (info) => {
  console.log(info.name)
})

onMounted(() => {
  // 微网能源数据初始化
  eventBus.on('changeToken', (data) => {
    console.log(data)
  })
  eventBus.emit('rrrr', '888y')
})
</script>

<style scoped>
.baseLayout {
  width: 100%;
  height: 100%;
}
.layout_content {
  width: 100%;
  height: calc(100% - var(--layout-header-height));
  position: absolute;
  left: 0;
  top: var(--layout-header-height);
  background-color: var(--main-bg-color);
  overflow: auto;
  min-width: 1004px;
}
</style>
