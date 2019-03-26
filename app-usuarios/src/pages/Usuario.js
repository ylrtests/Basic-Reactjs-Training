import React, { Component } from 'react';
import Card from './../components/Card/Card';
import ModalAlbum from './../components/ModalAlbum/ModalAlbum';
import axios from 'axios';


class Usuario extends Component {

    url = "https://jsonplaceholder.typicode.com";

    constructor(props) {

        super(props);

        this.state = {
            usuarios: [],
            albumes: [],
            modalAlbum: false,
            userId: null

        };

        this.consultarUsuarios = this.consultarUsuarios.bind(this);
        this.mostrarUsuarios = this.mostrarUsuarios.bind(this);
        this.mostrarModalAlbum = this.mostrarModalAlbum.bind(this);
        this.getUsuarioById = this.getUsuarioById.bind(this);
    }

    componentWillMount() {
        this.consultarUsuarios();
    }

    consultarUsuarios() {
        axios.get(this.url + '/users')
            .then(response => {
                this.setState({
                    usuarios: response.data
                });
            })
            .catch(error => {
                console.log("Error => " + error);
            });
    }


    mostrarUsuarios(usuario) {
        return (
            // <Card key = {usuario.id} name = {usuario.name}>
            <Card key={usuario.id}
                mostrarModalAlbum={this.mostrarModalAlbum}
                {...usuario} />
        );
    }

    mostrarModalAlbum(id) {

        console.log("Albumes del usuario con id: => " + id);
        axios.get(this.url + '/albums?userId=' + id)
            .then(response => {
                console.log(response.data);
                this.setState({
                    modalAlbum: true,
                    albumes: response.data,
                    userId: response.data[0].userId
                });

            })
            .catch(error => {
                console.log("Error Usuario@mostrarModalAlbum=> " + error);
            });
    }

    getUsuarioById(idUser) {
        var usuario = this.state.usuarios.find(item => item.id === idUser);
        return (usuario);
    }

    
    render() {
        return (
            <div>
                <h1 className="text-center">Usuario</h1>
                <p>Versión de React: {React.version}</p>
                <div className="row">

                    <ModalAlbum modal={this.state.modalAlbum}
                        albumes={this.state.albumes}
                        userId={this.state.userId}
                        getUsuarioById={this.getUsuarioById}
                    >

                    </ModalAlbum>


                    {this.state.usuarios.map(this.mostrarUsuarios)}

                </div>
            </div>
        );
    }
}

export default Usuario;