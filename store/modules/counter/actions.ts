import {counter as type} from 'VUEX/mutation-types';
import {notifier} from 'VUEX/mutation-types'

let timeout = 0, interval = 0;

export const actions = {
	prevMouseDown(context, namespace) {
		timeout = setTimeout(() => {
			interval = setInterval(() => {
				context.commit({
					type: type.DECR,
					namespace: namespace
				})
			}, 100)
		}, 300)
	},

	prevMouseUp(context, namespace) {
		// console.log(timeout, interval);
		clearTimeout(timeout)

		if(interval) {
			clearInterval(interval)
		}
		else {
			context.commit({
				type: type.DECR,
				namespace: namespace
			})
		}

		timeout = 0;
		interval = 0;
	},

	nextMouseDown(context, namespace) {
		timeout = setTimeout(() => {
			interval = setInterval(() => {
				context.commit({
					type: type.INCR,
					namespace: namespace
				})
			}, 100)
		}, 300)
	},

	nextMouseUp(context, namespace) {
		// console.log(timeout, interval);
		clearTimeout(timeout)

		if(interval) {
			clearInterval(interval)
		}
		else {
			context.commit({
				type: type.INCR,
				namespace: namespace
			})
		}

		timeout = 0;
		interval = 0;
	}
}
