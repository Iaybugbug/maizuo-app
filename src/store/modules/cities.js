import axios from 'axios'
const state = {
  citiesList: []
}
const getters = {
  getPy (state) {
    let newList = []
    let obj = {}
    let py = null
    // [{name: '北京',py: 'beijing'}] => [{py: 'a', list: ['北京']}]
    state.citiesList.forEach(item => {
      let list = []
      py = item.pinyin.charAt(0).toUpperCase()
      let cities = state.citiesList.filter(oldCt => {
        return oldCt.pinyin.charAt(0).toUpperCase() === py
      })
      list = list.concat(cities)
      obj = {
        py,
        list
      }
      newList.push(obj)
    })
    for (var i = 0, ien = newList.length; i < ien; i++) {
      for (var j = i + 1; j < ien; j++) {
        if (newList[i][py] === newList[j][py]) {
          newList.splice(j, 1)
          ien--
        }
      }
    }
    return newList.sort((a, b) => {
      return a.py.charCodeAt() - b.py.charCodeAt()
    })
  }
}
const mutations = {
  setCitiesList (state, payload) {
    state.citiesList = payload.cities
  }
}
const actions = {
  getCities ({ commit }) {
    axios
      .get('https://m.maizuo.com/gateway?k=6963276', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15611934009238474654466"}',
          'X-Host': 'mall.film-ticket.city.list'
        }
      })
      .then(response => {
        console.log(response)
        let res = response.data.data.cities
        if (response.data.status === 0) {
          commit({
            type: 'setCitiesList',
            cities: res
          })
        }
      })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
