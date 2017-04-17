import * as types from './PingpongActions'

const initialState = {
	isPinging : false
}

export default function reducer (state=initialState, action={}){
	switch(action.type){
		case types.PING:
			return {...state, isPinging:true }
		case types.PONG:
			return {...state, isPinging:false }
		default:
			return state
	}
}

export function ping(){
	return {
		type: types.PING
	}
}

export function pong(){
	return {
		type: types.PONG
	}
}