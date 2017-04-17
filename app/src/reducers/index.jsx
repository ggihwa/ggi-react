import {combineReducers} from 'redux'
import counter from './counter'
import ui from './ui'
import articles from './articles'
import ping from '../redux/ping'

const reducers = combineReducers({
	counter, ui, articles, ping
})

export default reducers