<template>
  <div >
    <div class="box_1 flex-col">
      <div class="box_2 flex-col">
        <span class="text_1">为您提供一站式服务</span>
        <div class="text-wrapper_32 flex-row justify-between">
          <span class="text-white">省时</span> <span class="text-white">省心</span>
          <span class="text-white">省力</span>
        </div>
        <div class="text-wrapper_33 flex-col" @click="goOrder">
          <el-button type="text" class="text_89">立即订购</el-button>
        </div>
        <div class="text-wrapper_34 flex-col">
          <el-button type="text"  class="text_89">典型案例</el-button>
        </div>
      </div>
    </div>
    <div class="group_3 flex-col">
      <div class="box-text flex-row">
        <div class="text-group_1 flex-col justify-between">
          <span class="text-info">出色的实用性</span>
          <span class="paragraph_1"
          >设计精巧<br />适用于各种各样环境条件下的屋顶场景</span
          >
        </div>
      </div>
    </div>
    <img
        class="image_1"
        src="../assets/home/bj1.png"
    />
    <div class="group_4 flex-col">
      <div class="box-two flex-row">
        <div class="text-group_2 flex-col justify-between">
          <span class="text_2">全天捕捉能量</span>
          <span class="paragraph_2"
          >双面面板的垂直排列使其能够在日出和日落<br />这两个高峰时段捕获太阳能，从而提高其整体效率</span
          >
        </div>
      </div>
    </div>
    <img
        class="image_2"
        src="../assets/home/bj2.png"
    />
    <div class="group_5 flex-col">
      <img
          class="image_3"
          src="../assets/home/bj2.png"      />
      <div class="text-wrapper_1 flex-row justify-between">
        <span class="text_3">大雪荷载高达5400Pa</span>
        <span class="text_4">大雨荷载高达2400Pa</span>
      </div>
      <div class="group_6 flex-row justify-between">
        <div class="block_1 flex-row">
          <div class="text-group_3 flex-col justify-between">
            <span class="text_5">零光衰</span>
            <span class="text_6"
            >N型组件光衰性能出色，更少衰减，更高功率输出，带来更高的发电量输出。</span
            >
          </div>
        </div>
        <div class="block_2 flex-col"></div>
      </div>
      <img
          class="image_4"
          src="../assets/home/bj4.png"      />
      <div class="group_7 flex-row">
        <div class="text-group_4 flex-col justify-between">
          <span class="text_7">优异的低光性能响应能力</span>
          <span class="text_8"
          >无惧复杂气候条件，即使阴天或雾天，依持强大的可靠稳定性和卓越的功率输出。</span
          >
        </div>
      </div>
    </div>
    <div class="group_8 flex-col">
      <el-carousel height="1080px" arrow="never" :autoplay="false"  trigger="click" indicator-position="outside">
        <el-carousel-item>
          <img src="../assets/home/bj5.png" alt="">
          <div class="text-group_5 flex-col justify-between">
            <span class="text_9">并网光伏发电站</span>
            <span class="text_10">榆林市榆阳高新区金融中心</span>
          </div>
          <div class="text-wrapper_2">
        <span class="text_11"
        >该项目是国内首个采用大型海上钢桁架平台式固定桩基的光伏项目，年发电量可达17.8亿千瓦时</span
        >
            <span class="text_12">‌</span>
          </div>
          <div class="block_3 flex-col">
            <div class="text-wrapper_3 flex-row">
              <span class="text_13">装机量</span>
              <span class="text_14">10000</span> <span class="text_15">kWp</span>
            </div>
            <div class="text-wrapper_4 flex-row">
              <span class="text_16">投资额</span>
              <span class="text_17">70,981</span> <span class="text_18">元</span>
            </div>
            <div class="text-wrapper_5 flex-row">
              <span class="text_19">发电量</span>
              <span class="text_20">12936</span> <span class="text_21">kWh</span>
            </div>
            <div class="text-wrapper_6 flex-row">
              <span class="text_22">收益</span> <span class="text_23">19,924</span>
              <span class="text_24">元</span>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/home/bj5.png" alt="">
          <div class="text-group_5 flex-col justify-between">
            <span class="text_9">并网光伏发电站</span>
            <span class="text_10">榆林市榆阳高新区金融中心</span>
          </div>
          <div class="text-wrapper_2">
        <span class="text_11"
        >该项目是国内首个采用大型海上钢桁架平台式固定桩基的光伏项目，年发电量可达17.8亿千瓦时</span
        >
            <span class="text_12">‌</span>
          </div>
          <div class="block_3 flex-col">
            <div class="text-wrapper_3 flex-row">
              <span class="text_13">装机量</span>
              <span class="text_14">10000</span> <span class="text_15">kWp</span>
            </div>
            <div class="text-wrapper_4 flex-row">
              <span class="text_16">投资额</span>
              <span class="text_17">70,981</span> <span class="text_18">元</span>
            </div>
            <div class="text-wrapper_5 flex-row">
              <span class="text_19">发电量</span>
              <span class="text_20">12936</span> <span class="text_21">kWh</span>
            </div>
            <div class="text-wrapper_6 flex-row">
              <span class="text_22">收益</span> <span class="text_23">19,924</span>
              <span class="text_24">元</span>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/home/bj5.png" alt="">
          <div class="text-group_5 flex-col justify-between">
            <span class="text_9">并网光伏发电站</span>
            <span class="text_10">榆林市榆阳高新区金融中心</span>
          </div>
          <div class="text-wrapper_2">
        <span class="text_11"
        >该项目是国内首个采用大型海上钢桁架平台式固定桩基的光伏项目，年发电量可达17.8亿千瓦时</span
        >
            <span class="text_12">‌</span>
          </div>
          <div class="block_3 flex-col">
            <div class="text-wrapper_3 flex-row">
              <span class="text_13">装机量</span>
              <span class="text_14">10000</span> <span class="text_15">kWp</span>
            </div>
            <div class="text-wrapper_4 flex-row">
              <span class="text_16">投资额</span>
              <span class="text_17">70,981</span> <span class="text_18">元</span>
            </div>
            <div class="text-wrapper_5 flex-row">
              <span class="text_19">发电量</span>
              <span class="text_20">12936</span> <span class="text_21">kWh</span>
            </div>
            <div class="text-wrapper_6 flex-row">
              <span class="text_22">收益</span> <span class="text_23">19,924</span>
              <span class="text_24">元</span>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="group_9 flex-col">
      <el-carousel height="1870px" arrow="never" :autoplay="false"  trigger="click" indicator-position="outside">
        <el-carousel-item>
          <img src="../assets/home/bj6.png" alt="">
          <div class="group_10 flex-col">
            <div class="group_11 flex-col">
              <div class="text-group_6 flex-col justify-between">
                <span class="text_25">高端别墅光伏片区</span>
                <span class="text_26">榆林市榆阳高新区金融中心</span>
              </div>
              <div class="text-wrapper_7">
          <span class="text_27"
          >该项目是国内首个采用大型海上钢桁架平台式固定桩基的光伏项目，年发电量可达17.8亿千瓦时</span
          >
                <span class="text_28">‌</span>
              </div>
              <div class="section_1 flex-col">
                <div class="text-wrapper_8 flex-row">
                  <span class="text_29">装机量</span>
                  <span class="text_30">10000</span> <span class="text_31">kWp</span>
                </div>
                <div class="text-wrapper_9 flex-row">
                  <span class="text_32">投资额</span>
                  <span class="text_33">70,981</span> <span class="text_34">元</span>
                </div>
                <div class="text-wrapper_10 flex-row">
                  <span class="text_35">发电量</span>
                  <span class="text_36">12936</span> <span class="text_37">kWh</span>
                </div>
                <div class="text-wrapper_11 flex-row">
                  <span class="text_38">收益</span>
                  <span class="text_39">19,924</span> <span class="text_40">元</span>
                </div>
              </div>
            </div>
          </div>

        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/home/bj6.png" alt="">
          <div class="group_10 flex-col">
            <div class="group_11 flex-col">
              <div class="text-group_6 flex-col justify-between">
                <span class="text_25">高端别墅光伏片区</span>
                <span class="text_26">榆林市榆阳高新区金融中心</span>
              </div>
              <div class="text-wrapper_7">
          <span class="text_27"
          >该项目是国内首个采用大型海上钢桁架平台式固定桩基的光伏项目，年发电量可达17.8亿千瓦时</span
          >
                <span class="text_28">‌</span>
              </div>
              <div class="section_1 flex-col">
                <div class="text-wrapper_8 flex-row">
                  <span class="text_29">装机量</span>
                  <span class="text_30">10000</span> <span class="text_31">kWp</span>
                </div>
                <div class="text-wrapper_9 flex-row">
                  <span class="text_32">投资额</span>
                  <span class="text_33">70,981</span> <span class="text_34">元</span>
                </div>
                <div class="text-wrapper_10 flex-row">
                  <span class="text_35">发电量</span>
                  <span class="text_36">12936</span> <span class="text_37">kWh</span>
                </div>
                <div class="text-wrapper_11 flex-row">
                  <span class="text_38">收益</span>
                  <span class="text_39">19,924</span> <span class="text_40">元</span>
                </div>
              </div>
            </div>
          </div>

        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/home/bj6.png" alt="">
          <div class="group_10 flex-col">
            <div class="group_11 flex-col">
              <div class="text-group_6 flex-col justify-between">
                <span class="text_25">高端别墅光伏片区</span>
                <span class="text_26">榆林市榆阳高新区金融中心</span>
              </div>
              <div class="text-wrapper_7">
          <span class="text_27"
          >该项目是国内首个采用大型海上钢桁架平台式固定桩基的光伏项目，年发电量可达17.8亿千瓦时</span
          >
                <span class="text_28">‌</span>
              </div>
              <div class="section_1 flex-col">
                <div class="text-wrapper_8 flex-row">
                  <span class="text_29">装机量</span>
                  <span class="text_30">10000</span> <span class="text_31">kWp</span>
                </div>
                <div class="text-wrapper_9 flex-row">
                  <span class="text_32">投资额</span>
                  <span class="text_33">70,981</span> <span class="text_34">元</span>
                </div>
                <div class="text-wrapper_10 flex-row">
                  <span class="text_35">发电量</span>
                  <span class="text_36">12936</span> <span class="text_37">kWh</span>
                </div>
                <div class="text-wrapper_11 flex-row">
                  <span class="text_38">收益</span>
                  <span class="text_39">19,924</span> <span class="text_40">元</span>
                </div>
              </div>
            </div>
          </div>

        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="group_9 flex-col" style="margin-top: 860px;">
      <el-carousel height="1870px" arrow="never" :autoplay="false"  trigger="click" indicator-position="outside">
        <el-carousel-item>
          <img src="../assets/home/bj7.png" alt="">
          <div class="group_10 flex-col">
            <div class="group_11 flex-col">
              <div class="text-group_6 flex-col justify-between">
                <span class="text_25">高端别墅光伏片区</span>
                <span class="text_26">榆林市榆阳高新区金融中心</span>
              </div>
              <div class="text-wrapper_7">
          <span class="text_27"
          >该项目是国内首个采用大型海上钢桁架平台式固定桩基的光伏项目，年发电量可达17.8亿千瓦时</span
          >
                <span class="text_28">‌</span>
              </div>
              <div class="section_1 flex-col">
                <div class="text-wrapper_8 flex-row">
                  <span class="text_29">装机量</span>
                  <span class="text_30">10000</span> <span class="text_31">kWp</span>
                </div>
                <div class="text-wrapper_9 flex-row">
                  <span class="text_32">投资额</span>
                  <span class="text_33">70,981</span> <span class="text_34">元</span>
                </div>
                <div class="text-wrapper_10 flex-row">
                  <span class="text_35">发电量</span>
                  <span class="text_36">12936</span> <span class="text_37">kWh</span>
                </div>
                <div class="text-wrapper_11 flex-row">
                  <span class="text_38">收益</span>
                  <span class="text_39">19,924</span> <span class="text_40">元</span>
                </div>
              </div>
            </div>
          </div>

        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/home/bj7.png" alt="">
          <div class="group_10 flex-col">
            <div class="group_11 flex-col">
              <div class="text-group_6 flex-col justify-between">
                <span class="text_25">高端别墅光伏片区</span>
                <span class="text_26">榆林市榆阳高新区金融中心</span>
              </div>
              <div class="text-wrapper_7">
          <span class="text_27"
          >该项目是国内首个采用大型海上钢桁架平台式固定桩基的光伏项目，年发电量可达17.8亿千瓦时</span
          >
                <span class="text_28">‌</span>
              </div>
              <div class="section_1 flex-col">
                <div class="text-wrapper_8 flex-row">
                  <span class="text_29">装机量</span>
                  <span class="text_30">10000</span> <span class="text_31">kWp</span>
                </div>
                <div class="text-wrapper_9 flex-row">
                  <span class="text_32">投资额</span>
                  <span class="text_33">70,981</span> <span class="text_34">元</span>
                </div>
                <div class="text-wrapper_10 flex-row">
                  <span class="text_35">发电量</span>
                  <span class="text_36">12936</span> <span class="text_37">kWh</span>
                </div>
                <div class="text-wrapper_11 flex-row">
                  <span class="text_38">收益</span>
                  <span class="text_39">19,924</span> <span class="text_40">元</span>
                </div>
              </div>
            </div>
          </div>

        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/home/bj7.png" alt="">
          <div class="group_10 flex-col">
            <div class="group_11 flex-col">
              <div class="text-group_6 flex-col justify-between">
                <span class="text_25">高端别墅光伏片区</span>
                <span class="text_26">榆林市榆阳高新区金融中心</span>
              </div>
              <div class="text-wrapper_7">
          <span class="text_27"
          >该项目是国内首个采用大型海上钢桁架平台式固定桩基的光伏项目，年发电量可达17.8亿千瓦时</span
          >
                <span class="text_28">‌</span>
              </div>
              <div class="section_1 flex-col">
                <div class="text-wrapper_8 flex-row">
                  <span class="text_29">装机量</span>
                  <span class="text_30">10000</span> <span class="text_31">kWp</span>
                </div>
                <div class="text-wrapper_9 flex-row">
                  <span class="text_32">投资额</span>
                  <span class="text_33">70,981</span> <span class="text_34">元</span>
                </div>
                <div class="text-wrapper_10 flex-row">
                  <span class="text_35">发电量</span>
                  <span class="text_36">12936</span> <span class="text_37">kWh</span>
                </div>
                <div class="text-wrapper_11 flex-row">
                  <span class="text_38">收益</span>
                  <span class="text_39">19,924</span> <span class="text_40">元</span>
                </div>
              </div>
            </div>
          </div>

        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="group_14 flex-col"></div>
  </div>
</template>

<script>

export default {
  name: "SubscriptionComponent",
  components:{
  },
  methods: {
    goOrder() {
      this.$router.push({ name: 'planningAndDesign' });
    }
  },
}
</script>

<style lang="less" scoped>
@import "../assets/css/common.css";
.box_1 {
  height: 1080px;
  width: 100%;
}
.text_1 {
  text-shadow: 0px 3px 2px rgba(9, 16, 41, 0.13);
  width: 540px;
  height: 84px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 60px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  line-height: 84px;
  margin: 340px 0 0 135px;
}
.text-wrapper_32 {
  width: 232px;
  height: 33px;
  margin: 37px 0 0 147px;
}
.text-white {
  text-shadow: 0px 1px 2px rgba(170, 170, 170, 1);
  width: 48px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  line-height: 33px;
}
.text-wrapper_33 {
  border-radius: 4px;
  height: 60px;
  border: 2px solid rgba(255, 255, 255, 1);
  width: 528px;
  margin: 110px 0 0 141px;
}
.text_89 {
  width: 96px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 33px;
  margin: 0 0 0 216px;
}
.text-wrapper_34 {
  border-radius: 4px;
  height: 60px;
  border: 2px solid rgba(255, 255, 255, 1);
  width: 528px;
  margin: 70px 0 162px 141px;
}
.box-text {
  width: 544px;
  height: 172px;
  margin: 0 0 40px 629px;
}
.text-group_1 {
  width: 544px;
  height: 172px;
}
.text-info {
  width: 288px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 48px;
  font-weight: normal;
  text-align: right;
  white-space: nowrap;
  line-height: 50px;
  margin-left: 128px;
}
.paragraph_1 {
  width: 544px;
  height: 100px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 32px;
  font-family: PingFangSC-Light;
  font-weight: 300;
  text-align: right;
  line-height: 50px;
  margin-top: 22px;
}
.image_1 {
  width: 100%;
  height: 1283px;
  margin-top: -1px;
}
.group_4 {
  width: 1008px;
  height: 106px;
  margin: 34px 0 0 428px;
}
.box-two {
  width: 616px;
  height: 189px;
  margin: 40px 0 40px 151px;
}
.text-group_2 {
  width: 616px;
  height: 189px;
}
.text_2 {
  width: 300px;
  height: 67px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 48px;
  letter-spacing: 2px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 67px;
  margin-left: 158px;
}
.paragraph_2 {
  width: 616px;
  height: 100px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 28px;
  font-family: PingFangSC-Light;
  font-weight: 300;
  text-align: right;
  line-height: 50px;
  margin-top: 22px;
}

.image_2 {
  width: 1825px;
  height: 1023px;
  margin: 160px 0 0 0;
}

-group_5 {
  width: 288px;
  height: 88px;
  margin: 238px 0 0 142px;
}
.image_3 {
  width: 1826px;
  height: 565px;
  margin: 25px 0 0 47px;
}
.text-wrapper_1 {
  width: 1199px;
  height: 33px;
  margin: 60px 0 0 343px;
}
.text_3 {
  width: 243px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 24px;
  letter-spacing: 1px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}
.text_4 {
  width: 243px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 24px;
  letter-spacing: 1px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}
.group_6 {
  width: 288px;
  height: 88px;
  margin: 60px 0 0 50px;
}
.block_1 {
  background-color: rgba(241, 245, 246, 1);
  width: 603px;
  height: 1002px;
}
.text-group_3 {
  width: 435px;
  height: 133px;
  margin: 69px 0 0 104px;
}
.text_5 {
  width: 96px;
  height: 42px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 32px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 42px;
}
.text_6 {
  width: 435px;
  height: 80px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 24px;
  font-family: PingFangSC-Light;
  font-weight: 300;
  text-align: justify;
  line-height: 40px;
  margin-top: 11px;
}
.block_2 {
  background-image: url("../assets/home/bj3.png");
  width: 1223px;
  height: 1002px;
}
.image_4 {
  width: 1827px;
  height: 571px;
  margin-left: 47px;
  margin-top: 915px;
}
.group_7 {
  background: #f0f0f0;
  width: 1827px;
  height: 178px;
  margin: 0 0 0 45px;
}
.text-group_4 {
  width: 1008px;
  height: 106px;
  margin: 34px 0 0 428px;
}
.text_7 {
  width: 352px;
  height: 42px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 32px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 42px;
  margin-left: 310px;
}
.text_8 {
  width: 1008px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 28px;
  font-family: PingFangSC-Light;
  font-weight: 300;
  text-align: right;
  white-space: nowrap;
  line-height: 50px;
  margin-top: 14px;
}

.group_8 {
  width: 100%;
  height: 1080px;
  margin-top: 40px;
  border: 1px solid rgba(151, 151, 151, 1);
  justify-content: flex-center;
}
.text-group_5 {
  width: 288px;
  height: 88px;
  margin: 238px 0 0 142px;
  position: relative;
  z-index: 9999;
  top: -1200px;
}
.text_9 {
  width: 238px;
  height: 48px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 34px;
  font-weight: normal;
  text-align: right;
  white-space: nowrap;
  line-height: 48px;
}
.text_10 {
  width: 288px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-family: PingFangSC-Light;
  font-weight: 300;
  text-align: right;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 7px;
}
.text-wrapper_2 {
  width: 720px;
  height: 66px;
  overflow-wrap: break-word;
  font-size: 0;
  font-family: PingFangSC-Light;
  font-weight: 300;
  text-align: left;
  line-height: 33px;
  margin: 34px 0 0 142px;
  position: relative;
  z-index: 9999;
  top: -1200px;
}
.text_11 {
  width: 720px;
  height: 66px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-family: PingFangSC-Light;
  font-weight: 300;
  text-align: left;
  line-height: 33px;
}
.text_12 {
  width: 720px;
  height: 66px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-weight: normal;
  text-align: left;
  line-height: 33px;
}
.block_3 {
  height: 390px;
  width: 690px;
  margin: -1170px 0 237px 142px;
  position: relative;
  z-index: 9999;
}
.text-wrapper_3 {
  width: 615px;
  height: 40px;
  margin: 40px 0 0 45px;
}
.text_13 {
  width: 84px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 40px;
}
.text_14 {
  width: 91px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 34px;
  letter-spacing: 1.8214285373687744px;
  font-family: DINAlternate-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 355px;
}
.text_15 {
  width: 62px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  letter-spacing: 1.5px;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 23px;
}
.text-wrapper_4 {
  width: 583px;
  height: 40px;
  margin: 47px 0 0 45px;
}
.text_16 {
  width: 84px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 40px;
}
.text_17 {
  width: 90px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 34px;
  font-family: DINAlternate-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 356px;
}
.text_18 {
  width: 30px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  letter-spacing: 1.5px;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 23px;
}
.text-wrapper_5 {
  width: 615px;
  height: 40px;
  margin: 47px 0 0 45px;
}
.text_19 {
  width: 84px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 40px;
}
.text_20 {
  width: 91px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 34px;
  letter-spacing: 1.8214285373687744px;
  font-family: DINAlternate-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 355px;
}
.text_21 {
  width: 61px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  letter-spacing: 1.5px;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 24px;
}
.text-wrapper_6 {
  width: 583px;
  height: 40px;
  margin: 47px 0 49px 45px;
}
.text_22 {
  width: 56px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 40px;
}
.text_23 {
  width: 90px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 34px;
  font-family: DINAlternate-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 384px;
}
.text_24 {
  width: 30px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  letter-spacing: 1.5px;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 23px;
}

.group_9 {
  width: 100%;
  height: 1080px;
  border: 1px solid rgba(151, 151, 151, 1);
  margin-top: 60px;
}

.group_10 {
  width: 100%;
  height: 879px;
}
.group_11 {
  width: 100%;
  height: 740px;
}
.text-group_6 {
  width: 288px;
  height: 88px;
  margin: 60px 0 0 816px;
}
.text_25 {
  width: 272px;
  height: 48px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 34px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 48px;
  margin-left: 8px;
}
.text_26 {
  width: 288px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 24px;
  font-family: PingFangSC-Light;
  font-weight: 300;
  text-align: right;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 7px;
}
.text-wrapper_7 {
  width: 1004px;
  height: 33px;
  overflow-wrap: break-word;
  font-size: 0;
  font-family: PingFangSC-Light;
  font-weight: 300;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 34px 0 0 451px;
}
.text_27 {
  width: 1004px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 24px;
  font-family: PingFangSC-Light;
  font-weight: 300;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}
.text_28 {
  width: 1004px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 24px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}
.section_1 {
  width: 690px;
  height: 390px;
  background: rgba(102, 102, 102, 0.1);
  margin: 60px 0 75px 615px;
}
.text-wrapper_8 {
  width: 615px;
  height: 40px;
  margin: 40px 0 0 45px;
}
.text_29 {
  width: 84px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 28px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 40px;
}
.text_30 {
  width: 91px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 34px;
  letter-spacing: 1.8214285373687744px;
  font-family: DINAlternate-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 355px;
}
.text_31 {
  width: 62px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 28px;
  letter-spacing: 1.5px;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 23px;
}
.text-wrapper_9 {
  width: 583px;
  height: 40px;
  margin: 47px 0 0 45px;
}
.text_32 {
  width: 84px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 28px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 40px;
}
.text_33 {
  width: 90px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 34px;
  font-family: DINAlternate-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 356px;
}
.text_34 {
  width: 30px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 28px;
  letter-spacing: 1.5px;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 23px;
}
.text-wrapper_10 {
  width: 615px;
  height: 40px;
  margin: 47px 0 0 45px;
}
.text_35 {
  width: 84px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 28px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 40px;
}
.text_36 {
  width: 91px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 34px;
  letter-spacing: 1.8214285373687744px;
  font-family: DINAlternate-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 355px;
}
.text_37 {
  width: 61px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 28px;
  letter-spacing: 1.5px;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 24px;
}
.text-wrapper_11 {
  width: 583px;
  height: 40px;
  margin: 47px 0 49px 45px;
}
.text_38 {
  width: 56px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 28px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 40px;
}
.text_39 {
  width: 90px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 34px;
  font-family: DINAlternate-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 384px;
}
.text_40 {
  width: 30px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(25, 27, 28, 1);
  font-size: 28px;
  letter-spacing: 1.5px;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  line-height: 40px;
  margin-left: 23px;
}

.group_14 {
  background-image: url("../assets/home/bj8.png");
  width: 100%;
  height: 1080px;
  border: 1px solid rgba(151, 151, 151, 1);
  margin-top: 850px;
}
</style>
