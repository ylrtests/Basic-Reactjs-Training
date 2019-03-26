import React, { Component } from 'react';
import axios from 'axios';
import Foto from './Foto/Foto'

class Galeria extends Component {

    url = "https://jsonplaceholder.typicode.com";

    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
        this.renderPhotos = this.renderPhotos.bind(this);

    }

    componentWillMount() {
        axios.get(this.url + '/photos?albumId=' + this.props.idAlbum)
            .then(response => {
                this.setState({
                    photos: response.data
                })
            })
            .catch(error => {
                console.log("Error => " + error);
            });
    }

    renderPhotos(photo) {
        return (
            
                <Foto key={photo.id}
                    title={photo.title}
                    url={photo.url}
                    thumbnailUrl={photo.thumbnailUrl}
                >
                </Foto>
        );
    }


    render() {

        return (
            <div>
                <div className="col-md-12" >
                    {this.state.photos.map(this.renderPhotos)}
                </div>
            </div>
        );
    }
}

export default Galeria;