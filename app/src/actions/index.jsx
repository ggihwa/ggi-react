import * as types from './ActionTypes'

export function increment(){
	return {
		type: types.INCREMENT
	}
}

export function decrement(){
	return {
		type: types.DECREMENT
	}
}

export function setColor(color){
	return {
		type: types.SET_COLOR,
		color
	}
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