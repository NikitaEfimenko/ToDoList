import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import "./App.css"
import ToDoList from '../ToDoList'
import FilterBar from '../FilterBar'
import Background from '../Background'
import {Input, Button, Container, Label} from 'reactstrap'

class App extends Component{
	constructor(props){
		super(props)
		this.add = this.add.bind(this)
		this._input = null;
		this.toggle = this.toggle.bind(this)
		this.filterCb = this.filterCb.bind(this)
		this.visibilityFilterCb = this.visibilityFilterCb.bind(this)
	}

	state = {
		list : [],
		visibilityFilter: 2
	}

	add(){
		const el = findDOMNode(this._input);
		const value = el.value
		if (value) {
			this.setState({
				list: [...this.state.list,
					{
						text: value,
						date:new Date().toDateString(),
						isCompleted: false,
						id:Date.now()
					}
				]
			})
			el.value = '';
		}	
	}

	filterCb(state){
		this.setState({
			visibilityFilter: state
		})
	}

	toggle(i, state){
		if (state === true){
			this.setState({
				list: this.state.list.filter(item => item.id !== i)
			})
		}
		else{
			this.setState({
				list: this.state.list.map(item => (item.id === i) ?  {...item, isCompleted: !item.isCompleted}: item)
			})
		}
	}

	visibilityFilterCb(){
		const state = this.state.visibilityFilter;
		switch (state) {
			case 0:
				return (item) => item.isCompleted 
			case 1:
				return (item) => !item.isCompleted 
			default:
				return () => true
		}
	}


	render(){
		const visibleList = this.state.list.filter(this.visibilityFilterCb())
		return(
			<Background>
				<Container className='h-25 w-75'>
					<Container className='h-100 d-flex justify-content-center align-items-end'>
						<Label className='display-4'> Список дел </Label>
					</Container>
					<Container className='d-flex'>
						<Input ref={(el) => this._input = el} placeholder='Введите задачу'/>
						<Button color='danger'  onClick={this.add}> Добавить </Button>
					</Container>
					<hr className='big-hr'/>
					<FilterBar filterCb={this.filterCb} />
					<hr className='big-hr'/>
					<ToDoList duration={550} easing="ease-out" list={visibleList} toggle={this.toggle} />
				</Container>
			</Background>
		)
	}
}

export default App