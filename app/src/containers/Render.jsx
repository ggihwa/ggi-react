import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ping} from '../redux/ping'
import Footer from '../components/footer'

class Render extends Component {
	constructor(){
		super();
		this.state = {
			a:1,
			b:2
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.setState ({a:this.state.a+1});
	}

	render(){
		const ping = this.props.isPinging;
		return (
			<div>
				isPinging: ${ping.toString()} {this.state.a}
				<button onClick={this.handleClick}>click</button>
				<Footer a={this.state.b}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isPinging: 1
	}
}

const mapDispatchToProps = (dispatch) =>{
	//return bindActionCreators(actions, dispatch)
	return{
		handlePing: () => {dispatch(ping())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Render)