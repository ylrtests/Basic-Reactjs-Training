import React, { Component } from 'react';
import Note from './Note'

class Board extends Component{

    constructor(props){
        super(props);

        this.state = {
            notes: [
                {
                    id: 33,
                    note: "Call Lisa"
                },
                {
                    id:34,
                    note: "Email John"
                }
            ]
        }

        this.eachNote = this.eachNote.bind(this);
    }

    eachNote(note,i){
        return(
            <Note key={note.id}
                  id={note.id}>

                  {note.note}
                  {/* //Todo lo que va dentro de las etiquetas se considera props.children */}
            </Note>
        )
    }

    render(){
        return(
            <div className="board">
                {this.state.notes.map(this.eachNote)}

            </div>
        );
    }
}

export default Board;