import {counter as type} from 'VUEX/mutation-types';
import {notifier} from 'VUEX/mutation-types'

export const mutations = {
	[type.INCR](state, payload) {
		let separator = state[payload.namespace].separator
		let afterDot = state[payload.namespace].afterDot;
		let value = state[payload.namespace].value;
		let step = state[payload.namespace].step;
		let max = state[payload.namespace].max;

		value += step;

		value >= max ? value = max : false;

		state[payload.namespace].value = value;
		state[payload.namespace].userInput = String(value.toFixed(afterDot)).replace('.', separator);
	},

	[type.DECR](state, payload) {
		let separator = state[payload.namespace].separator
		let afterDot = state[payload.namespace].afterDot;
		let value = state[payload.namespace].value;
		let step = state[payload.namespace].step;
		let min = state[payload.namespace].min;

		value -= step;

		value <= min ? value = min : false;

		state[payload.namespace].value = value;
		state[payload.namespace].userInput = String(value.toFixed(afterDot)).replace('.', separator);
	}
}
