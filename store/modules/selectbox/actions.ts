import {selectbox} from 'VUEX/mutation-types';

export const actions = {

	add(context) {

	},

	onFieldClick(context, namespace) {
		// console.log(`onFieldClick, namespace: "${namespace}"`);
		context.commit({
			type: selectbox.OPEN,
			namespace: namespace
		})
	},

	onOptionClick(context, data) {
		// console.log(data);
		// console.log(context);

		context.commit({
			type: selectbox.TEXT,
			namespace: data.namespace,
			text: data.item.text
		})

		context.commit({
			type: selectbox.VALUE,
			namespace: data.namespace,
			value: data.item.value
		})

		context.commit({
			type: selectbox.CLOSE,
			namespace: data.namespace
		})
	},

	asyncGetSelectbox(context, namespace) {
		$.ajax({
			url: '/api/selectbox.json',
			error(err) {
				// console.log(err);
				context.dispatch('showMessages', {
					messages: [
						{
							header: 'Error',
							body: `
								<div><b>Status:</b> ${err.status}</div>
								<div><b>Message:</b> ${err.responseText}</div>
							`,
							type: 'error',
							timeToShow: 3000
						}
					]
				})
			},
			success(data) {
				// console.log(data);
				// console.log(namespace);
				// console.log(context);

				context.commit({
					type: selectbox.FIRST_RENDERING,
					namespace: namespace,
					flag: true
				})

				context.commit({
					type: selectbox.SET,
					namespace: namespace,
					response: data
				})
			}
		})
	},

	asyncSendSelectbox(context) {

	}
}
