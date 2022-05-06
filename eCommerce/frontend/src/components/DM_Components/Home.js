import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    //Retrieve Product
    componentDidMount() {
        this.retrieveProducts();
    }

    retrieveProducts() {
        axios.get("/products/displayProducts").then((res) => {
            if (res.data.success) {
                this.setState({
                    products: res.data.existingProducts
                });
                console.log(this.state.products);
            }
        });
    }

    //delete function
    onDelete = (id) => {
        axios.delete(`/product/delete/${id}`).then((res) => {
            alert('Deleted Product Successfully');
            this.retrieveProducts();
        })
    }

    //search functions
    filterData(products, searchKey){
        const result = products.filter((product) =>
            product.productName.toLowerCase().includes(searchKey)||
            product.quantity.toString().toLowerCase().includes(searchKey)||
            product.originalTitle.toLowerCase().includes(searchKey)
        )
        this.setState({products: result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("/products/displayProducts").then((res) => {
            if (res.data.success) {
                this.filterData(res.data.existingProducts,searchKey);
            }
        });
    }

    render() {
        return (
            <div>
                <div className="col-lg-3 mt-2 mb-2">
                    <input className="form-control" type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}></input>
                </div>
                <h2>All Products</h2>
                <font size="2">
                <table className="table">
                
                    <thead>
                        <tr bgcolor="#A0CFEC">
                            <th scope="col">ID</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Original Title</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.products.map((products, index) => (
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>
                            <a href={`/display/${products._id}`} style = {{textDecoration:'none'}}> 
                            {products.productName}
                            </a>
                        </td>
                        <td>{products.quantity}</td>
                        <td>{products.originalTitle}</td>
                        <td>
                            <a className="btn btn-warning" href={`/update/${products._id}`}>
                                <i className="far fa-edit"></i>&nbsp;
                            </a>
                            &nbsp;
                            <a className="btn btn-danger" onClick={()=>this.onDelete(products._id)}>
                                <i className="far fa-trash-alt"></i>&nbsp;
                            </a>
                        </td>
                    </tr>
                ))}
                    </tbody>
                </table>

                <button className="btn btn-success"> <a href="/save" style={{textDecoration:'none', color:'white'}}>Create Product</a></button>
                </font>

            </div>
        )
    }
}