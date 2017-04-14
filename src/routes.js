import React from 'react'
import {Route} from 'react-router-dom'
import App from './containers/App'
import List from './containers/List'

export default (
	<div>
		<Route exact path="/" component={App} />
		<Route path="/list" component={List} />
	</div>
)