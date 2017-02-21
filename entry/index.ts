//-----------------------------------------  STYLES
import 'SCSS/grid.scss'
// import 'SCSS/awesome.scss'
import 'SCSS/jquery.fancybox.scss';
import 'SCSS/animate.scss';

//-----------------------------------------  Vue components
import Selectbox from 'PUG/components/selectbox'
import Slider from 'PUG/components/slider'
import Notifier from 'PUG/components/notifier'

//-----------------------------------------  First global state builder
import FirstGlobalState from 'CLASSES/FirstGlobalState.class'
const fgs = new FirstGlobalState();
fgs.getGlobalState();


//-----------------------------------------  LOGIC
import * as Vue from 'vue'
import * as Vuex from 'vuex'

Vue.use(Vuex)
import store from '../store'

// console.log(store);

new Vue({
	el: '#body',
	store,
	components: {
		'yam-selectbox': Selectbox,
		'yam-slider': Slider,
		'yam-notifier': Notifier
	}
})

$('.fancybox').fancybox()
