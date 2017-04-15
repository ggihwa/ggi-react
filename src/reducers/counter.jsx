import * as types from '../actions/ActionTypes'

const initialState = {
	dummy: 'dummy',
	dumbObject:{
		d:0,
		u:1,
		m:2,
		b:3
	}, // {...state, dumbObject:{...state.dumbObject, u:0}
	number: 0
}

export default function counter(state = initialState, action){
	switch(action.type){
		case types.INCREMENT:
			return { ...state, number: state.number +1 }
		case types.DECREMENT:
			return {...state, number: state.number -1 }
		default:
			return state
	}
}