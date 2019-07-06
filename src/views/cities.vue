<template>
  <div class="page-cityes">
    <div class="header">
      <div class="left">
        <i class="iconfont icon-guanbi"></i>
      </div>
      <div class="title">当前城市 - </div>
    </div>
    <div class="search-city">
      <div class="input-wrap">
        <i class="iconfont icon-fangdajing"></i>
        <input type="text" class="search-input" placeholder="请输入搜索城市">
        <div class="clear-icon">
          <i class="iconfont icon-qingchu"></i>
        </div>
      </div>
    </div>
    <div class="mint-indexlist city-index">
      <div class="local-hot">
        <div class="local">
          <p>GPS定位你所在城市</p>
          <a>定位失败</a>
        </div>
        <div class="hot">
          <p>热门城市</p>
          <ul>
            <li><a href="">北京</a></li>
          </ul>
        </div>
        <div class="cities-lis">
          <ul>
            <li>
              <p>A</p>
              <ul>
                <li
                v-for="item in citiesList"
                :key="item.cityId"
                ><a href="">{{ item.name }}</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="py">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'cityes',
  computed: {
    ...mapState('cities', ['citiesList']),
    ...mapGetters('cities', ['getPy'])
  },
  methods: {
    ...mapActions('cities', ['getCities'])
  },
  created () {
    this.getCities()
  },
  updated () {
    console.log(this.getPy)
  }
}
</script>
<style lang="scss">
.page-cityes {
  background: #fff;
  .header {
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 3000;
    div {
      float: left;
      height: 44px;
    }
    .left {
      width: 14%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      i {
        display: block;
        font-size: 19px;
        margin-left: 10px;
        color: #191a1b;
      }
    }
    .title {
      width: 72%;
      text-align: center;
      font-size: 17px;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      color: #191a1b;
    }
  }
  .search-city {
    z-index: 2000;
    height: 49px;
    width: 100vw;
    padding: 9.5px 15px;
    background-color: #f4f4f4;
    position: fixed;
    top: 44px;
    .input-wrap {
      background-color: #fff;
      position: relative;
      display: inline-block;
      border-radius: 3px;
      width: 100%;
      height: 30px;
      i {
        position: absolute;
        left: 7px;
        top: 0;
        line-height: 30px;
        font-size: 21px;
        color: #797d82;
      }
      .search-input {
        position: absolute;
        left: 33.5px;
        top: 0;
        height: 30px;
        width: calc(100% - 65px);
        border: 0;
      }
      .clear-icon {
        position: absolute;
        right: 7px;
        top: 0;
        line-height: 30px;
        font-size: 21px;
        color: #bdc0c5;
        i {
          font-size: 20px;
          display: none;
        }
      }
      .cancel-btn {
        width: 43px;
        position: absolute;
        display: inline-block;
        text-align: right;
        font-size: 14px;
        line-height: 30px;
      }
    }
    .onFocus {
      width: calc(100% - 43px);
      background-color: #fff;
      position: relative;
      display: inline-block;
      border-radius: 3px;
      width: 100%;
      height: 30px;
    }
  }
  .city-index {
    padding-top: 94px;
  }
  .mint-indexlist {
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    ul {
      margin-right: 17px;
      z-index: 3000;
      list-style: none;
      padding: 0;
      margin: 0;
      overflow: auto;
    }
    .local-hot {
      margin-right: 17px;
      flex: 1;
    }
    .py {
      position: fixed;
      z-index: 1999;
      width: 17px;
      margin-top: 94px;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: #fff;
      text-align: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      ul {
        display: flex;
        justify-content: space-around;
        li {
          font-size: 11px;
          padding: 0 6px;
          color: #191a1b;
        }
      }
    }
  }
}
</style>
