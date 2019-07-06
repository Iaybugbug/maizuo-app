<template>
  <div class="mz">
    <div class="content">
      <p>this is cinemaPage</p>
      <cinemas/>
    </div>
    <menuBar :menus="[
    {name: '电影', to: '/films', class: 'icon-dianying' },
    {name: '影院', to: '/cinema', class: 'icon-yingyuana' },
    {name: '特惠', to: '/discount', class: 'icon-tehui' },
    {name: '我的', to: '/mine', class: 'icon-iconfuzhi' }
    ]"/>
  </div>
</template>
<script>
import cinemas from '../components/cinemas.vue'
import menuBar from '../components/menuBar.vue'
export default {
  name: 'cinema',
  components: {
    cinemas,
    menuBar
  }
}
</script>
