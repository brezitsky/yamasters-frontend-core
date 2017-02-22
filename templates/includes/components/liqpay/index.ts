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
	<div class='liqpay'>
		<a :href='"https://www.liqpay.com/api/3/checkout?data="+ data +"&signature="+ signature' target="_blank">Pay</a>
	</div>
	`,

	computed: {
		data() {
			return this.$store.getters.globalLiqpayState[this['namespace']].data
		},
		signature() {
			return this.$store.getters.globalLiqpayState[this['namespace']].signature
		}
	},

	beforeMount() {
		this.$store.dispatch('generateLiqpayStrings', this['namespace']);
	}
})

export default class Liqpay extends Vue {

}
