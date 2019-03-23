import React, { Component } from 'react';
import './Card.css';

class Card extends Component {


    render() {
        return (
            <div className="col-md-4">
                <div className="weather-card one">
                    <div className="top">
                        <div className="wrapper">
                            <div className="mynav">
                                <a href="#"><span className="lnr lnr-chevron-left"></span></a>
                                <a href="#"><span className="lnr lnr-cog"></span></a>
                            </div>
                            <h1 className="heading">{this.props.name}</h1>
                            <h3 className="location">{this.props.username}</h3>
                            <p className="temp">
                                <span className="temp-value">{this.props.website}</span>
                            </p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="wrapper">
                            <ul className="forecast">
                                <a href="#"><span className="lnr lnr-chevron-up go-up"></span></a>
                                <li className="active">
                                    <span className="date">{this.props.address.street} - </span>
                                    <span className="temp">{this.props.address.city}</span>
                                </li>
                                <li className="active">
                                    <span className="date">{this.props.company.name} - </span>
                                    <span className="temp">{this.props.company.catchPhrase}</span>
                                    
                                </li>
                                <li className="active">
                                <button onClick={()=>{this.props.mostrarAlbum(this.props.id)}} type="button" className="btn btn-primary btn-block">Ver Álbum</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;