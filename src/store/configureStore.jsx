import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import reducer from '../reducers'
import { pingEpic } from '../epics'

const epicMiddleware = createEpicMiddleware(pingEpic)

export default createStore(
	reducer,
	applyMiddleware(epicMiddleware)
)