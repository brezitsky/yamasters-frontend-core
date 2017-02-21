
interface Selectbox {
	placeholder: string
	items: Array<Object>
	isVisible: boolean
	text: string
	value: string
	textBuffer: string
	firstRendering: boolean
}

interface Selectboxes {
	[index: string]: Selectbox // index is a 'namespace' of selectbox
}

export {Selectboxes};
