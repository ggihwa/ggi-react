import React , {PureComponent} from 'react'
import '../styles/footer.scss'

class Footer2 extends PureComponent {
  constructor(){
    super();
  }

  componentWillUpdate(){
  	console.log('up')
  }

	render(){
		return <div className="footer">footer {this.props.a}</div>
	}
}

const Footer = (props) => {
	console.log('render Footer')
	return <div className="footer">footer {props.a}</div>
}

export default Footer