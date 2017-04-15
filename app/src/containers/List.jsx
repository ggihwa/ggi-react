import React, { Component } from 'react'
import Title from '../components/title'
import Footer from '../components/footer'

class List extends Component {
	constructor() {
		super();
		this.state = {title: 'List'}
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
				<div>List</div>
				<Footer></Footer>
			</div>
		)
	}
}

export default List