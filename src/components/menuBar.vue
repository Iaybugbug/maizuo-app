<template>
  <div class="mz_menuBar">
    <ul class="mz_menuBar_ul">
      <li v-for="(item,index) in menus"
        :key="index">
        <router-link :to="item.to"
        active-class="active">
          <i class="iconfont" :class="item.class"></i>
          <span>{{item.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'menuBar',
  inheritAttrs: false,
  props: {
    menus: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang='scss'>
  @import '@/assets/px2rem.scss';
  // @import "//at.alicdn.com/t/font_1268161_0j5q38ubbcyj.css";
  @import "//at.alicdn.com/t/font_1268161_1z1e01crrs4.css";
  html,body,#app {
    height: 100%;
  }
  @import "../assets/common/mz_menuBar.scss";
  @include menu_border;
</style>
