<template>
  <div class="container">
    <div class="box_10 flex-row justify-between">
      <div class="group_14 flex-col justify-between">
        <div class="box_3 flex-row">
          <img :src="computedAvatar" class="box_4 flex-col" />
          <span class="text_18">{{ userInfo.nickName }}</span>
          <img
              @click="goSetting()"
              class="label_3"
              src="../assets/partner/sign.png"
          />
          <img
              v-if="userInfo.status === '0'"
              class="thumbnail_8"
              src="../assets/home/authentication.jpg"  />
          <span class="text_19" @click="goAuthentication()" v-if="userInfo.status === '0'">未认证</span>
          <div class="text-wrapper_9 flex-col" @click="goMyPowerStation">
            <el-button type="text" class="text_47" >我的电站</el-button>
          </div>
        </div>
        <span class="text_20">享受特权</span>
      </div>
      <div class="group_6 flex-col">
        <span class="text_21">通知公告</span>
        <div class="block_12 flex-row justify-between">
          <div class="block_6 flex-col"></div>
          <span class="text_22"
          >一条公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告…</span
          >
        </div>
        <el-divider  class="image_2"></el-divider>
        <div class="block_13 flex-row justify-between">
          <div class="section_1 flex-col"></div>
          <span class="text_23"
          >一条公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告…</span
          >
        </div>
        <el-divider  class="image_2"></el-divider>
      </div>
    </div>
    <div class="group_11 flex-row">
      <img src="../assets/my/product.png" class="image-wrapper_8 flex-col" />
      <div class="box_12 flex-col justify-between">
        <div class="box_13 flex-row justify-between">
          <span class="text_33">等待付款</span>
          <div class="text-wrapper_4 flex-col">
            <span class="text_34">限时减至高¥4.7</span>
          </div>
        </div>
        <span class="text_35">剩余时间：01:24:48</span>
      </div>
      <div class="text-wrapper_5 flex-col">
        <el-button type="text" class="text_36">购买</el-button>
      </div>
    </div>
    <div class="box_11 flex-row">
      <div class="group_8 flex-col">
        <span class="text_24">我的订单</span>
        <div class="section_5 flex-row justify-between">
          <div class="group_15 flex-col justify-between" @click="goMyOrder('1')">
            <div class="image-wrapper_5">
              <img
                  class="image-order"
                  src="../assets/my/pay.png"
              />
            </div>
            <span class="text_31">待付款</span>
          </div>
          <div class="group_17 flex-col justify-between" @click="goMyOrder('2')">
            <div class="image-wrapper_5">
              <img
                  class="image-order"
                  src="../assets/my/time.png"
              />
            </div>
            <span class="text_32">待收货/使用</span>
          </div>
          <div class="group_17 flex-col justify-between" @click="goMyOrder('3')">
            <div class="image-wrapper_5">
              <img
                  class="image-order"
                  src="../assets/my/status.png"
              />
            </div>
            <span class="text-group_1">已完成</span>
          </div>
          <div class="group_17 flex-col justify-between" @click="goMyOrder('4')">
            <div class="image-wrapper_5">
              <img
                  class="image-order"
                  src="../assets/my/sale.png"
              />
            </div>
            <span class="text-group_1">售后/退货</span>
          </div>
          <div class="group_17 flex-col justify-between" @click="goMyOrder('5')">
            <div class="image-wrapper_5">
              <img
                  class="image-order"
                  src="../assets/my/status.png"
              />
            </div>
            <span class="text-group_1">全部订单</span>
          </div>

        </div>
      </div>
      <div class="group_9 flex-col">
        <div class="text-wrapper_11 flex-row">
          <span class="text_30">我的收藏</span>
        </div>
        <div class="section_5 flex-row justify-between">
          <div class="group_15 flex-col justify-between" @click="goStoreAttention('produce')">
            <img
                class="image_4"
                src="../assets/my/follow.png"            />
            <span class="text_31">商品关注</span>
          </div>
          <div class="group_16 flex-col justify-between" @click="goStoreAttention('shop')">
            <img
                class="image_5"
                src="../assets/my/shop.png"            />
            <span class="text_32">店铺关注</span>
          </div>
          <div class="image-text_4 flex-col justify-between">
            <img
                class="image_6"
                src="../assets/my/collect.png"            />
            <span class="text-group_1">政策收藏</span>
          </div>
        </div>
      </div>
      <div class="group_10 flex-col">
        <div class="image-text_5 flex-col justify-between" @click="goServer()">
          <img
              class="label_9"
              src="../assets/shop/service.png"
          />
          <span class="text-group_2">客服</span>
        </div>
        <el-divider class="image_7"></el-divider>
        <div class="image-text_6 flex-col justify-between" @click="goFeedback()">
          <img
              class="label_10"
              src="../assets/my/feedback.png" />
          <span class="text-group_3">反馈</span>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  components:{
    Footer
  },
  name: "MyComponent",
  data() {
    return {
      userInfo:{},
    }
  },
  computed: {
    computedAvatar() {
      return this.userInfo.avatar ? this.userInfo.avatar : require('../assets/shop/avatar.png');
    }
  },
  created() {
    const userInfoStr = localStorage.getItem('USER_INFO');
    if (userInfoStr) {
      this.userInfo = JSON.parse(userInfoStr);
    }
  },
  methods: {
    goAuthentication() {
      this.$router.push({name:'authentication'})
    },
    goSetting() {
      this.$router.push({name:'mySetting'})
    },
    goMyPowerStation() {
      // 跳转到详情页面
      this.$router.push({ name: 'myPowerStation'});
      // this.$router.push({ name: 'myPowerStation', params: { id: powerId } });
    },
    goStoreAttention(type) {
      this.$router.push({ name: 'storeAttention1', params: { activeTab: type } });
    },
    goFeedback() {
      this.$router.push({name:'feedback2'})
    },
    goServer() {
      this.$router.push({name:'partnerServer1'})
    },
    goMyOrder(type) {
      this.$router.push({ name: 'myOrder', params: { activeTab: type } });
    },
  }
}
</script>

<style scoped>
@import "../assets/css/common.css";
.container {
  width: 100%;
  height: 941px;
}
.box_10 {
  width: 1532px;
  height: 210px;
  margin: 84px 0 0 195px;
}
.group_14 {
  width: 937px;
  height: 127px;
}
.box_3 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 6px;
  width: 937px;
  height: 107px;
}
.box_4 {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 27px 0 0 46px;
}
.text_18 {
  width: 156px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 18px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 42px 0 0 17px;
}
.label_3 {
  width: 24px;
  height: 24px;
  margin: 44px 0 0 5px;
}
.thumbnail_8 {
  width: 20px;
  height: 20px;
  margin: 46px 0 0 31px;
}
.text_19 {
  width: 42px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin: 46px 0 0 11px;
}
.text-wrapper_9 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2px;
  height: 28px;
  border: 1px solid rgba(39, 90, 235, 1);
  width: 81px;
  margin: 42px 19px 0 435px;
}
.text_47 {
  width: 56px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(39, 90, 235, 1);
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin: -8px 0 0 13px;
}
.text_20 {
  width: 56px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-left: 46px;
}
.group_6 {
  position: relative;
  width: 583px;
  background: #fff;
  border-radius: 10px;
}
.text_21 {
  width: 72px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 18px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: right;
  white-space: nowrap;
  line-height: 25px;
  margin: 24px 0 0 20px;
}
.block_12 {
  width: 517px;
  height: 34px;
  margin: 14px 0 0 20px;
}
.block_6 {
  background-color: rgba(39, 90, 235, 1);
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin-top: 13px;
}
.text_22 {
  width: 495px;
  height: 34px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 12px;
  font-weight: normal;
  text-align: left;
  line-height: 17px;
}
.image_2 {
  width: 517px;
  height: 1px;
  margin: 20px 0 0 20px;
}
.block_13 {
  width: 517px;
  height: 34px;
  margin: 14px 0 0 20px;
}
.section_1 {
  background-color: rgba(39, 90, 235, 1);
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin-top: 13px;
}
.text_23 {
  width: 495px;
  height: 34px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 12px;
  font-weight: normal;
  text-align: left;
  line-height: 17px;
}
.image_3 {
  width: 517px;
  height: 1px;
  margin: 20px 0 23px 40px;
}

.group_11 {
  background-color: rgba(239, 242, 255, 1);
  border-radius: 2px;
  position: relative ;
  left: 195px;
  top: -101px;
  width: 937px;
  height: 80px;
}
.image-wrapper_8 {
  height: 76px;
  width: 80px;
  margin: 3px 0 0 32px;
}
.thumbnail_9 {
  width: 9px;
  height: 6px;
  margin: 6px 0 0 24px;
}
.box_12 {
  width: 162px;
  height: 48px;
  margin: 16px 0 0 11px;
}
.box_13 {
  width: 162px;
  height: 24px;
}
.text_33 {
  width: 56px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 20px;
  margin-top: 4px;
}
.text-wrapper_4 {
  background-color: rgba(254, 217, 217, 1);
  border-radius: 2px;
  height: 24px;
  width: 94px;
}
.text_34 {
  width: 85px;
  height: 17px;
  overflow-wrap: break-word;
  color: rgba(255, 0, 0, 1);
  font-size: 12px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 3px 0 0 5px;
}
.text_35 {
  width: 126px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-top: 4px;
}
.text-wrapper_5 {
  background-color: rgba(37, 89, 236, 1);
  height: 40px;
  width: 81px;
  margin: 20px 17px 0 554px;
}
.text_36 {
  width: 28px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin: 0 0 0 27px;
}

.box_11 {
  width: 1635px;
  height: 269px;
  margin: -85px 0 81px 195px;
}
.group_8 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 6px;
  width: 937px;
  height: 269px;
}
.text_24 {
  width: 72px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 18px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 30px 0 0 40px;
}
.section_4 {
  width: 801px;
  height: 80px;
  margin: 40px 0 0 46px;
}
.section_3 {
  background-color: rgba(239, 242, 255, 1);
  border-radius: 2px;
  height: 80px;
  width: 80px;
}
.image-wrapper_3 {
  height: 46px;
  width: 46px;
  margin: 17px 0 0 18px;
}
.label_4 {
  width: 46px;
  height: 46px;
}
.image-wrapper_4 {
  background-color: rgba(239, 242, 255, 1);
  border-radius: 2px;
  height: 80px;
  margin-left: 105px;
  width: 80px;
}
.label_5 {
  width: 46px;
  height: 46px;
  margin: 17px 0 0 17px;
}
.image-wrapper_5 {
  background-color: rgba(239, 242, 255, 1);
  border-radius: 2px;
  height: 80px;
  width: 80px;
}
.label_6 {
  width: 46px;
  height: 46px;
  margin: 17px 0 0 17px;
}
.image-wrapper_6 {
  background-color: rgba(239, 242, 255, 1);
  border-radius: 2px;
  height: 80px;
  margin-left: 90px;
  width: 80px;
}
.label_7 {
  width: 46px;
  height: 46px;
  margin: 17px 0 0 17px;
}
.image-wrapper_7 {
  background-color: rgba(239, 242, 255, 1);
  border-radius: 2px;
  height: 80px;
  margin-left: 103px;
  width: 80px;
}
.label_8 {
  width: 46px;
  height: 46px;
  margin: 17px 0 0 17px;
}
.text-wrapper_10 {
  width: 776px;
  height: 20px;
  margin: 23px 0 51px 63px;
}
.text_25 {
  width: 42px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}
.text_26 {
  width: 77px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-left: 126px;
}
.text_27 {
  width: 42px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: right;
  white-space: nowrap;
  line-height: 20px;
  margin-left: 131px;
}
.text_28 {
  width: 63px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: right;
  white-space: nowrap;
  line-height: 20px;
  margin-left: 116px;
}
.text_29 {
  width: 56px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: right;
  white-space: nowrap;
  line-height: 20px;
  margin-left: 123px;
}
.group_9 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 6px;
  height: 259px;
  width: 583px;
  margin: 10px 0 0 12px;
}
.text-wrapper_11 {
  width: 72px;
  height: 25px;
  margin: 30px 0 0 40px;
}
.text_30 {
  width: 72px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 18px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
}
.section_5 {
  width: 406px;
  height: 100px;
  margin: 40px 0 64px 60px;
}
.group_15 {
  width: 56px;
  height: 92px;
  margin-top: 8px;
}
.group_17{
  width: 56px;
  height: 92px;
  margin-top: 8px;
  margin-left: 110px;
}
.image_4 {
  width: 50px;
  height: 50px;
}
.text_31 {
  width: 56px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: right;
  white-space: nowrap;
  line-height: 20px;
  margin-top: 22px;
}
.group_16 {
  width: 57px;
  height: 94px;
  margin: 6px 0 0 114px;
}
.image_5 {
  width: 50px;
  height: 50px;
}
.image-order {
  width: 50px;
  height: 50px;
  margin-top: 15px;
}
.text_32 {
  width: 56px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: right;
  white-space: nowrap;
  line-height: 20px;
  margin: 24px 0 0 1px;
}
.image-text_4 {
  width: 64px;
  height: 100px;
  margin-left: 115px;
}
.image_6 {
  width: 60px;
  height: 60px;
}
.text-group_1 {
  width: 56px;
  height: 20px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: right;
  white-space: nowrap;
  line-height: 20px;
  margin: 20px 0 0 8px;
}
.group_10 {
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  width: 80px;
  height: 195px;
  margin: 70px 0 0 23px;
}
.image-text_5 {
  width: 32px;
  height: 56px;
  margin: 23px 0 0 24px;
}
.label_9 {
  width: 28px;
  height: 28px;
  margin-left: 2px;
}
.text-group_2 {
  width: 32px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 6px;
}
.image_7 {
  width: 52px;
  height: 1px;
  margin: 15px 0 0 13px;
}
.image-text_6 {
  width: 32px;
  height: 55px;
  margin: 13px 0 32px 24px;
}
.label_10 {
  width: 28px;
  height: 28px;
  margin-left: 2px;
}
.text-group_3 {
  width: 32px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 5px;
}
/deep/ .block_4 {
  width: 1909px;
}
</style>