export const types = {
	REQUEST_ARTICLES : 'REQUEST_ARTICLES',
	RECEIVE_ARTICLES : 'RECEIVE_ARTICLES',
	CANCEL_QUERY : 'CANCEL_QUERY'
}

export const requestArticles = () => ({
	type: types.REQUEST_ARTICLES
})

export const receiveArticles = json => ({
	type: types.RECEIVE_ARTICLES,
	posts: json.hits
})

export const cancelQuery = () =>({
	type: types.CANCEL_QUERY
})