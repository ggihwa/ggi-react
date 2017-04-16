import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ping, pong} from '../redux/ping'

class Pingpong extends Component {
	constructor(){
		super()
	}

	render(){
		const ping = this.props.isPinging;
		return (
			<div>
				isPinging: ${ping.toString()}
				<button onClick={this.props.handlePing}>click</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isPinging: state.ping.isPinging
	}
}

const mapDispatchToProps = (dispatch) =>{
	//return bindActionCreators(actions, dispatch)
	return{
		handlePing: () => {dispatch(ping())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Pingpong)