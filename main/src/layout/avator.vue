<template>
  <div class="avatar"></div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ElMessageBox } from 'element-plus'
import Local from '@/utils/localStorage'
import { onMounted, ref } from 'vue'
const router = useRouter()

const handleCommand = () => {
  ElMessageBox.confirm('是否要退出登录?', '提示', {
    confirmButtonText: '是',
    cancelButtonText: '否',
    type: 'warning'
  }).then(async () => {
    let res = await logout()
    if (res.code === 200) {
      Local.remove(
        'TOKEN',
        'USER_INFO',
        'ACTIVE_SYSTEM',
        'IS_RUN_MAIN_APP',
        'ACTIVE_MENU'
      )
      router.replace('/login')
    } else {
      ElMessageBox.alert('退出登录失败')
    }
  })
}
const linkTo = () => {
  router.push('/profile')
}
let userInfo = ref({})
onMounted(() => {
  let info = Local.get('USER_INFO')
  if (info) {
    userInfo.value = info
  }
})
</script>

<style scoped lang="scss">
.avatar {
  display: flex;
  align-items: center;
  cursor: pointer;
  .news-icon {
    .news {
      width: 20px;
    }
    // margin-right: 20px;

    :deep(.main-divider--vertical) {
      margin: 0 14px;
    }
  }
  .el-avatar--circle {
    margin-right: 5px;
  }
  .el-dropdown-link {
    display: flex;
    align-items: center;
  }
}
</style>
