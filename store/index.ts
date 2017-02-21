import * as Vuex from 'vuex'
import * as selectboxes from './modules/selectbox/'
import * as notifier from './modules/notifier/'



export default new Vuex.Store({
	modules: {
		selectboxes,
		notifier
	}
})
