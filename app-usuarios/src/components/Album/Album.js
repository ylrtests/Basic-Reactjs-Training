import React,{Component} from 'react';
import { Button } from 'reactstrap';

class Album extends Component{
    render() {
        return (
            <tr>
                {/* <th scope="row">{this.props.id}</th> */}
                <td>{this.props.title}</td>
                <td><Button onClick={()=>{this.props.abrirGaleria(this.props.id)}} color="success">Ver fotos</Button>{' '}</td>
            </tr>
        );
      }
}

export default Album;