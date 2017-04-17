import {combineReducers} from 'redux'
import counter from './counter/_reducer'
import ui from './counter/_reducer-ui'
import articles from './articles/articles._reducers'
import pingpong from './pingpong/PingpongReducer'

const reducers = combineReducers({
	counter, ui, articles,
	pingpong
})

export default reducers