import {combineReducers} from 'redux'
import counter from './counter'
import ui from './ui'
import articles from './articles'

const reducers = combineReducers({
	counter, ui, articles
})

export default reducers