import React, { Component } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import RefreshIcon from '@material-ui/icons/Refresh';
// import IconButton from '@material-ui/core/IconButton';
// import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
// import Button from '@material-ui/core/Button';
import {saveAs}  from 'file-saver';

toast.configure()

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.generateReport = this.generateReport.bind(this);

        this.state = {
            products: []
        };
    }

    //Retrieve Product
    componentDidMount() {
        this.retrieveProducts();
    }

    retrieveProducts() {
        axios.get("http://localhost:8070/products/displayProducts").then((res) => {
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
        axios.delete(`http://localhost:8070/product/delete/${id}`).then((res) => {
            toast.success('Product Deleted Successfully',{position:toast.POSITION.TOP_CENTER});
            this.retrieveProducts();
        })
    }

    //search functions
    filterData(products, searchKey){
        const result = products.filter((product) =>
            product.productName.toLowerCase().includes(searchKey)||
            product.productCategory.toLowerCase().includes(searchKey)||
            product.availability.toLowerCase().includes(searchKey)
        )
        this.setState({products: result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8070/products/displayProducts").then((res) => {
            if (res.data.success) {
                this.filterData(res.data.existingProducts,searchKey);
            }
        });
    }

    //generate report
    async generateReport() {
    const obj = {products: this.state.products }
    await axios.post('http://localhost:8070/generateproductreport', obj, { responseType: 'arraybuffer', headers: { Accept: 'application/pdf', }, }).then((res) => {
        toast.success('Report Generated',{position:toast.POSITION.TOP_CENTER});
   // alert('Report Generated')
    
    console.log(res)
    console.log(res.data)
    
    const pdfBlog = new Blob([res.data], { type: 'application/pdf' });
    saveAs(pdfBlog, 'Products.pdf');
     
      }).catch((err) => {
        console.log(err.message) 
      })  
      console.log(obj) 
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-lg-9 mt-2 mb-2'>
                    
                    <h2>All Products</h2>
                
                    </div>
                    <div className='col-lg-3 mt-2 mb-2'>
                    <input className='form-control'
                        type="search"
                        placeholder='search'
                        name="searchQuery"
                        onChange={this.handleSearchArea}>

                    </input>
                </div>
                </div>

                <br/>

                <div className='row'>
                <div className='col-lg-9 mt-2 mb-2'>
                
                <button className="btn btn-success"> <a href="/save" 
                style={{textDecoration:'none', color:'white'}}>Create Product</a></button>

                </div>
                <div className='col-lg-3 mt-2 mb-2'>

                <button className="btn btn-info" type="button"
                style={{textDecoration:'none',color:'white'}} 
                onClick={this.generateReport}>Generate Report</button>

                </div>
                </div>
                
                <br/><br/>
                
                <font size="2">
                <table className="table">
                
                    <thead>
                        <tr bgcolor="#A0CFEC">
                            <th scope="col">ID</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Product Category</th>
                            <th scope="col">Availability</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.products.map((products, index) => (
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>
                            <a href={`/dis/${products._id}`} style = {{textDecoration:'none'}}> 
                            {products.productName}
                            </a>
                        </td>
                        <td>{products.quantity}</td>
                        <td>{products.productCategory}</td>
                        <td>{products.availability}</td>
                        <td>{products.price}</td>
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
                </font>

            </div>
        )
    }
}