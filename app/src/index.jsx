import React from 'react'
import {render} from 'react-dom'

import {BrowserRouter as Router, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

import routes from './routes'

render(
	<Router history={history}>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/list">List</Link></li>
			</ul>
			{routes}
		</div>
	</Router>,
	document.getElementById('root')
)