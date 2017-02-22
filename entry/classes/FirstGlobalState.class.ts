import {Selectboxes} from 'INTERFACES/selectbox'
import {Liqpayes} from 'INTERFACES/liqpay'

export default class FirstGlobalState {
	constructor() {

	}

	getGlobalState() {
		window['FirstGlobalState'] = {};

		let components = document.querySelectorAll('[yam-component]')

		// console.log(components);
		if(components.length) {
			for(var i = 0; i < components.length; i++) {
				// console.log(components[i]);

				let nodeName = components[i].nodeName.toLowerCase();
				// console.log(nodeName);

				// set branch for current tag if need
				window['FirstGlobalState'][nodeName] ? true : window['FirstGlobalState'][nodeName] = []
				// console.log(window['FirstGlobalState'][nodeName]);

				let props = components[i].getAttribute('yam-component').split(',');
				// console.log(props);

				let obj = {};
				props.map(prop => {
					obj[prop] = components[i].getAttribute(prop);
				})

				window['FirstGlobalState'][nodeName][i] = obj;
			}

			// console.log('FIRST GLOBAL STATE: ', window['FirstGlobalState']);
		}
		else {
			console.log('There are no yamasters components on page');
		}
	}

	getSelectboxes(): any {
		let state = window['FirstGlobalState']['yam-selectbox'];

		if(state) {
			let normalizedState: Selectboxes = {}

			state.map(item => {
				normalizedState[item.namespace] = {
					placeholder: item.placeholder,
					items: JSON.parse(item.items),
					isVisible: false,
					text: '',
					value: '',
					textBuffer: '',
					firstRendering: true
				};
			})

			return normalizedState;
		}
		else {
			return false;
		}
	}

	getLiqpay(): any {
		let state = window['FirstGlobalState']['yam-liqpay'];
		// console.log(state);

		if(state) {
			let normalizedState: Liqpayes = {}

			state.map(item => {
				normalizedState[item.namespace] = {
					json: JSON.parse(item.json),
					data: '',
					signature: ''
				};
			})

			return normalizedState;
		}
		else {
			return false;
		}
	}
}
