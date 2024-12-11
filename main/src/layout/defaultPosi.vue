<template>
  <div class="siderLogo-select">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link cursor-pointer">
        陕西
        <el-icon class="el-icon--right" size="12">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>待开发</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.siderLogo-select {
  display: flex;
  align-items: center;
  margin-left: 20px;
  :deep(.el-dropdown-link) {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: var(--main-text-color-primary);
  }
}
</style>
