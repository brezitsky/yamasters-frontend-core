import './style.scss'

import 'SCSS/owl.carousel.scss'
import 'SCSS/lib/owl-carousel/owl.theme.default.scss'

import * as Vue from 'vue'
import Component from 'vue-class-component'

@Component({
	props: ['items', 'settings'],

	template: `
		<div class='yam-slider' :style='firstBg()'>
			<div :class='{"owl-carousel": true, "mounted": isMounted}'>
				<div v-for='item in normItems' class='item' :style='"background-image: url("+ item.image +")"'>
					{{item.text}}
				</div>
			</div>
		</div>
	`,

	data() {
		return {
			normItems: JSON.parse(this['items']),
			normSettings: JSON.parse(this['settings']),
			isMounted: false
		}
	},

	methods: {
		firstBg() {
			return this['isMounted'] ? '' : `background-image: url("${this['normItems'][0].image}")`
		}
	},

	mounted() {
		// console.log(this);

		$(this.$el.querySelector('.owl-carousel')).owlCarousel(this['normSettings'])

		this['isMounted'] = true
	}
})

export default class Slider extends Vue {

}
