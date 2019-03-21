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
		this.renderDisplay = this.renderDisplay.bind(this);
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
			<div className="note">
				<form onSubmit={this.save} action="">
					<textarea ref={element => this.newText = element}></textarea>
					<button id="save"><FaSave /></button>
				</form>
			</div>
		);
	}

	renderDisplay() {
		return (
			<div className="note">				
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
