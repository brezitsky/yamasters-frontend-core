//-----------------------------------------  STYLES
import 'SCSS/grid.scss'
// import 'SCSS/awesome.scss'
import 'SCSS/jquery.fancybox.scss';
import 'SCSS/animate.scss';

//-----------------------------------------  First global state builder
import FirstGlobalState from 'CLASSES/FirstGlobalState.class'
const fgs = new FirstGlobalState();
fgs.getGlobalState();

//-----------------------------------------  Vue components
import Selectbox from 'PUG/components/selectbox'
import Slider from 'PUG/components/slider'
import Notifier from 'PUG/components/notifier'
import Liqpay from 'PUG/components/liqpay'

//-----------------------------------------  LOGIC
import * as Vue from 'vue'
import * as Vuex from 'vuex'

Vue.use(Vuex)
import store from '../store'

// console.log(store);

let componentsList = {};

for (var component in window['FirstGlobalState']) {
	if (window['FirstGlobalState'].hasOwnProperty(component)) {
		// console.log(component);

		switch (component) {
			case 'yam-selectbox':
				componentsList[component] = Selectbox
				break;
			case 'yam-notifier':
				componentsList[component] = Notifier
				break;
			case 'yam-slider':
				componentsList[component] = Slider
				break;
			case 'yam-liqpay':
				componentsList[component] = Liqpay
				break;
			default:
			console.log(`Unknown component: "${component}"`);
		}
	}
}

new Vue({
	el: '#body',
	store,
	components: componentsList
})

$('.fancybox').fancybox()
