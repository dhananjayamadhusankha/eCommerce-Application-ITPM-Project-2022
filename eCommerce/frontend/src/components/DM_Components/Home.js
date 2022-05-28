import React, { Component } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    refreshPage(){
        window.location.reload();   
       
       }
    generatepdf(){
        window.location.reload();
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

    // //delete function
    onDelete = (id) => {
        if (window.confirm('Are you want to delete this product?'))
        axios.delete(`http://localhost:8070/product/delete/${id}`).then((res) => {
            toast.success('Product Deleted Successfully',{position:toast.POSITION.TOP_CENTER});
            this.retrieveProducts();
            window.location="/productsList";
        })
    }


    //delete function
    // onDelete = (id) => {
    //     axios.delete(`http://localhost:8070/product/delete/${id}`).then((res) => {
    //         toast.success('Product Deleted Successfully',{position:toast.POSITION.TOP_CENTER});
    //         this.retrieveProducts();
    //         // window.location="/productsList";
    //     })
    // }

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
                    
                    <h2 className='fw-bold'>ALL PRODUCTS</h2>
                
                    </div>
                    <div className='col-lg-3 mt-2 mb-2'>
                    <input className='form-control'
                        type="search"
                        placeholder='Search...'
                        name="searchQuery"
                        onChange={this.handleSearchArea}>

                    </input>
                </div>
                </div>

                <br/>

                <div className='row'>
                    <div className='col-lg-9 mt-2 mb-2'>
                        <button className="btn btn-success">
                            <i className="fa-solid fa-square-plus icon-white" style={{textDecoration:'none', color:'white'}} href="/save"></i>  Create Product
                        </button>
                    </div>

                    <div className='col-lg-3 mt-2 mb-2'>
                        <button className="btn btn-secondary" type="button" onClick={this.generateReport}>
                            <i class="fa-solid fa-file-chart-pie"></i>Generate Report
                        </button>
                        &nbsp; &nbsp;

                        <button className="btn btn-warning" type="button" onClick={this.refreshPage}>
                            <i class="fa-solid fa-arrow-rotate-right"></i> Refresh
                        </button><i class=""></i>
                        &nbsp;&nbsp;
                    </div>

                    <div className="col-lg-3 mt-2 mb-2">
                        <form className="dropdwonForm" onSubmit={this.handleSearchArea}>
                            <label style={{ color:'black', fontWeight:700}}>Availibility : </label>
                            <select className="btn btn-primary dropdown-toggle dropdown-toggle-split" onChange={this.handleSearchArea}>
                                <option value="">Choose...</option>
                                <option value="yes">In Stock</option>
                                <option value="no">Out Of Stock</option>
                            </select>
                        </form>
                    </div>
                </div>

                <br/>

                <div className="availblebtn">

                {/* <form  className="dropdwonForm" onSubmit={this.handleSearchArea}>
                    <label style={{fontSize:'20px', color:'white', fontWeight:700}}>Catrgory :</label>
                    <select className="dropDown" onChange={this.handleSearchArea}>
                        <option value="" >..</option>
                        <option value="Books">Books</option>
                        <option value="Computers">Computers</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Men's Fashion">Men's Fashion</option>
                        <option value="Women's Fashion">Women's Fashion</option>
                        <option value="Mobile Phones">Mobile Phones</option>
                        <option value="Sports Outdoors">Sports Outdoors</option>
                        <option value="Home And Kitchen">Home And Kitchen</option>
                        <option value="Digital Music">Digital Music</option>
                        <option value="Others">Others</option>
                    </select>
                </form>
                &nbsp;&nbsp; */}
                
                </div>
                
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
                            <a href={`/display/${products._id}`} style = {{textDecoration:'none'}}> 
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
                            <a className="btn btn-danger" onClick={()=>this.onDelete(products._id)} href="/#">
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