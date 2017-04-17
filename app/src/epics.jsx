import {combineEpics} from 'redux-observable'
import pingpongEpic from './pingpong/PingpongEpic'
import articlesEpic from './articles/articles._epics'

const rootEpic = combineEpics(
	pingpongEpic,
	articlesEpic
)

export default rootEpic