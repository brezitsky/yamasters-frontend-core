import './style.scss'

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
	<div class="yam-counter">
		<div
			:class='{control: true, prev: true, disactive: isMinimum}'
			@mousedown='prevMouseDown(namespace)'
			@mouseup='prevMouseUp(namespace)'
		></div>
		<div
			:class='{control: true, next: true, disactive: isMaximum}'
			@mousedown='nextMouseDown(namespace)'
			@mouseup='nextMouseUp(namespace)'
		></div>
		<input type="text" :value='userInput' />
		<input type="hidden" name='namespace' :value='value' />
	</div>
	`,

	computed: {
		isMinimum() {
			let min = this.$store.getters.globalCounterState[this['namespace']].min;
			let value = this.$store.getters.globalCounterState[this['namespace']].value;
			return value == min ? true : false;
		},
		isMaximum() {
			let max = this.$store.getters.globalCounterState[this['namespace']].max;
			let value = this.$store.getters.globalCounterState[this['namespace']].value;
			return value == max ? true : false;
		},
		value: {
			get() {
				return this.$store.getters.globalCounterState[this['namespace']].value;
			}
		},
		userInput: {
			get() {
				let afterDot = this.$store.getters.globalCounterState[this['namespace']].afterDot;
				let value = this.$store.getters.globalCounterState[this['namespace']].value;
				let separator = this.$store.getters.globalCounterState[this['namespace']].separator;

				// console.log(value, afterDot, separator);
				return String(value.toFixed(afterDot)).replace('.', separator);
			}
		}
	},

	methods: {
		...mapActions([
			'prevMouseDown',
			'prevMouseUp',
			'nextMouseDown',
			'nextMouseUp'
		])
	}
})

export default class Counter extends Vue {}
