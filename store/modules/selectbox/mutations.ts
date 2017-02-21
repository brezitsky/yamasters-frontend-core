import {selectbox as type} from 'VUEX/mutation-types';
import {notifier} from 'VUEX/mutation-types'

export const mutations = {

	[type.OPEN](state, payload) {
		state[payload.namespace].isVisible = true;
		state[payload.namespace].textBuffer = state[payload.namespace].text;
		state[payload.namespace].text = '';
	},

	[type.TEXT](state, payload) {
		// console.log(payload);
		state[payload.namespace].text = payload.text;
		state[payload.namespace].textBuffer = payload.text;
	},

	[type.VALUE](state, payload) {
		// console.log(payload);
		state[payload.namespace].value = payload.value;
	},

	[type.CLOSE](state, payload) {
		state[payload.namespace].isVisible = false;
		state[payload.namespace].text = state[payload.namespace].textBuffer;
	},

	[type.FIRST_RENDERING](state, payload) {
		state[payload.namespace].firstRendering = payload.flag;
	},

	[type.SET](state, payload) {
		// console.log(payload);
		state[payload.namespace].placeholder = payload.response.placeholder;
		state[payload.namespace].items = payload.response.items;
		// state[payload.namespace].firstRendering = false;
	}
}
