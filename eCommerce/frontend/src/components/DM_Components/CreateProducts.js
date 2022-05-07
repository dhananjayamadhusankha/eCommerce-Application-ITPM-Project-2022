import React, { Component } from 'react'
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default class CreateProducts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productName : "", 
            topic : "", 
            quantity : "",
            description : "", 
            productCategory : "", 
            availability : "",
            price : "", 
            image : "",
        }
    }

    handleInputChange = (e)=>{
        const{name,value} = e.target;
        this.setState({
           ...this.state,
           [name]:value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault();
        const{productName, topic, quantity, description, productCategory, availability, price, image} = this.state;
            
        const data = {
            productName:productName,
            topic:topic, 
            quantity:quantity,
            description:description,
            productCategory:productCategory,
            availability:availability,
            price:price, 
            image:image,
        }
        console.log(data);

        axios.post("/products/save", data).then((res) => {
            if (res.data.success) {
                toast.success('Product Added Successfully',{position:toast.POSITION.TOP_CENTER});
                this.setState({
                    productName : "", 
                    topic : "", 
                    quantity : "", 
                    description : "", 
                    productCategory : "",
                    availability : "", 
                    price : "", 
                    image : "",
                })
            }
        })
    }

    render() {
        return (

            <div align="center">
            <div className="card shadow rounded mb-8 w-50 bg-white">
            <div className="card-header py-3 ">
            <div className="card-header text-white" style={{background: "#000"}}><h2>Create New Product</h2></div>
            <br/> <form className="row g-3" >
        
            <div className="mb-3">
            <label style={{marginBottom:'5px'}} className="form-label"  Required="required"> Product Name </label>
            <input type="text" className="form-control" name="productName" placeholder="Enter Product Name" Required = "required"
                value={this.state.productName}
                onChange={this.handleInputChange} />
            </div>

            <div className="mb-3">
            <label style={{marginBottom:'5px'}} className="form-label">Topic</label>
            <input type="text" className="form-control" name="topic" placeholder="Enter Original Title" value={this.state.topic}
                onChange={this.handleInputChange}/>
            </div>
    
            <div className="col-md-6">
            <label style={{marginBottom:'5px'}} className="form-label">Quantity </label>
            <input type="number" className="form-control" name="quantity" placeholder="Enter Quantity" Required = "required" 
                value={this.state.quantity } 
                onChange={this.handleInputChange} />
            </div>
    
            <div className="col-md-6">
            <label style={{marginBottom:'5px'}} className="form-label"  Required="required">Price</label>
            <input type="number" className="form-control" name="price" placeholder="Enter Product Price" Required = "required" value={this.state.price}
                onChange={this.handleInputChange}/>
            </div>

            <div class="col-md-6">
            <label style={{marginBottom:'5px'}} className="form-label">Availability</label>
            <select className="form-control" name="availability"  value={this.state.availability}
                onChange={this.handleInputChange} maxLength ="1000" required>
                <option value="">Enter Availability</option>
                <option value="yes">In Stock</option>
                <option value="no">Out Of Stock</option>
            </select>
            </div>

            <div className="col-md-6">
          <label style={{marginBottom:'5px'}} className="form-label">Category</label>
          <select className="form-control" name="productCategory" placeholder="Enter Product Category" value={this.state.productCategory}
              onChange={this.handleInputChange} required>
                 <option value="">Enter Product Category</option>
                 <option value="6 Month">Books</option>
                 <option value="8 Month">Computers</option>
                 <option value="1 Year">Electronics</option>
                 <option value="Men's Fashion">Men's Fashion</option>
                 <option value="Women's Fashion">Women's Fashion</option>
                 <option value="Others">Others</option>
                 
          </select>
          </div>

            <div class="mb-3">
            <label style={{marginBottom:'5px'}} className="form-label">Description</label>
            <textarea type="text"className="form-control" name="description" placeholder="Enter Description" value={this.state.description}
                onChange={this.handleInputChange} maxLength ="1000"required/>
            </div>

            <div>
            <FileBase64 type="file" name="image" multiple={ false } onDone={({ base64 }) => this.setState({ image: base64 })}/>
            </div>
   
            <button className="btn btn-dark font-weight-bold" type="submit" style={{marginBottom:'5px'}} onClick={this.onSubmit}>
                &nbsp; SAVE
            </button>
        </form>
        </div>
        </div>
        </div>

        )
    }

}