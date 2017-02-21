interface Message {
	type: string
	header: string
	body: string
	timeToShow?: number,
	id: number,
}

interface State {
	oldMessages: Array<Message>,
	newMessages: Array<Message>,
	currentMessages: Array<Message>,
	counter: number
}

export const state: State = {
	counter: 0,
	oldMessages: [],
	newMessages: [],
	currentMessages: []
}
