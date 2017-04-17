import React from 'react'
import {Route} from 'react-router-dom'
import App from './containers/App'
import List from './containers/List'
import Pingpong from './containers/Pingpong'
import ReduxExample from './containers/ReduxExample'

const routes = (
	<div>
		<Route exact path="/" component={App} />
		<Route path="/list" component={List} />
		<Route path="/pingpong" component={Pingpong} />
		<Route path="/redux" component={ReduxExample} />
	</div>
)

export default routes