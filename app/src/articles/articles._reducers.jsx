import {types} from './articles._actions'

const initialState = {
	posts: [],
	isFetching: false
}

const articles = (state = initialState, action) => {
	switch(action.type){
		case types.REQUEST_ARTICLES:
			return { ...state, isFetching: true }
		case types.RECEIVE_ARTICLES:
			return {...state, posts: action.posts, isFetching: false}
		case types.CANCEL_QUERY:
			return {...state, isFetching: false}
		default:
			return state
	}
}

export default articles