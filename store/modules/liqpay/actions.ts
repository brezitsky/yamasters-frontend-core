import {liqpay as type} from 'VUEX/mutation-types';

export const actions = {
	async generateLiqpayStrings(context, namespace) {
		// console.log(context);

		let json = context.getters.globalLiqpayState[namespace].json;
		// console.log(json);

		let response = await $.ajax({
			method: 'post',
			url: '//192.168.0.125/php-api/liqpay.php',
			data: {
				json_string: JSON.stringify(json)
			}
		})

		let strings = JSON.parse(response);

		// console.log(strings);

		context.commit({
			type: type.DATA,
			namespace: namespace,
			data: strings.data
		})

		context.commit({
			type: type.SIGNATURE,
			namespace: namespace,
			signature: strings.signature
		})
	}
}
