<template>
  <div class="films">
   <div class="play-title" @click="changeType">
      <router-link to="/films/nowPlaying" class="play"
      active-class="active"
      ><span>正在热映</span></router-link>
      <router-link to="/films/comingSoon" class="play"
      active-class="active"
      ><span >即将上映</span></router-link>
   </div>
    <filmList/>
  </div>
</template>
<script>
import filmList from './filmList.vue'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'films',
  components: {
    filmList
  },
  computed: {
    ...mapState('film', ['type', 'filmList'])
  },
  methods: {
    ...mapActions('film', ['getFilmList', 'setFilmList']),
    changeType () {
      let route = this.$route.fullPath
      if (/nowPlaying$/.test(route)) {
        this.$store.commit({
          type: 'film/typeChange',
          chgType: 1
        })
      } else if (/comingSoon$/.test(route)) {
        this.$store.commit({
          type: 'film/typeChange',
          chgType: 2
        })
      }
      this.$store.commit({
        type: 'film/setPageNum',
        pageNum: 1
      })
      this.$store.commit({
        type: 'film/setFilmList',
        filmList: []
      })
      this.$store.dispatch({
        type: 'film/getFilmList'
      })
    }
  }
}
</script>
<style lang="scss" >
  .play-title {
    display: flex;
    justify-content: space-around;
    line-height: 49px;
    .play {
      color: #191a1b;
      font-size: 14px;
      cursor: pointer;
    }
    .active {
      color: #ff5f16;
      border-bottom: 2px solid #ff5f16;
    }
  }
</style>
