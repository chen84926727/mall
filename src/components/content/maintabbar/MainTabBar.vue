
<!-- template -->
<template>
  <tab-bar>
    <!--  home-->
    <tab-bar-item path='/home'
                  activeItemColor='orange'
                  defaultItemColor='blue'>
      <img slot="item-icon"
           src="~assets/img/tabbar/home.svg"
           alt=""
           srcset="">
      <img slot="item-icon-active"
           src="~assets/img/tabbar/home_active.svg"
           alt=""
           srcset="">
      <div slot="item-name">首页</div>
    </tab-bar-item>
    <!-- category -->
    <tab-bar-item path='/category'
                  activeItemColor='orange'
                  defaultItemColor='blue'>
      <img slot="item-icon"
           src="~assets/img/tabbar/category.svg"
           alt=""
           srcset="">
      <img slot="item-icon-active"
           src="~assets/img/tabbar/category_active.svg"
           alt=""
           srcset="">
      <div slot="item-name">分类</div>
    </tab-bar-item>
    <!-- cart -->
    <tab-bar-item path='/cart'
                  activeItemColor='orange'
                  defaultItemColor='blue'>
      <img slot="item-icon"
           src="~assets/img/tabbar/shopcart.svg"
           alt=""
           srcset="">
      <img slot="item-icon-active"
           src="~assets/img/tabbar/shopcart_active.svg"
           alt=""
           srcset="">
      <div slot="item-name">购物</div>
    </tab-bar-item>
    <!-- profile -->
    <tab-bar-item path='/profile'
                  activeItemColor='orange'
                  defaultItemColor='blue'>
      <img slot="item-icon"
           src="~assets/img/tabbar/profile.svg"
           alt=""
           srcset="">
      <img slot="item-icon-active"
           src="~assets/img/tabbar/profile_active.svg"
           alt=""
           srcset="">
      <div slot="item-name">我的
      </div>
    </tab-bar-item>
  </tab-bar>
</template>

<!-- script -->
<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<!-- style -->
<style>
</style>
