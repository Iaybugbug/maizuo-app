<template>
  <div class="filmList" >
    <ul ref="listUl">
      <li v-for="film in filmList"
      :key="film.filmId"
      >
      <a href="">
        <div class="img">
          <img :src="film.poster" :alt="film.name">
        </div>
        <div class="detail">
          <div class="title">
            <span class="name">{{film.name}}</span>
            <span class="item">{{film.filmType.name}}</span>
          </div>
          <div>
            <span class="label">观众评分</span>
            <span class="grade">{{film.grade}}</span>
          </div>
          <div>
            <span class="labela">主演：{{film.actors | actors}}</span>
          </div>
          <div>
            <span class="labela">{{film.nation}} | {{ film.runtime }}分钟</span>
          </div>
        </div>
        <div class="buy">
          购票
        </div>
      </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'filmList',
  computed: {
    ...mapState('film', ['filmList'])
  },
  methods: {
    ...mapActions('film', ['getFilmList'])
  },
  created () {
    this.getFilmList()
  },
  filters: {
    actors (value) {
      if (!value) return ''
      let arr = value.map(item => item.name)
      return arr.join(' ')
    }
  }
}
</script>
<style lang="scss">
@import '../assets/px2rem.scss';
.filmList {
  margin-left: px2rem(15);
  li {
    padding: 15px 15px 15px 0;
    height: 94px;
    position: relative;
    a {
      display: flex;
      color: #333;
      justify-content: flex-start;
      align-items: center;
      .img {
        width: 66px;
        height: 94px;
        background: rgb(249, 249, 249);
        float: left;
        img {
          width: 100%;
        }
      }
      .detail {
        float: left;
        width: calc(100% - 116px);
        padding: 0 10px;
        box-sizing: border-box;
        div {
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          .name {
            max-width: calc(100% - 25px);
            color: #191a1b;
            font-size: 16px;
            height: 22px;
            line-height: 22px;
            margin-right: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item {
            font-size: 9px;
            color: #fff;
            background-color: #d2d6dc;
            height: 14px;
            line-height: 14px;
            padding: 0 2px;
            border-radius: 2px;
          }
          .label {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
          .grade {
            color: #ffb232;
            font-size: 14px;
          }
          .labela {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
        }
      }
      .buy {
        float: right;
        line-height: 25px;
        height: 25px;
        width: 50px;
        color: #ff5f16;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        position: relative;
        &::after {
          content: " ";
          -webkit-transform: scale(.5);
          -ms-transform: scale(.5);
          transform: scale(.5);
          position: absolute;
          border: 1px solid #ff5f16;
          top: -50%;
          right: -50%;
          bottom: -50%;
          left: -50%;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
