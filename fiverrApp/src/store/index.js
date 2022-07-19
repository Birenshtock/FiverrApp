import { createStore } from 'vuex'

import gigStore from './modules/gig-store.js'

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    gigStore,
  },
})

export default store
