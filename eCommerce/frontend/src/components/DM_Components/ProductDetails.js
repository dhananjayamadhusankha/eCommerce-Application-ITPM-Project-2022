import React, { Component } from 'react'
import axios from 'axios';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: {}
        };
    }

    componentDidMount(){
        const id = this.props.match.param.id;
        
        axios.get(`/products/${id}`).then((res) => {
            if(res.data.success) {
                this.setState({
                    products:res.data.products
                });

                console.log(this.state.products);
            }
        });
    }

    render() {
        return (
            <div>
                Crete Product
            </div>
        )
    }
    
        // const {productName, quantity, originalTitle, productPrice, marketPrice, 
        //     brandName, warrantYear, version, description, coverImage, availability, 
        //     averageRating, offerPrice} = this.state.products;
        
      
            // <div style={{marginTop:'20px'}}>
            // <h2>{productName}</h2>

            // <hr />

            // <dl className="raw">
            //     <dt className="col-sm-3">Quantity</dt>
            //     <dd className="col-sm-9">{quantity}</dd>

            //     <dt className="col-sm-3">Original Title</dt>
            //     <dd className="col-sm-9">{originalTitle}</dd>

            //     <dt className="col-sm-3">Product Price</dt>
            //     <dd className="col-sm-9">{productPrice}</dd>

            //     <dt className="col-sm-3">MarketPrice</dt>
            //     <dd className="col-sm-9">{marketPrice}</dd>

            //     <dt className="col-sm-3">Brand Name</dt>
            //     <dd className="col-sm-9">{brandName}</dd>

            //     <dt className="col-sm-3">Warrant Year</dt>
            //     <dd className="col-sm-9">{warrantYear}</dd>

            //     <dt className="col-sm-3">Version</dt>
            //     <dd className="col-sm-9">{version}</dd>

            //     <dt className="col-sm-3">description</dt>
            //     <dd className="col-sm-9">{description}</dd>

            //     <dt className="col-sm-3">coverImage</dt>
            //     <dd className="col-sm-9">{coverImage}</dd>

            //     {/* <dt className="col-sm-3">Availability</dt>
            //     <dt className="col-sm-9">{availability}</dt> */}

            //     <dt className="col-sm-3">Average Rating</dt>
            //     <dt className="col-sm-9">{averageRating}</dt>

            //     <dt className="col-sm-3">Offer Price</dt>
            //     <dt className="col-sm-9">{offerPrice}</dt>

            // </dl>

            // </div>


}