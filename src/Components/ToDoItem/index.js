import React from 'react'
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap'
import './ToDoItem.css'
import Emoji from '../Emoji'

const Icon = ({ toggle, ...props }) => {
	return (
		<div onClick={toggle} className='icon'>
			<span role='img'>
				{props.children}
			</span>
		</div>
	)
}

Icon.propTypes = {
	toggle: PropTypes.func
}

///////////////////////////////////////////////////

const Check = (props) => {
	return (
		<Icon {...props} >
			<Emoji> ✔ </Emoji> 
		</Icon>
	)
}

const Cross = (props) => {
	return (
		<Icon {...props} >
			<Emoji> ❌ </Emoji>
		</Icon>
	)
}

//////////////////////////////////////////////////

const ToDoItem = ({ isCompleted, text, date, toggle }) => {
	const color = isCompleted ? 'success' :'danger' ;
	return (
		<Alert className='d-flex text-center w-100 justify-content-between' color={color}>
			<p> { date } </p>
			<h3> { text } </h3>
			{isCompleted ? <Cross toggle={ toggle }/> : <Check toggle={toggle}/>}
		</Alert>
 	)	
}

ToDoItem.propTypes = {
	isCompleted: PropTypes.bool.isRequired,
	text: PropTypes.string,
	date: PropTypes.string,
	toggle: PropTypes.func
}


export default ToDoItem