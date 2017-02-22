interface Json {
	version: number
	public_key: string
	action: string
	amount: number
	currency: string
	description: string
	order_id: string

	language?: string
	sandbox?: string
	recurringbytoken?: string
	server_url?: string
	result_url?: string
	paytypes?: string
	verifycode?: string

	sender_first_name?: string
	sender_last_name?: string
	sender_country_code?: string
	sender_city?: string
	sender_address?: string
	sender_postal_code?: string

	subscribe?: string
	subscribe_date_start?: string
	subscribe_periodicity?: string

	letter_of_credit?: string
	letter_of_credit_date?: string

	product_url?: string
	product_category?: string
	product_name?: string
	product_description?: string
	expired_date?: string
	info?: string
	customer?: string
	dae?: string
	split_rules?: string
}

interface Liqpay {
	json: Json
	data: string
	signature: string
}

interface Liqpayes {
	[index: string]: Liqpay // index is a 'namespace' of selectbox
}

export {Liqpayes};
