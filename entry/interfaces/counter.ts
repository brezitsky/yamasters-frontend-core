
interface Counter {
	min: number
	max: number
	step: number
	afterDot: number
	value: number
	userInput: string
	separator: string
}

interface Counters {
	[index: string]: Counter // index is a 'namespace' of selectbox
}

export {Counters};
