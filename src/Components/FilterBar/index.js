import React from 'react'
import { Button, Container } from 'reactstrap'
import PropTypes from 'prop-types';
import Emoji from '../Emoji'


const FilterBar = (props) => {
  	const { filterCb } = props;
	return (
		<Container className='d-flex justify-content-around align-items-center'>
				<Button onClick={()=> filterCb(0)} color='success'>
					<Emoji>👍</Emoji>
				</Button>
				<Button onClick={()=> filterCb(1)} color='danger'>
					<Emoji>👎</Emoji>
				</Button>
				<Button  onClick={()=> filterCb(2)} color='dark'>
					<Emoji>✌</Emoji>
				</Button>
  		</Container>
		)
} 
FilterBar.propTypes = {
	filterCb: PropTypes.func.isRequired
}

export default FilterBar 