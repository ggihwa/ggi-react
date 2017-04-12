import React from 'react'

const Title = ({title,onHandleSelectTitle}) => (
	<div onClick={onHandleSelectTitle.bind(this,title)}>{title}</div>
)

export default Title