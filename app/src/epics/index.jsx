import { ajax } from 'rxjs/observable/dom/ajax'
import 'rxjs'
import { receiveArticles } from '../actions'
import { REQUEST_ARTICLES } from '../actions/ActionTypes'

const rootEpic = action$ =>
	action$.ofType('REQUEST_ARTICLES')
		.debounceTime(5000)
		.mergeMap(action =>
			ajax({
				method: 'GET',
				url: 'https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50',
				crossDomain: true,
				responseType: 'json'
			})
			.map(payload => payload.response)
			.map(json => receiveArticles(json))
			.takeUntil(action$.ofType('CANCEL_QUERY'))
		)

export default rootEpic
