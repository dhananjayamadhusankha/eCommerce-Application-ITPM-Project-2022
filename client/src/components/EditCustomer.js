import React, {Component} from 'react';
import axios from 'axios';

export default class EditCustomer extends Component {

    constructor(props){
        super(props);
        this.state={

            name:"",
            age:"",
            gender:"",
            address:"",
            NIC:"",
            email:""
        }
    }

    handlenameChange=(e) =>{       

        this.setState({
            name: e.target.value,
            
        })
    }
    handleageChange=(e) =>{       

        this.setState({
            age: e.target.value,
            
        })
    }
    handlegenderChange=(e) =>{       

        this.setState({
            gender: e.target.value,
            
        })
    }
    handleaddressChange=(e) =>{       

        this.setState({
            address: e.target.value,
            
        })
    }
    handleNICChange=(e) =>{       

        this.setState({
            NIC: e.target.value,
            
        })
    }
    handleemailChange=(e) =>{       

        this.setState({
            email: e.target.value,
            
        })
    }



    onSubmit = (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;

        const {name,age,gender,address,NIC,email} = this.state;

        const data ={
            name:name,
            age:age,
            gender:gender,
            address:address,
            NIC:NIC,
            email:email
        }

        console.log(data)

      axios.put(`/customer/update/${id}`,data).then((res)=>{
          if(res.data.success){
              alert("Customer Updated Successfully")
              this.setState(
                  {
                    name:"",
                    age:"",
                    gender:"",
                    address:"",
                    NIC:"",
                    email:""
                  }
              )
          }
      })

    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/customer/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    name:res.data.customer.name,
                    age:res.data.customer.age,
                    gender:res.data.customer.gender,
                    address:res.data.customer.address,
                    NIC:res.data.customer.NIC,
                    email:res.data.customer.email

                });
                console.log(this.state.customer);
            }
        });
    }

    render() {
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 front-weight-normal"> Edit Customer</h1>
                <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:'5px'}} > Name </label>                                       
                    <input type="text" 
                    className="form-control"
                    id="name" 
                    placeholder="Enter Your Name"
                    value={this.state.name}
                    onChange={this.handlenameChange}></input>
                </div>

                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:'5px'}} > Age </label>                                       
                    <input type="number" 
                    className="form-control" 
                    id="age" 
                    placeholder="Enter Your Age"
                    value={this.state.age}
                    onChange={this.handleageChange}></input>
                </div>

                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:'5px'}} > Gender </label>                                       
                    <input type="text" 
                    className="form-control" 
                    id="gender" 
                    placeholder="Enter Your Gender"
                    value={this.state.gender}
                    onChange={this.handlegenderChange}></input>
                </div>
                
                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:'5px'}} > Country </label>                                       
                    <input type="text" 
                    className="form-control" 
                    id="address" 
                    placeholder="Enter Your Address"
                    value={this.state.address}
                    onChange={this.handleaddressChange}></input>
                </div>

                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:'5px'}} > NIC </label>                                       
                    <input type="text" 
                    className="form-control" 
                    id="NIC" 
                    placeholder="Enter Your NIC Number"
                    value={this.state.NIC}
                    onChange={this.handleNICChange}></input>
                </div>


                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:'5px'}} > Email </label>                                       
                    <input type="text" className="form-control" id="email" placeholder="Enter Your Email"
                    value={this.state.email}
                    onChange={this.handleemailChange}></input>
                </div>

                
                <button type="submit" className="btn btn-success" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                <i className="far fa-check-square"></i>
                &nbsp; Update
                </button>
            </form>
        </div>
        )
    }
}