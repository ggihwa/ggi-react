import 'rxjs'
import { PING, PONG } from '../redux/ping'

const pingEpic = action$ =>
	action$.ofType(PING)
		.debounceTime(1000)
		.mapTo({type:PONG})

export default pingEpic
