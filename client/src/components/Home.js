import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {

  constructor(props){
    super(props);

   
    this.state={
      customers:[]
    };
  }

  componentDidMount(){ 
    this.retrieveCustomers(); 
  }

  retrieveCustomers(){
    axios.get("http://localhost:8000/customers").then(res =>{
      if(res.data.success){
        this.setState({
          customers:res.data.existingCustomers
        });
        console.log(this.state.customers)
      }
    });
  }

  onDelete = (id) =>{
    axios.delete(`http://localhost:8000/customer/delete/${id}`).then((res)=>{
      alert("Deleted Successfully");
      this.retrieveCustomers();
    })
  }

  filterData(customers,searchkey){

    const result = customers.filter((customer) =>
    customer.name.includes(searchkey) ||
    customer.NIC.includes(searchkey) ||
    customer.address.includes(searchkey) 
    )

    this.setState({customers:result})
  }

  handleSearchArea =(e) =>{
    const searchkey=e.currentTarget.value;

    axios.get("http://localhost:8000/customers").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingCustomers, searchkey)
      }
    });
  }

  

  render() {
    return(
      
      <div className="container">
        <div className='row'>
          <div className='col-lg-9 mt-2 mb-2'>
        
        <h2>All Customers</h2>
       
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
        
          <button className="btn btn-success"><a href="/add" 
          style={{textDecoration:'none',color:'white'}}>Create New Customer</a></button>

        </div>
        <div className='col-lg-3 mt-2 mb-2'>

          <button className="btn btn-success"><a href="/report" 
          style={{textDecoration:'none',color:'white'}}>Customer Summery Report</a></button>

        </div>
        </div>
        
        <br/><br/>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Country</th>
              <th scope="col">NIC</th>
              <th scope="col">Email</th> 
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customers,index)=>(
                <tr key={index}>
               
                  <th scope="row">{index+1}</th>
                  <td>
                      <a href={`/customer/${customers._id}`} style={{textDecoration:'none'}}>
                      {customers.name}
                      </a>
                  </td>
                  <td>{customers.age}</td>
                  <td>{customers.gender}</td>
                  <td>{customers.address}</td>
                  <td>{customers.NIC}</td>
                  <td>{customers.email}</td>
                  <td>
                    <a className="btn btn-warning" href={`/edit/${customers._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(customers._id)}>
                      <i className="fas fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
            ))}

          </tbody>

        </table>

        

        </div>        
            
    )
  }
}