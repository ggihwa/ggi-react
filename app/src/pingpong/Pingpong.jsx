import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './PingpongReducer'

class Pingpong extends Component {
	constructor(){
		super()
	}

	render(){
		const ping = this.props.isPinging;
		return (
			<div>
				isPinging: {ping.toString()}
				<button onClick={this.props.ping}>click</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {isPinging : state.pingpong.isPinging}
}

const mapDispatchToProps = (dispatch) =>{
	return bindActionCreators(actions, dispatch)
	// return{
	// 	handlePing: () => {dispatch(ping())}
	// }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pingpong)