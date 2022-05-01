import React, { Component } from 'react'
import axios from 'axios';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post:{}
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
                Post Details
            </div>
        )
    }

}