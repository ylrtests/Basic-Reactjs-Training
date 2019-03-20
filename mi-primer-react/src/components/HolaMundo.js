import React, { Component } from 'react';

class HolaMundo extends Component {

 /*No es necesario llamar el constructor para usar "props"*/

    render(){
        return(
            <div>
                 
                <h1>Hola Mundo- {this.props.nombre}</h1>
            </div>
        );
    }
}

export default HolaMundo;

