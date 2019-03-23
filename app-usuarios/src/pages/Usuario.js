import React,{Component} from 'react';
import Card from './../components/Card/Card'
import axios from 'axios';


class Usuario extends Component{

    url = "https://jsonplaceholder.typicode.com";

    constructor(props){

        super(props);

        this.state = {
            usuarios: []
        }; 

        this.consultarUsuarios = this.consultarUsuarios.bind(this);
        this.mostrarUsuarios = this.mostrarUsuarios.bind(this);
        this.mostrarAlbum = this.mostrarAlbum.bind(this);
    }

    componentWillMount(){
        this.consultarUsuarios();
    }

    consultarUsuarios(){
        axios.get(this.url+'/users')
             .then(response => {
                 this.setState({
                     usuarios: response.data
                 });
                 console.log(this.state.usuarios);
              })
             .catch(error => {
                console.log("Error => "+error);
             });
    }


    mostrarUsuarios(usuario){
        return(
            // <Card key = {usuario.id} name = {usuario.name}>
            <Card key = {usuario.id} 
                 mostrarAlbum = {this.mostrarAlbum}
                {...usuario} />               
        );
    }

    mostrarAlbum(id){
            
            console.log("userId => "+id);
            axios.get(this.url+'/albums?userId='+id)
             .then(response => {
                 console.log(response.data);
              })
             .catch(error => {
                console.log("Error => "+error);
             });
    }

    render(){
        return(
            <div>
                <h1 className="text-center">Usuario</h1>
                <div className="row">
                    {this.state.usuarios.map(this.mostrarUsuarios)}
                </div>
            </div>
        );
    }
}

export default Usuario;