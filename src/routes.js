import React from 'react'
import {Route} from 'react-router-dom'
import App from './containers/App'
import List from './containers/List'
import ReduxExample from './containers/ReduxExample'


export default (
	<div>
		<Route exact path="/" component={ReduxExample} />
		<Route path="/list" component={List} />
	</div>
)