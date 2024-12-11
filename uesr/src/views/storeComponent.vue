<template>
  <div class="container">
    <div class="group_1 flex-col">
      <div class="group_2 flex-col">
        <div class="group_3 flex-col">
          <div class="group_18 flex-row justify-between" style="z-index: 9999">
            <div class="text-group_20 flex-col justify-between">
              <span class="text_60">千瓦时甄选</span>
              <span class="text_61">千瓦时甄选</span>
            </div>
            <div class="info">
              <div class="header">
                <!-- 用户头像 -->
                <img src="../assets/shop/avatar.png" alt="User Avatar" class="avatar">

                <!-- 用户名和帐号信息 -->
                <div class="account-info">
                  <span class="info-user">qws-187****1234</span>
                  <button>切换账号</button>
                  <button>退出</button>
                </div>
              </div>
              <div class="big-box">
                <div class="small-box" v-for="(item, index) in manageData" :key="index" @click="goManage(item.text)">
                  <img :src="item.image" :alt="item.text" class="box-image">
                  <div class="box-text">{{ item.text }}</div>
                </div>
              </div>
              <div class="big-box">
                <div class="small-box">
                  <div class="box-number">1</div>
                  <div class="box-text">待付款</div>
                </div>
                <div class="small-box">
                  <div class="box-number">2</div>
                  <div class="box-text">待收款</div>
                </div>
                <div class="small-box">
                  <div class="box-number">3</div>
                  <div class="box-text">待评价</div>
                </div>
                <div class="small-box">
                  <div class="box-number">4</div>
                  <div class="box-text">退换售后</div>
                </div>
              </div>
              <div class="header">
                <!-- 用户头像 -->
                <img src="../assets/shop/order.png" alt="User Avatar" class="">

                <!-- 用户名和帐号信息 -->
                <div class="account-info">
                  <span class="order-info">暂无订单信息</span>
                  <span class="order-other">下单后查看更多订单信息</span>
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
          <span class="text_62" style="z-index: 9999">点击查看 ></span>
        </div>
        <span class="text_63">推荐</span>
        <div class="list_1 flex-row">
          <div
              class="list-items_1 flex-col"
              v-for="(item, index) in designData"
              :key="index"
              @click="goShopDetail()"
          >
            <img :src="item.img" alt="" />
            <div class="flex-row">
              <div class="text-group_1 flex-col justify-between">
                <span class="text_5">{{item.title}}</span>
                <span class="text_6">¥{{item.price}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="block_3 flex-col">
          <el-carousel height="1080px" arrow="never" :autoplay="false"  trigger="click">
            <el-carousel-item>
              <img src="../assets/shop/bj2.png" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/shop/bj2.png" alt="">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/shop/bj2.png" alt="">
            </el-carousel-item>
          </el-carousel>
          <div class="text-group_20 flex-col justify-between" style="position:relative;z-index: 9999;">
            <span class="text-one">品牌自营</span>
            <span class="text-two">光伏板</span>
            <span class="text-three">设计精巧</span>
            <span class="text-four">适用于各种各样环境条件下的屋顶场景</span>
            <span class="text-look">点击查看 ></span>
          </div>
        </div>
        <div class="block_4 flex-col">
          <div class="text-group_20 flex-col justify-between" style="position:relative;z-index: 9999;">
            <span class="block-one">新品</span>
            <span class="block-two">变压器变压器变压器变压器</span>
            <span class="block-three">一段文字介绍一段文字介绍一段文字介绍一段文字介绍一段文字介绍一段文字介绍一段文字介绍一段文字介绍</span>
            <span class="block-look">点击查看 ></span>
          </div>
        </div>
        <div class="list_1">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="光伏" name="first">
              <ListComponent></ListComponent>
            </el-tab-pane>
            <el-tab-pane label="充电柱" name="second">
              <ListComponent></ListComponent>
            </el-tab-pane>
            <el-tab-pane label="储能" name="third">
              <ListComponent></ListComponent>
            </el-tab-pane>
            <el-tab-pane label="风电" name="fourth">
              <ListComponent></ListComponent>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListComponent from '../components/ListComponent.vue'
export default {
  components: {
    ListComponent
  },
  data() {
    return {
      designData: [
        {
          img: require('../assets/partner/home.png'),
          title: '充电服务充电服务充电服务充电服务',
          price:'1234',
        },
        {
          img: require('../assets/partner/powers.png'),
          title: '变压器服务变压器服务变压器服务',
          price:'1234',
        },
        {
          img: require('../assets/partner/power.png'),
          title: '变压器变压器变压器变压器变压器',
          price:'1234',
        },
        {
          img: require('../assets/partner/hotMercury.png'),
          title: '服务名称服务名称服务名称',
          price:'1234',
        },
      ],
      activeName: 'first',
      manageData: [
        { image: require('../assets/shop/collectGoods.png'), text: '收藏商品' },
        { image: require('../assets/shop/followShop.png'), text: '店铺关注' },
        { image: require('../assets/shop/manage.png'), text: '我的管理' }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    goShopDetail(){
      this.$router.push({name:'shopDetail'})
    },
    goFeedback() {
      this.$router.push({name:'feedback1'})
    },
    goServer() {
      this.$router.push({name:'partnerServer2'})
    },
    goManage(item) {
      if (item === '我的管理') {
        this.$router.push({ name: 'customerService' });
      } else if (item === '收藏商品' ) {
        this.$router.push({ name: 'storeAttention2', params: { activeTab: 'produce' } });
      } else {
        this.$router.push({ name: 'storeAttention2', params: { activeTab: 'shop' } });
      }
    },

  },
};
</script>


<style lang="less" scoped>
@import "../assets/css/common.css";
.container {
  width: 100%;
  height: auto;
  //background-color: #fff;
}
.group_1 {
  width: 100%;
  height: 5031px;
  margin-bottom: 1px;
}
.group_2 {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 2007px;
  background-size: 100% 100%;
  opacity: 1;
}

.group_3 {
  width: 100%;
  height: 900px;
  opacity: 1;
}
.text_60 {
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.22);
  width: 96px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_61 {
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  width: 280px;
  height: 98px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 70px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  line-height: 98px;
  margin-top: 14px;
}
.text_62 {
  width: 119px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 358px 0 0 1605px;
}
.text_63 {
  width: 144px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 36px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  line-height: 50px;
  margin: 130px 0 0 195px;
}

.list_1 {
  width: 1532px;
  height: 1510px;
  margin: 20px 0 0 195px;
}

.list-items_1 {
  height: 505px;
  margin-right: 8px;
  width: 376px;
}
.text_2 {
  width: 106px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 9px 0 0 329px;
}
.text-group_1 {
  width: 320px;
  height: 65px;
}
.text_5 {
  width: 320px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}
.text_6 {
  width: 57px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 20px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 9px 0 0 3px;
}
.group_18 {
  width: 1675px;
  height: 248px;
  margin: 251px 0 0 195px;
}
.text-group_20 {
  width: 280px;
  height: 145px;
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
.block_3 {
  width: 1909px;
  height: 1087px;
  margin-top: -850px;
}
.block_4 {
  width: 1909px;
  height: 1087px;
  background: url("../assets/shop/bj1.png");
  background-size: 100% 100%;
  margin-top: -45px;
}
.text-two {
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.22);
  width: 96px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 34px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: -820px;
  margin-left:200px;
  position: absolute;
}

.text-one {
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  width: 280px;
  height: 98px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 70px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  line-height: 98px;
  margin-top: -940px;
  margin-left:200px;
}
.text-three {
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  width: 280px;
  height: 98px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-family: PingFangSC-Semibold;
  text-align: left;
  white-space: nowrap;
  line-height: 98px;
  margin-top: -800px;
  margin-left:200px;
  position: absolute;
}
.text-four {
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  width: 280px;
  height: 98px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-family: PingFangSC-Semibold;
  text-align: left;
  white-space: nowrap;
  line-height: 98px;
  margin-top: -760px;
  margin-left:200px;
  position: absolute;
}
.text-look {
  width: 119px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  position: absolute;
  margin: -158px 0 0 1605px;
}
.block-two {
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.22);
  width: 96px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 34px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 360px;
  margin-left:1000px;
  position: absolute;
}

.block-one {
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  width: 280px;
  height: 98px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 70px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  line-height: 98px;
  margin-top: 240px;
  margin-left:1000px;
}
.block-three {
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  width: 280px;
  height: 98px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  font-family: PingFangSC-Semibold;
  text-align: left;
  white-space: nowrap;
  line-height: 98px;
  margin-top: 380px;
  margin-left:1000px;
  position: absolute;
}
.block-look {
  width: 119px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 24px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  position: absolute;
  margin: 858px 0 0 1605px;
}
.el-tabs.el-tabs--top {
  position: relative;
  top: 60px;
}
/deep/ .el-tabs__nav-wrap::after {
  height: 0px;
}
/deep/ .el-tabs__active-bar {
  background-color: transparent !important;
}
.info {
  width: 270px;
  height: 330px;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
  top: -180px;
  left: 510px;
  border-radius: 10px;
}
.header {
  display: flex;
  align-items: center;
  margin: 20px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.info-user {
  position: relative;
  top: -10px;
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
}
.account-info button {
  position: relative;
  left: -155px;
  top: 15px;
}
.big-box {
  margin: 30px 0 0 20px;
  display: flex;
  justify-content: space-around;
}

.small-box {
  text-align: center;
}

.box-image {
  width: 18px;
  height: 18px;
  margin-bottom: 10px;
}
.box-number {
  overflow-wrap: break-word;
  color: rgba(37, 89, 236, 1);
  font-size: 14px;
  font-family: PingFangSC-Medium;
  text-align: center;
  white-space: nowrap;
  line-height: 25px;
  font-weight: bold;
}
.box-text {
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  font-family: PingFangSC-Medium;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  font-weight: 500;
}
.order-info {
  position: relative;
  top: -10px;
  left:10px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
}
.order-other {
  position: relative;
  left: -90px;
  top: 15px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
}
</style>

