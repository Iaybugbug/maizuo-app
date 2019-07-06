import Vue from 'vue'
import Vuex from 'vuex'
import film from './modules/film'
import cities from './modules/cities'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    film,
    cities
  }
})
