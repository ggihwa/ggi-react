import React, { Component } from 'react'
import Title from '../common/title'
import Footer from '../common/footer'

class App extends Component {
	constructor() {
		super();
		this.state = {title: 'TEST'}
	}

	handleSelectTitle(title) {
		console.log(this)
		this.setState({title: 'click123' + title})
	}

	render() {
		return (
			<div>
				<Title title={this.state.title}
				       onHandleSelectTitle={this.handleSelectTitle.bind(this)}>
				</Title>
				<div>test1</div>
				<Footer></Footer>
			</div>
		)
	}
}

export default App