import React, {Component} from 'react'
import Control from '../components/control'
import Value from '../components/value'
import {connect} from 'react-redux'
import *  as actions from '../actions'

class ReduxExample extends Component {
	constructor(){
		super()
		this.setRandomColor = this.setRandomColor.bind(this)
	}

	setRandomColor(){
		const color = [
			Math.floor((Math.random()*55)+200),
			Math.floor((Math.random()*55)+200),
			Math.floor((Math.random()*55)+200)
		]

		this.props.handleSetColor(color)
	}

	render(){
		const color = this.props.color;
		const style={
			background:`rgb(${color[0]},${color[1]},${color[2]})`
		}
		return (
			<div style={style}>
				<Value number={this.props.number} />
				<Control onPlus={this.props.handleIncrement}
				         onSubtract={this.props.handleDecrement}
				         onRandomizeColor={this.setRandomColor}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		number: state.counter.number,
		color: state.ui.color
	}
}

const mapDispatchToProps = (dispatch) =>{
	//return bindActionCreators(actions, dispatch)
	return{
		handleIncrement: () => {dispatch(actions.increment())},
		handleDecrement: () => {dispatch(actions.decrement())},
		handleSetColor: (color) => {dispatch(actions.setColor(color))},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample)