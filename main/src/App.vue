<template>
  <!-- <BaseSidebar />
  <BaseNav />
  <div class="content">
    <router-view />
    <div id="subApp"></div>
  </div> -->
  <el-config-provider namespace="main">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup></script>

<style scoped>
.content {
  width: calc(100% - 180px);
  height: calc(100% - 60px);
  position: absolute;
  left: 180px;
  top: 60px;
  background-color: rgb(249, 249, 249);
  overflow: hidden;
  padding: 24px;
}
#subApp {
  width: 100%;
  height: 100%;
}
</style>
