import { firestoreAction } from 'vuexfire'
import { db } from '../../plugins/firebase'

export default {
	namespaced: true,
	state: {
		messages: []
	},
	getters: {
		getMessages: state => state.messages,
		getNewMessagesCount: state => state.messages.filter(message => message.newMessage).length
	},

	actions: {
		bindMessages: firestoreAction(({ bindFirestoreRef }) => {
			return bindFirestoreRef('messages', db.collection('messages'))
		})
	}
}