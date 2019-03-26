import React, { Component } from 'react';
import { Button, Modal, Table, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Album from './../Album/Album'
import Galeria from './../Galeria/Galeria'

class ModalALbum extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: this.props.modal,
            albumes: [],
            usuario: [],
            flagTabla: true,
            flagGaleria: false,
            idAlbum: null
        };

        this.toggle = this.toggle.bind(this);
        this.mostrarAlbumes = this.mostrarAlbumes.bind(this);
        this.abrirGaleria = this.abrirGaleria.bind(this);
        this.volverVerTabla = this.volverVerTabla.bind(this);
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            modal: nextProps.modal,
            albumes: nextProps.albumes,
            usuario: nextProps.getUsuarioById(nextProps.userId)
        });

    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    mostrarAlbumes(album) {
        return (
            <Album key={album.id}
                   abrirGaleria={this.abrirGaleria}
                {...album} />
        );
    }

    abrirGaleria(idAlbum){
        console.log(idAlbum)
        this.setState(prevState => ({
            flagTabla: !prevState.flagTabla,
            flagGaleria: !prevState.flagGaleria,
            idAlbum: idAlbum
        }));
    }

    volverVerTabla(){
        this.setState(prevState => ({
            flagTabla: !prevState.flagTabla,
            flagGaleria: !prevState.flagGaleria
        }));
    }



    render() {
        let modalHeader;
        let tablaAlbumes;
        let galeriaFotos, botonVolverGaleria;

        
        //Condicional para Tabla de albumes
        if (this.state.flagTabla) {
            //Condicional para Header
            if (this.state.usuario) {
                modalHeader =
                    <ModalHeader toggle={this.toggle}>{this.state.usuario.name}'s albums</ModalHeader>
            }

            tablaAlbumes =
                <Table>
                    <thead>
                        <tr>
                            {/* <th>#</th> */}
                            <th>Título del álbum</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.albumes.map(this.mostrarAlbumes)}
                    </tbody>
                </Table>
        }

        //Condicional para galeria de fotos
        if (this.state.flagGaleria) {
            //Condicional para Header
            if (this.state.usuario) {
                
                let galleryTitle = this.state.albumes.find(album => album.id === this.state.idAlbum);
                console.log(galleryTitle);
                modalHeader =
                    <ModalHeader toggle={this.toggle}>{galleryTitle.title}</ModalHeader>
            }
            galeriaFotos= <Galeria idAlbum={this.state.idAlbum}
                          ></Galeria>
            botonVolverGaleria = <Button color="warning" onClick={this.volverVerTabla}>Volver</Button>
        }

        return (

            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    {modalHeader}
                    <ModalBody>
                        {tablaAlbumes}
                        {galeriaFotos}
                    </ModalBody>
                    <ModalFooter>
                        {botonVolverGaleria}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

}

export default ModalALbum; 