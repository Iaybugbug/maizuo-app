<template>
  <div class="mz_banner swiper-container" ref="list"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide"
      v-for="item in list"
      :key="item.bannerId"
      >
        <img :src="item.imgUrl" >
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'banner',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    loop: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isSwiper (val, oldVal) {
      if (this.mySwiper) {
        this.mySwiper.destroy()
      }
      this.$nextTick(() => {
        this.initSwiper()
      })
    }
  },
  methods: {
    initSwiper () {
      let container = this.$refs.list
      this.mySwiper = new Swiper(container, {
        autoplay: true
      })
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss">
@import '~swiper/dist/css/swiper.css';
@import '~@/assets/px2rem.scss';
.mz_banner {
  height: 210px;
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
