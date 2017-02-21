import {notifier} from '../../mutation-types';

export const mutations = {

	[notifier.COUNT_UP]: state => state.counter++,

	[notifier.NEW_MESSAGES](state, payload) {
		state.newMessages = [...payload.messages]
	},

	[notifier.CLOSE_MESSAGE](state, payload) {
		// console.log(payload);
		state.currentMessages = state.currentMessages.filter(message => {
			if(message.id != payload.id) {
				return message
			}
			else {
				state.oldMessages.push(message)
			}
		})

	},

	[notifier.SHOW_MESSAGE](state, payload) {
		let message = payload.message;
		message['id'] = payload.id;
		state.currentMessages.push(message)
	}
}
