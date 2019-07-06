<template>
  <div class="mz">
    <div class="mz-content" @scroll="handleScroll" ref="toTop">
      <banner  :list="bannerList" loop/>
      <div class="content" >
        <films/>
      </div>
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
import menuBar from '../components/menuBar.vue'
import banner from '@/components/banner.vue'
import films from '../components/films.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    menuBar,
    banner,
    films
  },
  computed: {
    ...mapState('film', ['bannerList', 'filmList', 'pageNum', 'pageSize', 'total'])
  },
  methods: {
    ...mapActions('film', ['getBannerList', 'getFilmList']),
    handleScroll () {
      let toTop = Math.floor(this.$refs.toTop.scrollTop)
      // // 210  49     572     668  124*10
      // // 831 1403 1975 2547
      let goTop = 259 + 572 * (this.pageNum - 1)
      if (((toTop >= goTop)) &&
        (this.pageNum <= Math.ceil(this.total / this.pageSize))) {
        // this.getFilmList()
      }
    }
  },
  created () {
    this.getBannerList()
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll, true)
  }
}

</script>
<style lang="scss">
@import '@/assets/px2rem.scss';
@import '@/assets/common/reset.scss';

.mz-content {
  flex: 1;
  overflow-y: auto;
}
</style>
