import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'

// MAIN MODULES
import mainNav from './modules/mainNav'
import mainSnackbar from './modules/mainSnackbar'

// ADMIN MODULES
import adminSnackbar from './modules/adminSnackbar'
import adminMessages from './modules/adminMessages'

import config from './modules/config'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mainNav,
    mainSnackbar,
    adminSnackbar,
    adminMessages,
    config
  },
  mutations: {
		...vuexfireMutations
	},
})
