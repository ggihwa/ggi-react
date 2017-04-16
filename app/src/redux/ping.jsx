export const PING = 'PING'
export const PONG = 'PONG'

const initialState = {
	isPinging : false
}

export default function reducer (state=initialState, action={}){
	switch(action.type){
		case PING:
			return {...state, isPinging:true }
		case PONG:
			return {...state, isPinging:false }
		default:
			return {state}
	}
}

export function ping(){
	return {
		type: PING
	}
}

export function pong(){
	return {
		type: PONG
	}
}