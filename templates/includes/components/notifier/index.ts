import './style.scss'

import * as Vue from 'vue'
import Component from 'vue-class-component'
import {mapActions} from 'vuex'
import {mapMutations} from 'vuex'
import {mapGetters} from 'vuex'

@Component({
	template: `
		<transition-group tag='div' id='notifier' name='slide-fade'>
			<div v-for='item in items' class='message' :key='item.id'>
				<div class='close' @click=''></div>
				<div v-html='item.header' class='header'></div>
				<div v-html='item.body' class='body'></div>
			</div>
		</transition-group>
	`,

	computed: {
		...mapGetters({
			items: 'currentMessages'
		})
	},

	methods: {
		...mapActions([
			'testAction',
			'loadMessages'
		])
	},

	created() {
		// console.log(this);
		// this.$store.dispatch('showMessages', {
		// 	url: 'some url'
		// })
	}
})

export default class Notifier extends Vue {}
