import React, { Component } from 'react'
import axios from 'axios';
import FileBase64 from 'react-file-base64';

export default class CreateProducts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productName : "", 
            quantity : "", 
            originalTitle : "", 
            productPrice : "", 
            marketPrice : "", 
            brandName : "", 
            warrantYear : "", 
            version : "", 
            description : "", 
            coverImage : "", 
            availability : "", 
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
        const{productName, quantity,coverImage,originalTitle,productPrice,description,marketPrice,brandName,warrantYear,version,availability} = this.state;
        const data = {
            productName:productName,
            quantity:quantity, 
            originalTitle:originalTitle,
            productPrice:productPrice,      
            marketPrice:marketPrice,
            brandName:brandName,
            warrantYear:warrantYear,
            version:version,
            description:description,
            coverImage:coverImage,
            availability:availability,
        }
        console.log(data);

        axios.post("/save", data).then((res) => {
            if (res.data.success) {
                this.setState({
                    productName : "", 
                    quantity : "", 
                    originalTitle : "", 
                    productPrice : "", 
                    marketPrice : "", 
                    brandName : "", 
                    warrantYear : "", 
                    version : "", 
                    description : "", 
                    coverImage : "", 
                    availability : "", 
                })
            }
        })
    }

    render() {
        return (

            <div align="center">
            <div className="card shadow mb-8 w-50" style={{background: "#FFFFFF"}}>
            <div className="card-header py-3">
            <div class="card-header" style={{background: "#E3E4FA"}}><h2>Create New Product</h2></div>
            <br/> <form className="row g-3" >
        
            <div className="col-md-6">
            <label style={{marginBottom:'5px'}} className="form-label"  Required="required"> Product Name </label>
            <input type="text" className="form-control" name="productName" placeholder="Enter Product Name" Required = "required"
                value={this.state.productName}
                onChange={this.handleInputChange} />
            </div>
    
            <div className="col-md-6">
            <label style={{marginBottom:'5px'}} className="form-label">Quantity </label>
            <input type="number" className="form-control" name="quantity" placeholder="Enter Quantity" Required = "required" 
                value={this.state.quantity } 
                onChange={this.handleInputChange} />
            </div>
        
            <div className="col-md-6">
            <label style={{marginBottom:'5px'}} className="form-label">Original Title</label>
            <input type="text" className="form-control" name="originalTitle" placeholder="Enter Original Title" value={this.state.originalTitle}
                onChange={this.handleInputChange}/>
            </div>
    
            <div className="col-md-6">
            <label style={{marginBottom:'5px'}} className="form-label"  Required="required">Product Price</label>
            <input type="number" className="form-control" name="productPrice" placeholder="Enter Product Price" Required = "required" value={this.state.productPrice}
                onChange={this.handleInputChange}/>
            </div>

            <div className="col-md-6">
            <label style={{marginBottom:'5px'}} className="form-label"  Required="required">Market Price</label>
            <input type="number"className="form-control" name="marketPrice" placeholder="Enter Market Price" Required = "required" value={this.state.marketPrice}
                onChange={this.handleInputChange}/>
            </div>

            <div className="col-md-6">
            <label style={{marginBottom:'5px'}} className="form-label">Brand Name</label>
            <input type="text" className="form-control" name="brandName" placeholder="Enter Brand Name"  Required = "required" value={this.state.brandName}
                onChange={this.handleInputChange}/>
            </div>

            <div className="col-md-6">
            <label style={{marginBottom:'5px'}} className="form-label">Warrant Year</label>
            <select className="form-control" name="warrantYear" placeholder="Enter Warrant Year" value={this.state.warrantYear}
                onChange={this.handleInputChange} required>
                <option value="">Enter Warrant Year</option>
                <option value="No Warranty">No Warranty</option>
                <option value="6 Month">6 Month</option>
                <option value="8 Month">8 Month</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                
            </select>
            </div>

            <div className="col-md-6">
            <label style={{marginBottom:'5px'}} className="form-label">Version</label>
            <input type="text" className="form-control" name="version" placeholder="Enter version" value={this.state.version}
                onChange={this.handleInputChange}/>
            </div>

            <div class="mb-3">
            <label style={{marginBottom:'5px'}} className="form-label">Description</label>
            <textarea type="text"className="form-control" name="description" placeholder="Enter Description" value={this.state.description}
                onChange={this.handleInputChange} maxLength ="1000"required/>
            </div>

            <div class="mb-3">
            <label style={{marginBottom:'5px'}} className="form-label">Availability</label>
            <select className="form-control" name="availability"  value={this.state.availability}
                onChange={this.handleInputChange} maxLength ="1000" required>
                <option value="">Enter Availability</option>
                <option value="yes">In Stock</option>
                <option value="no">Out Of Stock</option>
            </select>
            </div>

            <div>
            <FileBase64 type="file" name="coverImage" multiple={ false } onDone={({ base64 }) => this.setState({ coverImage: base64 })}required/>
            </div>
   
            <button className="btn btn-primary" type="submit" style={{marginBottom:'5px'}} onClick={this.onSubmit}>
                &nbsp; Save
            </button>
        </form>
        </div>
        </div>
        </div>

        )
    }

}