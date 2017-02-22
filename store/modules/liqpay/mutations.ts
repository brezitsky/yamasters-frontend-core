import {liqpay as type} from 'VUEX/mutation-types';
import {notifier} from 'VUEX/mutation-types'

export const mutations = {
	[type.DATA](state, payload) {
		state[payload.namespace].data = payload.data
	},

	[type.SIGNATURE](state, payload) {
		state[payload.namespace].signature = payload.signature
	}
}
