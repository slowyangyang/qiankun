<template>
  <div class="container">
    <div class="group_1 flex-col">
      <div class="group_2 flex-col">
        <div class="group_3 flex-col">
          <div class="group_18 flex-row justify-between" style="z-index: 9999">
            <div class="text-group_20 flex-col justify-between">
              <span class="text_60">特惠服务</span>
              <span class="text_61">特惠服务</span>
            </div>
            <div class="block_9 flex-col">
              <div class="image-text_3 flex-col justify-between" @click="goServer()">
                <img src="../assets/home/whiteServer.jpg" class="label_3"/>
                <span class="text-group_10">客服</span>
              </div>
              <el-divider  class="image_3"></el-divider>
              <div class="image-text_4 flex-col justify-between" @click="goFeedback()">
                <img src="../assets/home/whiteFeedback.jpg" class="label_4"/>
                <span class="text-group_11">反馈</span>
              </div>
            </div>
          </div>
          <span class="text_62" style="z-index: 9999">点击查看 ></span>
        </div>
        <span class="text_63">热门服务</span>
        <div class="list_1 flex-row">
        <div
            class="list-items_1 flex-col"
            v-for="(item, index) in hotData"
            :key="index"
            @click="goToDetail(item.id)"
        >
          <img :src="item.img" alt="" />
          <div class="text-wrapper_14 flex-col" >
            <span class="text_64" v-html="item.title" style="z-index:999;"></span>
          </div>
        </div>
      </div>
        <span class="text_63">推荐服务</span>
        <div class="left-box" @click="goToDetail(item)">
          <img :src="recommendedData[0].img" alt="Energy Service" class="box-img"/>
          <div class="box-text flex-col" >
            <div class="box-title">{{ recommendedData[0].title }}</div>
          </div>
        </div>
        <!-- 右边的盒子 -->
        <div class="right-box">
          <div v-for="(item, index) in recommendedData" :key="index" v-if="index > 0" @click="goToDetail(item.id)">
            <img :src="item.img" alt="Charging Pile Service" class="box-img"/>
            <div class="box-text flex-col" >
              <div class="box-title">{{ item.title }}</div>
            </div>
          </div>
        </div>
        <span class="text_63">规划设计</span>
        <div class="list_1 flex-row">
          <div
              class="list-items_1 flex-col"
              v-for="(item, index) in designData"
              :key="index"
              @click="goToDetail(item.id)"
          >
            <img :src="item.img" alt="" />
            <div class="box_3 flex-row">
              <div class="text-group_1 flex-col justify-between">
                <span class="text_5">{{item.title}}</span>
                <span class="text_6">¥{{item.price}}</span>
              </div>
            </div>
          </div>
        </div>
        <span class="text_63">运维设计</span>
        <div class="list_1 flex-row">
          <div
              class="list-items_1 flex-col"
              v-for="(item, index) in designData"
              :key="index"
              @click="goToDetail(item.id)"
          >
            <img :src="item.img" alt="" />
            <div class="box_3 flex-row">
              <div class="text-group_1 flex-col justify-between">
                <span class="text_5">{{item.title}}</span>
                <span class="text_6">¥{{item.price}}</span>
              </div>
            </div>
          </div>
        </div>
        <span class="text_63">翻屋租顶</span>
        <div class="list_1 flex-row">
          <div
              class="list-items_1 flex-col"
              v-for="(item, index) in housebreakingData"
              :key="index"
              @click="goToDetail(item.id)"
          >
            <img :src="item.img" alt="" />
            <div class="text-wrapper_7 flex-row justify-between">
              <span class="text_23">{{item.title}}</span>
            </div>
            <div class="box_11 flex-row">
              <i class="el-icon-location-outline"></i>
              <span class="text_27">{{item.place}}</span>
              <span class="text_28">{{item.area}}</span>
            </div>
            <div class="text-wrapper_8 flex-row justify-between">
              <span class="text_35">¥{{item.price}}</span>
            </div>
          </div>
        </div>
        <div class="box_12 flex-row justify-between">
          <div class="section_5 flex-col">
            <div class="text-wrapper_9 flex-row">
              <span class="text_39">金融服务</span>
            </div>
            <div class="text-wrapper_10 flex-row">
              <span class="text_40">点击查看 ></span>
            </div>
          </div>
          <div class="section_6 flex-col">
            <div class="text-wrapper_11 flex-row">
              <span class="text_41">金融服务</span>
            </div>
            <div class="text-wrapper_12 flex-row">
              <span class="text_42">点击查看 ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotData: [
        {
          img: require('../assets/partner/home.png'),
          title: '家居储能设备服务',
        },
        {
          img: require('../assets/partner/powers.png'),
          title: '光伏板服务',
        },
        {
          img: require('../assets/partner/power.png'),
          title: '光伏板服务',
        },
        {
          img: require('../assets/partner/hotMercury.png'),
          title: '热泵服务',
        },
      ],
      recommendedData: [
        {
          id:'1',
          img: require('../assets/partner/energy.png'),
          title: '储能设备服务',
        },
        {
          id:'2',
          img: require('../assets/partner/chargingPile.png'),
          title: '充电桩服务',
        },
        {
          id:'3',
          img: require('../assets/partner/chargingPile.png'),
          title: '充电桩服务',
        },
      ],
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
      housebreakingData: [
        {
          img: require('../assets/partner/housebreaking.png'),
          title: '房屋租顶服务',
          price:'1234',
          place:'榆林市的一个地址',
          area:'150m²',
        },
        {
          img: require('../assets/partner/housebreaking.png'),
          title: '房屋租顶服务',
          price:'1234',
          place:'榆林市的一个地址',
          area:'150m²',
        },
        {
          img: require('../assets/partner/housebreaking.png'),
          title: '房屋租顶服务',
          price:'1234',
          place:'榆林市的一个地址',
          area:'150m²',
        },
        {
          img: require('../assets/partner/housebreaking.png'),
          title: '房屋租顶服务',
          price:'1234',
          place:'榆林市的一个地址',
          area:'150m²',
        },
      ],
      financeData: [
        {
          img: require('../assets/partner/finance.png'),
          title: '金融服务',
        },
        {
          img: require('../assets/partner/finance.png'),
          title: '金融服务',
        },
      ],
    };
  },
  methods: {
    goToDetail(serverId) {
      // 跳转到详情页面
      this.$router.push({ name: 'serverDetail', params: { id: serverId } });
    },
    goServer() {
      this.$router.push({name:'partnerServer'})
    },
    goFeedback() {
      this.$router.push({name:'feedback'})
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

.box_1 {
  width: 80%;
  height: 820px;
  margin: 1000px 0 0 195px;
}

.block_1 {
  height: 820px;
  width: 760px;
}

.text-wrapper_1 {
  height: 45px;
  width: 756px;
  margin: 775px 0 0 4px;
  background: #939393;
  position: relative;
  left: -770px;
}

.text_64 {
  width: 169px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 9px 0 0 104px;
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

.block_9 {
  width: 80px;
  height: 195px;
  margin-top: 53px;
}

.label_3 {
  width: 28px;
  height: 28px;
  margin-left: 2px;
}

.text-group_10 {
  width: 32px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(254, 254, 254, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 6px;
}

.image_3 {
  width: 52px;
  height: 1px;
  margin: 15px 0 0 13px;
}
.label_4 {
  width: 23px;
  height: 22px;
  margin-left: 5px;
}

.text-group_11 {
  width: 32px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(245, 245, 245, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 8px;
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
.group_18 {
  width: 1675px;
  height: 248px;
  margin: 251px 0 0 195px;
}
.text-group_20 {
  width: 280px;
  height: 145px;
}
.image-text_3 {
  width: 32px;
  height: 56px;
  margin: 23px 0 0 24px;
}
.image-text_4 {
  width: 32px;
  height: 52px;
  margin: 16px 0 32px 24px;
}
.list_1 {
  width: 1532px;
  height: 505px;
  margin: 20px 0 0 195px;
}

.list-items_1 {
  height: 505px;
  margin-right: 8px;
  width: 376px;
}
.text-wrapper_14 {
  height: 45px;
  background:#939393;
  margin-top: -45px;
  width: 376px;
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
.text_23 {
  width: 120px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}
.el-icon-location-outline {
  width: 18px;
  height: 18px;
  margin-top: 4px;
}
.text_27 {
  width: 128px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 16px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin: 2px 0 0 6px;
}
.text_28 {
  width: 48px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  line-height: 22px;
  margin-left: 140px;
}
.text_35 {
  width: 57px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 20px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}
.box_12 {
  width: 100%;
  height: 575px;
  margin: 260px 0 1px 0;
}
.section_5 {
  background-image: url("../assets/partner/leftFinance.png");
  height: 575px;
  width: 955px;
}
.text-wrapper_9 {
  width: 144px;
  height: 50px;
  margin: 39px 0 0 219px;
}
.text_39 {
  width: 144px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(247, 123, 31, 1);
  font-size: 36px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  line-height: 50px;
}
.text-wrapper_10 {
  width: 119px;
  height: 33px;
  margin: 405px 0 48px 794px;
}
.text_40 {
  width: 119px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 24px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}
.section_6 {
  background-image: url("../assets/partner/finance.png");
  height: 575px;
  width: 955px;
  opacity: 1;
}
.text-wrapper_11 {
  width: 144px;
  height: 50px;
  margin: 39px 0 0 45px;
}
.text_41 {
  width: 144px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(5, 78, 255, 1);
  font-size: 36px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  line-height: 50px;
}
.text-wrapper_12 {
  width: 119px;
  height: 33px;
  margin: 405px 0 48px 621px;
}
.text_42 {
  width: 119px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 24px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}
.left-box {
  top: 1800px;
  width: 756px;
  position: absolute;
  left: 200px;
}
.right-box {
  width: 756px;
  position: relative;
  left: 970px;
  top: 15px;
}
.box-img {
  width: 100%;
}
.box-text {
  height: 45px;
  background:#939393;
  margin-top: -52px;
  width: 756px;
  position: relative;
  z-index:9999;
  margin-bottom: 10px;
}
.box-title {
  text-align: center;
  width: 169px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 9px 0 0 304px;
}
</style>
