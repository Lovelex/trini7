import { db } from '../../plugins/firebase'

export default {
	state: {
		depositions: {
			isVisible: false
		}
	},
	getters: {
		getDepositions: state => state.depositions
	},
	mutations: {
		SET_DEPOSITIONS_VISIBILITY: (state, payload) => state.depositions.isVisible = payload
	},
	actions: {
		setDepositions({ commit }) {
			db
      .collection('configs')
      .doc('depositions')
      .get()
      .then(doc => {
        commit('SET_DEPOSITIONS_VISIBILITY', doc.data().isVisible)
      })
		}
	}
}