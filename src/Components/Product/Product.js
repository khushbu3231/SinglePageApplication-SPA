import React, { Component } from 'react';
import axios from 'axios';



class Product extends Component {
    state = {
        products: [],
        photos: []
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then(response => {
                this.setState({
                    products: response.data
                })
            })
            .catch(error => {
                console.log(error);
            });
        axios.get("https://jsonplaceholder.typicode.com/photos?_limit=5")
            .then(response => {
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
            <div className="container">
                <div className="row">
                    <div className="col">
                        {
                            this.state.photos.map(photo => {
                                return (
                                    <div id="productCarousel" className="carousel slide" style={{ height: "350px", width: "450px", margin: "10px" }} data-ride="carousel" >
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={photo.url} style={{ height: "300px", width: "450px", margin: "0px", padding: "0px" }} class="d-block w-100" alt="Product" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://picsum.photos/200" className="d-block w-100" alt="lady-profile" />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#productCarousel" data-target="#productCarousel" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#productCarousel" data-target="#productCarousel" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col">
                        {
                            this.state.products.map(product => {
                                return (
                                    <div key={product.id} style={{ height: "350px", width: "450px", margin: "10px" }}>
                                        <h3>  {product.title.substring(0, 10)}</h3>
                                        <p> {product.body.substring(0, 500)}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;