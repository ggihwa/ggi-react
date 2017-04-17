import 'rxjs'
import * as types2 from './PingpongActions'

const pingEpic = action$ =>
	action$.ofType(types2.PING)
		.debounceTime(1000)
		.mapTo({type:types2.PONG})

export default pingEpic
