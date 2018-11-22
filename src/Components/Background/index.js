import React from 'react'
import './Background.css'
import PropTypes from 'prop-types';

const Background = (props) => {
	const { bg } = props;
	const style = {
		backgroundImage: bg
	}
	return (
		<div className='w-100 h-100 moved d-flex flex-column justify-content-between' style={style}>
			{props.children}
		</div>
	)
}

Background.propTypes = {
	name: PropTypes.string
}

Background.defaultProps = {
	bg : "url(./bg.jpg)"
}

export default Background