import React,{Component} from 'react';
import './Foto.css'


import { CardImg } from 'reactstrap';


class Foto extends Component{
    
    render(){
        return(
            <CardImg className= "col-md-4" src={this.props.thumbnailUrl} alt="Card image cap" />
            );
    }
}

export default Foto;