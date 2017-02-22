import './style.scss';

import * as Vue from 'vue'
import Component from 'vue-class-component'

import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

import {selectbox} from 'VUEX/mutation-types';


@Component({
	props: ['namespace'],

	template: `
	<div :data-yam-selectbox='namespace' ref='container'>
		<button @click='asyncGetSelectbox(namespace)'>async load</button>
		<div :class='{choosed: true, visible: isVisible}'>
			<input type='hidden' :name='namespace' v-model='value' />
			<input type='text' :placeholder='placeholder' v-model='keyword' @click='onFieldClick(namespace)' />
		</div>
		<ul :class='{visible: isVisible}'>
			<li v-for='item in filtered' @click='onOptionClick({item: item, namespace: namespace})' :class='{selected: item.value == value}'>
				{{item.text}}
			</li>
		</ul>
	</div>`,

	computed: {
		keyword: {
			get(): string {
				return this.$store.getters.globalSelectboxesState[this['namespace']].text
			},
			set(string) {
				this.$store.commit({
					type: selectbox.TEXT,
					namespace: this['namespace'],
					text: string
				})
			}
		},
		value: {
			get(): string {
				return this.$store.getters.globalSelectboxesState[this['namespace']].value
			},
			set(val) {
				this.$store.commit({
					type: selectbox.VALUE,
					namespace: this['namespace'],
					value: val
				})
			}
		},
		firstRendering: {
			get(): boolean {
				return this.$store.getters.globalSelectboxesState[this['namespace']].firstRendering
			},
			set(flag: boolean) {
				this.$store.commit({
					type: selectbox.FIRST_RENDERING,
					namespace: this['namespace'],
					flag: flag
				})
			}
		},
		...mapState({
			placeholder(state) {
				return state['selectboxes'][this['namespace']] ?
				state['selectboxes'][this['namespace']].placeholder : '';
			},
			isVisible(state) {
				return state['selectboxes'][this['namespace']] ?
				state['selectboxes'][this['namespace']].isVisible : false;
			},
			filtered(state) {
				let it = state['selectboxes'][this['namespace']];
				let text = it.text;
				// console.log(text);

				return it.items.filter(item => {
					if(item.selected && this['firstRendering']) {
						// console.log(this);
						// console.log(this);
						this['value'] = item.value;
						this['keyword'] = item.text;
					}
					if(item.text.search(text) != -1) {
						return item
					}
				});
			}
		})
	},

	methods: mapActions([
		'onFieldClick',
		'onOptionClick',
		'asyncGetSelectbox'
	]),

	updated() {
		this['firstRendering'] = false;
	},

	mounted() {

		this['firstRendering'] = false;

		document.addEventListener('click', e => {
			if(!$(e.target).closest(this.$refs['container']).length && this['isVisible']) {

				this.$store.commit({
					type: selectbox.CLOSE,
					namespace: this['namespace']
				})
			}
		})
	}
})

export default class Selectbox extends Vue {

}
