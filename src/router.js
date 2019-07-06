import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import films from './components/films.vue'
import cinema from './views/cinema.vue'
import cities from './views/cities.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'films',
          component: films,
          children: [
            { path: 'nowPlaying' },
            { path: 'comingSoon' }
          ]
        }
      ]
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: cinema
    },
    {
      path: '/cities',
      component: cities
    }
  ]
})
