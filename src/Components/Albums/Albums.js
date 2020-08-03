import React, { Component } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './albums.css'

class Albums extends Component {
    state = {
        albums: [],
        photos: []
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/albums?_limit=6")
            .then(response => {
                this.setState({
                    albums: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
        axios.get("https://jsonplaceholder.typicode.com/photos?_limit=5")
            .then(response => {
               // console.log(response.data)
                this.setState({
                    photos: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="container albums">
                {
                    this.state.albums.map(album => {
                        return (
                            <div className='card albums' style={{ display: "inline-block" }}>
                                <div className="card-header ">
                                    {album.title}
                                </div>
                                <Carousel className="card-body">
                                    {
                                        this.state.photos.map(photo => {
                                            return (
                                                <Carousel.Item>
                                                    <img src={photo.url} style={{ height: "200px", width: "350px" }}/>
                                                </Carousel.Item>
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Albums;