import React from 'react'
import {Route} from 'react-router-dom'
import App from './containers/App'
import List from './containers/List'
import ReduxExample from './containers/ReduxExample'
import Render from './containers/Render'

const routes = (
	<div>
		<Route exact path="/" component={App} />
		<Route path="/list" component={List} />
		<Route path="/redux" component={ReduxExample} />
		<Route path="/study-render" component={Render} />
	</div>
)

export default routes