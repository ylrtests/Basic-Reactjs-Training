import React, { Component } from 'react';

class HolaMundo extends Component {

    constructor(props){
        super();
    }

    render(){
        return(
            <div>
                <h1>Hola Mundo- {this.props.nombre}</h1>
            </div>
        );
    }
}

export default HolaMundo;

