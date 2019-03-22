import React, { Component } from 'react';
import Note from './Note';
import { FaPlus } from 'react-icons/fa'

class Board extends Component{

    constructor(props){
        super(props);

        this.state = {
            notes: []
        }

        this.eachNote = this.eachNote.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this)
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
    }

    componentWillMount(){
        var self = this;
        if(this.props.count){
            //Template string usando las tildes al revés
            fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
                 .then((response) => response.json())
                 .then(function(myJson){

                    console.log(myJson[0].split('. '));

                    myJson[0].split('. ').forEach(
                        //(sentence) => console.log(sentence.substring(0,15))); 
                        (sentence) => self.add(sentence.substring(0,15)));
                 })
        }
    }

    update(newText, id){
        console.log('updating item with id: '+id+'\n'+newText);
        this.setState( (prevState) => ({
            notes: prevState.notes.map(
                note => (note.id !== id) ? note : {...note, note: newText}
            )
        }));
    }

    remove(id){
        console.log('removing id: '+id);
        this.setState( (prevState) => ({
            notes: prevState.notes.filter( note => note.id !== id)
        }));
    }

    add(text){
        this.setState( (prevState) => ({
            notes: [
                ...prevState.notes,
                {
                    id: this.nextId(),
                    note: text
                }
            ]
        }));
    }

    nextId(){
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }

    eachNote(note){
        return(
            <Note key={note.id}
                  id={note.id}
                  cambiarNote={this.update}
                  quitarNote={this.remove}>
                  {note.note}
                  {/* //Todo lo que va dentro de las etiquetas se considera props.children */}
            </Note>
        )
    }

    render(){
        return(
            <div className="board">
                {this.state.notes.map(this.eachNote)}
                
                <button onClick={this.add.bind(null,"new note")}
                        id="add">
                    <FaPlus />        
                </button>
            </div>
        );
    }
}

export default Board;