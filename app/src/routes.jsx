import React from 'react'
import {Route} from 'react-router-dom'
import Pingpong from './pingpong/Pingpong'
import Index from './main/Index'
import ArticleList from './articles/articles.page.list'
import Counter from './counter/Counter'

const routes = (
	<div>
		<Route exact path="/" component={Index} />
		<Route path="/list" component={ArticleList} />
		<Route path="/pingpong" component={Pingpong} />
		<Route path="/counter" component={Counter} />
	</div>
)

export default routes