<template>
  <div>
    <div class="page flex-col" v-if="this.$route.path === '/partnerComponent'">
      <div class="box_b flex-col">
        <!--        <div class="box_partner flex-row justify-between">-->
        <!--          <img class="label_1" src="../assets/shop/logo.png" />-->
        <!--          <img class="label_2" src="../assets/shop/avatar.png" />-->
        <!--        </div>-->
      </div>
    </div>
    <div
      class="page flex-col"
      v-else-if="this.$route.path === '/subscriptionComponent'"
    >
      <div class="box_c flex-col">
        <!--        <div class="box_head flex-row justify-between">-->
        <!--          <img class="label_1" src="../assets/shop/logo.png" />-->
        <!--          <img class="label_2" src="../assets/shop/avatar.png" />-->
        <!--        </div>-->
        <div class="clouds"></div>
      </div>
    </div>
    <div
      class="page flex-col"
      v-else-if="this.$route.path === '/storeComponent'"
    >
      <div class="box_a flex-col">
        <!--        <div class="box_partner flex-row justify-between">-->
        <!--          <img class="label_1" src="../assets/shop/logo.png" />-->
        <!--          <img class="label_2" src="../assets/shop/avatar.png" />-->
        <!--        </div>-->
      </div>
    </div>
    <div
      class="page flex-col"
      style="height: 1554px;"
      v-else-if="this.$route.path === '/toolComponent'"
    >
      <!--      <div class="box_1 flex-row">-->
      <!--        <img class="label_1" src="../assets/shop/logo.png" />-->
      <!--        <img class="label_2" src="../assets/shop/avatar.png" />-->
      <!--      </div>-->
    </div>
    <div
      class="page flex-col"
      style="height: 754px;"
      v-else-if="this.$route.path === '/myComponent'"
    >
      <!--      <div class="box flex-row">-->
      <!--        <img class="label_1" src="../assets/shop/logo.png" />-->
      <!--        <img class="label_2" src="../assets/shop/avatar.png" />-->
      <!--      </div>-->
    </div>
    <div class="page flex-col" style="height: 754px;" v-else>
      <!--      <div class="box_1 flex-row">-->
      <!--        <img class="label_1" src="../assets/shop/logo.png" />-->
      <!--        <img class="label_2" src="../assets/shop/avatar.png" />-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route.path, 111);
  },
};
</script>

<style scoped>
@import '../assets/css/common.css';
.page {
  position: relative;
  width: 100%;
}
.image_1 {
  width: 100%;
  height: 1018px;
  margin-top: -1px;
  opacity: 1;
}
.box_a {
  height: 1080px;
  /*background: url('../assets/order/bkg.png');*/
  background-size: 100% 100%;
  width: 100%;
}
.box_b {
  /*background: url('../assets/partner/bkg.png');*/
  height: 1080px;
  background-size: 100% 100%;
  width: 100%;
}
.box_c {
  height: 1080px;
  background-size: 100% 100%;
  width: 100%;
}
/* 添加白云动画样式 */
.clouds {
  position: absolute;
  top: -500px;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.cloud {
  position: absolute;
  top: 50%;
  width: 400px;
  height: auto;
  animation: float 10s infinite ease-in-out;
}

.cloud-1 {
  left: 10%;
  animation-duration: 30s;
}

.cloud-2 {
  left: 40%;
  animation-duration: 32s;
}

.cloud-3 {
  left: 70%;
  animation-duration: 34s;
}

@keyframes float {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(50%, -20%);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
