<template>
    <div class="container">
      <div class="charging-station">
        <img src="../assets/tool/img.png" alt="">
      </div>
      <el-carousel height="620px" indicator-position="outside" arrow="never"   trigger="click" >
        <el-carousel-item v-for="(group, index) in groupedCards" :key="index">
          <div class="card-container">
            <div class="card" v-for="(card, cardIndex) in group" :key="cardIndex" @click="navigateTo(card.route)">
              <div class="card-list flex-row justify-between">
                <img class="img" :src="card.img" />
                <div class="right-text flex-col">
                  <span class="check-text">{{ card.title }}</span>
                </div>
              </div>
              <div class="bottom-text flex-col justify-between">
                <span class="card-title">{{ card.text }}</span>
                <span class="card-info">{{ card.info }}</span>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
      <Footer></Footer>
    </div>
  </template>

<script>
  import Footer from "../components/Footer";

  export default {
    name: 'ToolComponent',
    components:{
      Footer
    },
    data() {
      return {
        cards: [
          {
            img: require('../assets/tool/policy.png'),
            title:'查政策',
            text:'标题文字',
            info:'文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容。',
            route: 'CheckPolicy'
          },
          {
            img: require('../assets/tool/standard.png'),
            title:'查标准',
            text:'标题文字',
            info:'文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容。',
            route: 'checkTheNorms'
          },
          {
            img: require('../assets/tool/electrovalence.png'),
            title:'查电价',
            text:'标题文字',
            info:'文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容。',
            route: 'checkThePrice'
          },
          {
            img: require('../assets/tool/power.png'),
            title:'查光伏',
            text:'标题文字',
            info:'文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容。',
            route: 'inspectionOfSolarEnergy'
          },
          {
            img: require('../assets/tool/energy.png'),
            title:'查储能',
            text:'标题文字',
            info:'文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容。',
            route: 'searchForStoredEnergy'
          },
          {
            img: require('../assets/tool/pile.png'),
            title:'查风电',
            text:'标题文字',
            info:'文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容。',
            route: 'checkTheWindPower'
          },
          {
            img: require('../assets/tool/wind.png'),
            title:'查电桩',
            text:'标题文字',
            info:'文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容。',
            route: 'electricInspectionPost'
          },
          {
            img: require('../assets/tool/microgrid.png'),
            title:'查微网',
            text:'标题文字',
            info:'文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容。',
            route: 'microsearch'
          },
        ],
      };
    },
    computed: {
      groupedCards() {
        const groups = [];
        for (let i = 0; i < this.cards.length; i += 4) {
          groups.push(this.cards.slice(i, i + 4));
        }
        return groups;
      }
    },
    created() {
      console.log(localStorage.getItem('TOKEN'),1111111)
    },
    mounted() {
    },
    methods: {
      navigateTo(routeName) {
        this.$router.push({ name: routeName });
      }
    }
  };
  </script>

<style scoped>
  .container {
    margin-top: 40px;
  }
  .charging-station img {
    width: 100%;
    height: auto;
    display: block;
    margin: 20px auto;
  }
  .card-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 250px;
    height: 100%;
  }

  .card {
    width: 680px;
    height: 298px;
    background-size: 696px 314px;
    background: rgba(255,255,255,0.6);
    box-shadow: 0px 0px 8px 0px rgba(37,89,236,0.1);
    border-radius: 8px;
    border: 1px solid;
    border-image: linear-gradient(315deg, rgba(255, 255, 255, 1), rgba(180, 206, 255, 1)) 1 1;
    backdrop-filter: blur(3px);
    margin: 5px;
  }

  .card-list {
    width: 578px;
    height: 64px;
    margin: 53px 0 0 50px;
  }

  .img {
    width: 63px;
    height: 54px;
  }

  .right-text {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 4px;
    height: 40px;
    border: 1px solid rgba(37, 89, 236, 1);
    margin-top: 24px;
    width: 119px;
  }

  .check-text {
    width: 48px;
    height: 22px;
    overflow-wrap: break-word;
    color: rgba(37, 89, 236, 1);
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    line-height: 22px;
    margin: 9px 0 0 35px;
  }

  .bottom-text {
    width: 576px;
    height: 94px;
    margin: 44px 0 43px 50px;
  }

  .card-title {
    width: 96px;
    height: 33px;
    overflow-wrap: break-word;
    color: rgba(0, 0, 0, 1);
    font-size: 24px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    white-space: nowrap;
    line-height: 33px;
  }

  .card-info {
    width: 576px;
    height: 50px;
    overflow-wrap: break-word;
    color: rgba(0, 0, 0, 1);
    font-size: 18px;
    font-weight: normal;
    text-align: left;
    line-height: 25px;
    margin-top: 11px;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .flex-col {
    display: flex;
    flex-direction: column;
  }

  .justify-between {
    justify-content: space-between;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .justify-between {
    display: flex;
    justify-content: space-between;
  }
  /deep/ .block_4 {
    margin-top: 25px;
  }
  .card:hover {
    cursor: pointer; /* 当鼠标悬停在卡片上时，显示指针箭头 */
  }

</style>
