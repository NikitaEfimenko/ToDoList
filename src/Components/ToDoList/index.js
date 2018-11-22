import React from 'react'
import PropTypes from 'prop-types';
import ToDoItem from '../ToDoItem'
import FlipMove from 'react-flip-move'
import './ToDoList.css'

const ToDoList = ({list, toggle, duration, easing}) => {
	return (
	<ul className='do_list'>
		<FlipMove duration={duration} className='w-100' easing="ease-out">
			{list.map((task,i) => (
			 <li  className='' key={task.id} > 
			 <ToDoItem 
						toggle={() => toggle(task.id, task.isCompleted)}
						isCompleted={task.isCompleted}
						text={task.text}
						date={task.date}/>
			</li>
		))}
		</FlipMove>
	</ul>
 	)	
}

ToDoList.propTypes = {
	list: PropTypes.array.isRequired,
	toggle: PropTypes.func,
	duration: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	easing: PropTypes.oneOf(['ease-out', 'linear'])
}

ToDoList.defaultProps = {
	duration: 300,
	easing: 'ease-out'
}


export default ToDoList