import React, { Component } from 'react';
import { Button, Modal, Table, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Album from './../Album/Album'

class ModalALbum extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: this.props.modal,
            albumes: [],
            usuario: []
        };

        this.toggle = this.toggle.bind(this);
        this.mostrarAlbumes = this.mostrarAlbumes.bind(this);
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
                {...album} />
        );
    }



    render() {
        let modalHeader;

        if (this.state.usuario) {
            modalHeader = <ModalHeader toggle={this.toggle}>{this.state.usuario.name}'s albums </ModalHeader>
        }
        else {
            modalHeader = <ModalHeader toggle={this.toggle}> </ModalHeader>
        }

        return (

            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    {modalHeader}
                    <ModalBody>
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
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

}

export default ModalALbum; 