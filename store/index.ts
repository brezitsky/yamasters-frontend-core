import * as Vuex from 'vuex'
import * as selectboxes from './modules/selectbox/'
import * as notifier from './modules/notifier/'
import * as liqpay from './modules/liqpay/'
import * as counter from './modules/counter/'



export default new Vuex.Store({
	modules: {
		selectboxes,
		notifier,
		liqpay,
		counter
	}
})
