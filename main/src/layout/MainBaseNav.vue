<template>
  <div class="mainBaseNav">
    <div class="nav-left">
      <div class="siderLogo"></div>
    </div>
    <div class="nav-right">
      <div class="subApps">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane
            :label="item.label"
            :name="item.path"
            v-for="item in tabs"
            :key="item.path"
          ></el-tab-pane>
        </el-tabs>
      </div>
      <div class="avator"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import local from '@/utils/localStorage'
import { mapSubAppToObj } from '@/qiankun/config'

const router = useRouter()
const tabs = mapSubAppToObj()
const activeName = ref(tabs[0].path)

const handleClick = (tab) => {
  console.log(tab.props.name)

  const path = tab.props.name
  local.set('ACTIVE_SYSTEM', path)

  router.push(path)
}
onMounted(() => {
  let activeSystem = local.get('ACTIVE_SYSTEM') || tabs[0].path
  activeName.value = activeSystem
})
</script>

<style scoped lang="scss">
.mainBaseNav {
  width: 100%;
  height: var(--layout-header-height);
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--main-bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow: 2px 0px 20px 0px rgba(0, 0, 0, 0.1);
  z-index: 2;
  min-width: 1004px;
}
.siderLogo {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  height: var(--sider_logo_h);
  justify-content: center;
  > img {
    width: var(--sider_logo_size);
  }
}
.nav-right {
  display: flex;
  align-items: center;
  transition: all 0.3s linear;
  .subApps {
    margin-right: 70px;
  }
}

:deep(.main-tabs__nav-wrap::after) {
  background-color: transparent;
}
:deep(.main-tabs__header) {
  margin: 0;
}
:deep(.main-tabs) {
  --main-tabs-header-height: 64px;
}
:deep(.main-tabs__item) {
  font-size: 16px;
}
.nav-icon {
  width: 16px;
  margin-right: 4px;
}
:deep(.main-divider--vertical) {
  margin: 0 10px;
}
@media screen and (max-width: 1099px) {
  :deep(.main-tabs__item) {
    font-size: 14px;
    padding: 0 10px;
  }
  .siderLogo {
    :deep(.siderLogo-select) {
      :deep(.el-dropdown-link) {
        font-size: 14px;
      }
      :deep(.main-icon) {
        font-size: 16px !important;
      }
    }
  }
}
</style>
