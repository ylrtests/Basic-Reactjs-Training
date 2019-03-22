import React, { Component } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { FaSave } from 'react-icons/fa'

class Note extends Component {
	
	constructor(props) {
		super(props)

		this.state = {
			editing:false
		}

		this.edit = this.edit.bind(this)
		this.remove = this.remove.bind(this)
		this.save = this.save.bind(this)

		this.renderForm = this.renderForm.bind(this);
		this.renderDisplay = this.renderDisplay.bind(this)
		this.randomBetween = this.randomBetween.bind(this)
	}

	componentWillMount() {
		this.style = {
			right: this.randomBetween(0, window.innerWidth - 150, 'px'),
			top: this.randomBetween(0, window.innerHeight - 150, 'px'),
			transform: `rotate(${this.randomBetween(-25, 25, 'deg')})`
		}
	}

	randomBetween(x, y, s) {
		return x + Math.ceil(Math.random() * (y-x)) + s
	}

	componentDidUpdate() {
		var textArea
		if(this.state.editing) {
			textArea = this.newText
			textArea.focus()
			textArea.select()
		}

	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.props.children !== nextProps.children || this.state !== nextState
		)
	}

	edit() {
		alert('editing note')
		this.setState({
			editing: true
		});
	}
	remove() {
		this.props.quitarNote( this.props.id );
	}

	save(e){
		e.preventDefault();
		this.props.cambiarNote( this.newText.value , this.props.id );
		this.setState({
			editing:false
		});
	}

	renderForm(){
		return(
			<div className="note" style={this.style}>
				<form onSubmit={this.save} action="">
					<textarea ref={element => this.newText = element} defaultValue={this.props.children}></textarea>
					<button id="save"><FaSave /></button>
				</form>
			</div>
		);
	}

	renderDisplay() {
		return (
			<div className="note" style={this.style}>				
				<p>Props.id: {this.props.id}</p>
				<p>Props.children: {this.props.children}</p>
				<span>
					<button id="edit" onClick={this.edit}> <FaEdit /> </button>
					<button id="remove" onClick={this.remove}> <FaTrash /> </button>
				</span>
			</div>
		)
	}

	render(){

		return this.state.editing ? this.renderForm() : this.renderDisplay();

		// if(this.state.editing){
		// 	return this.renderForm();
		// }
		// else{
		// 	return this.renderDisplay();
		// }
	}
}

export default Note
