import React from 'react'
import {render} from 'react-dom'

//route
import {BrowserRouter as Router, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

import routes from './routes'


//store
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
const store = createStore(reducers)

//
import * as actions from './actions'
//
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
			</ul>
			{routes}
		</div>
	</Router>
	</Provider>,
	document.getElementById('root')
)