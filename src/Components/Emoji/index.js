import React from 'react'

const Emoji = (props) => {
	return (
		<span role='img'> {props.children} </span>
	)
}

export default Emoji