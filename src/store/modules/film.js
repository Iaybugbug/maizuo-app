import axios from 'axios'
const state = {
  bannerList: [],
  filmList: [],
  cityId: 440300,
  pageNum: 1,
  pageSize: 10,
  type: 0,
  total: 0
}
const getters = {
  getPageNum (state) {
    return state.total
  }
}
const mutations = {
  setBannerList (state, payload) {
    state.bannerList = payload.list
  },
  setFilmList (state, payload) {
    state.filmList = payload.filmList
    state.total = payload.total
  },
  setPageNum (state, payload) {
    state.pageNum = payload.pageNum
  },
  typeChange (state, payload) {
    state.type = payload.chgType
  }
}
const actions = {
  getBannerList ({ commit }) {
    axios
      .get('https://m.maizuo.com/gateway?type=2&cityId=440300&k=7580234', {
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"156194886142949673108"}',
          'X-Host': 'mall.cfg.common-banner'
        }
      })
      .then(response => {
        let res = response.data
        if (res.status === 0) {
          commit({
            type: 'setBannerList',
            list: res.data
          })
        } else {
          alert(res.msg)
        }
      })
  },
  getFilmList ({ commit, state }) {
    axios
      .get('https://m.maizuo.com/gateway',
        {
          params: {
            cityId: state.cityId,
            pageNum: state.pageNum,
            pageSize: state.pageSize,
            type: state.type
          },
          headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15611934009238474654466"}',
            'X-Host': 'mall.film-ticket.film.list'
          }
        })
      .then(response => {
        let res = response.data.data.films
        let total = response.data.data.total
        if (response.data.status === 0) {
          commit({
            type: 'setFilmList',
            filmList: [...state.filmList, ...res],
            total: total
          })
          commit({
            type: 'setPageNum',
            pageNum: state.pageNum + 1
          })
        }
      })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
