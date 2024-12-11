<template>
  <div :class="containerClass">
    <div class="menu">
      <router-link
        v-for="menuItem in menuList"
        :key="menuItem.id"
        :to="{ name: menuItem.routeName }"
        class="text"
        :class="{ 'selected-text': isSelected(menuItem.routeName) }"
      >
        {{ menuItem.name }}
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      menuList: [{ id: 3, name: '订阅', routeName: 'SubscriptionComponent' }],
      selectedRouteName: null,
      showSearchBox: true,
    };
  },
  computed: {
    containerClass() {
      if (
        [
          'SubscriptionComponent',
          'PartnerComponent',
          'StoreComponent',
        ].includes(this.$route.name)
      ) {
        return 'container-menu transparent';
      }
      return 'container-menu';
    },
  },
  created() {
    this.selectMenuItem(this.$route.name);
  },
  methods: {
    selectMenuItem(routeName) {
      if (this.$route.path.startsWith('/tool/')) {
        this.selectedRouteName = 'ToolComponent';
      } else if (this.$route.path.startsWith('/partner/')) {
        this.selectedRouteName = 'PartnerComponent';
      } else if (this.$route.path.startsWith('/order/')) {
        this.selectedRouteName = 'SubscriptionComponent';
      } else if (this.$route.path.startsWith('/my/')) {
        this.selectedRouteName = 'MyComponent';
      } else if (this.$route.path.startsWith('/mall/')) {
        this.selectedRouteName = 'StoreComponent';
      } else {
        this.selectedRouteName = routeName;
      }
      this.showSearchBox =
        routeName !== 'ToolComponent' &&
        routeName !== 'SubscriptionComponent' &&
        !this.$route.path.startsWith('/tool/') &&
        !this.$route.path.startsWith('/order/');
    },

    isSelected(routeName) {
      // return this.selectedRouteName.indexOf(routeName) !== -1 ;
      return this.selectedRouteName === routeName;
    },
  },
  watch: {
    $route(to) {
      this.selectMenuItem(to.name);
    },
  },
};
</script>

<style lang="less" scoped>
.container-menu {
  display: inline-grid;
  height: 60px;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
}

.transparent {
  background: transparent;
}

.menu {
  width: auto;
  height: 22px;
  margin: 36px auto 29px 210px;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 999;
}

.text {
  width: auto;
  height: 22px;
  overflow-wrap: break-word;
  color: #000;
  font-size: 16px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 22px;
  margin: 0 40px;
}

.selected-text {
  color: rgba(37, 89, 236, 1);
}

.router-link-active,
a {
  text-decoration: none;
}

@media (max-width: 768px) {
  .container-menu {
    height: 60px;
  }

  .text {
    font-size: 14px;
    margin: 0 10px;
  }

  .menu {
    margin: 15px auto 20px auto;
  }
}
</style>
