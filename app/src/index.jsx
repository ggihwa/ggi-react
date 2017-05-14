import React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import reducers from './reducers'
import routes from './routes'
import epics from './epics'

const middleware = createEpicMiddleware(epics)
const history = createBrowserHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
		reducers,
		composeEnhancers(applyMiddleware(middleware))
)

//console.log(store.getState())
//const unsubscribe = store.subscribe(()=> console.log(store.getState()))
//store.dispatch(actions.increment())
//store.dispatch(actions.increment())
//store.dispatch(actions.increment())
//store.dispatch(actions.setColor([200,200,200]))
//unsubscribe()
//store.dispatch(actions.increment())

render(
	<Provider store={store}>
	<Router history={history}>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/list">List</Link></li>
				<li><Link to="/redux">Redux</Link></li>
				<li><Link to="/study-render">Study Render</Link></li>
			</ul>
			{routes}
		</div>
	</Router>
	</Provider>,
	document.getElementById('root')
)