import {notifier} from '../../mutation-types';

export const actions = {
	closeNotification(context, event) {
		console.log(context);
		console.log(event);
	},

	async loadMessages(context, payload) {
		// console.log('load messages');
		try {
			switch (true) {
				case (payload.url ? true : false):
					context.commit({
						type: notifier.NEW_MESSAGES,
						messages: await $.ajax({
							url: '/api/messages.json'
						})
					})
					break;

				case (payload.messages ? true : false):
					context.commit({
						type: notifier.NEW_MESSAGES,
						messages: payload.messages
					})
					break;
				default:
					console.log('qdfqf');
			}
		}
		catch (e) {
			console.log(e);
		}
	},

	async showMessages(context, payload) {
		try {
			await context.dispatch('loadMessages', payload)

			let stack = context.getters.newMessages
			// console.log(stack);

			stack.map(message => {

				let counter = context.getters.counter;

				context.commit({
					type: notifier.SHOW_MESSAGE,
					message: message,
					id: counter
				})

				setTimeout(() => {
					context.commit({
						type: notifier.CLOSE_MESSAGE,
						id: counter
					})
				}, message.timeToShow | 3000)

				context.commit(notifier.COUNT_UP);
			})

			context.commit({
				type: notifier.NEW_MESSAGES,
				messages: []
			})
		}
		catch(e) {
			console.log(e);
		}
	},
}
