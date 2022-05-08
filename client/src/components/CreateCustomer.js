import React, {Component} from 'react';
import axios from 'axios';



export default class CreateCustomer extends Component {


    constructor(props){
        super(props);
        this.state={

            name:"",
            age:"",
            gender:"",
            address:"",
            NIC:"",
            email:"",
            nameError:"",
            ageError:"",
            genderError:"",
            addressError:"",
            NICError:"",
            emailError:""
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

    validate = () =>{
            let nameError="";
            //let ageError="";
            //let genderError="";
            //let addressError="";
            let NICError="";
            let emailError="";

            if(!this.state.name){
                nameError = "Name is required";
            }
            if(!this.state.NIC){
                NICError = "NIC number is required";
            }

            if(!this.state.email.includes("@")){
                emailError="invalid email";
            }
            if(emailError || nameError || NICError){
                this.setState({emailError, nameError, NICError});
                return false;
            } 
            
            return true;
    };


    onSubmit = (e) =>{    


        e.preventDefault();
        
        const isValid=this.validate();
        if(isValid){
                    const {name,age,gender,address,NIC,email} = this.state;

                const data ={
                    name:name,
                    age:age,
                    gender:gender,
                    address:address,
                    NIC:NIC,
                    email:email
                }
                console.log(data);
                

            axios.post("/customer/save",data).then((res)=>{
                if(res.data.success){
                    alert("Customer Added Successfully")
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

                   
    }    
    

    render() {
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 front-weight-normal"> Create New Customer</h1>
                <form className="needs-validation" >
                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:'5px'}} > Name </label>                                       
                    <input type="text" 
                    className="form-control"                   
                    id="name" 
                    placeholder="Enter Your Name"                    
                    value={this.state.name}
                    onChange={this.handlenameChange}></input>
                    <div style={{ fontSize:12, color:"red"}}>{this.state.nameError}</div>
                </div>

                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:'5px'}} > Age </label>                                       
                    <input type="number" 
                    className="form-control" 
                    id="age" 
                    placeholder="Enter Your Age"
                    pattern='[0-9]'
                    value={this.state.age}
                    onChange={this.handleageChange}></input>
                    <div style={{ fontSize:12, color:"red"}}>{this.state.ageError}</div>
                </div>

                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:'5px'}} > Gender </label>                                       
                    <input type="text" 
                    className="form-control" 
                    id="gender" 
                    placeholder="Enter Your Gender"
                    value={this.state.gender}
                    onChange={this.handlegenderChange}></input>
                    <div style={{ fontSize:12, color:"red"}}>{this.state.genderError}</div>
                </div>
                
                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:'5px'}} > Country </label>                                       
                    <input type="text" 
                    className="form-control" 
                    id="address" 
                    placeholder="Enter Your Address"
                    value={this.state.address}
                    onChange={this.handleaddressChange}></input>
                    <div style={{ fontSize:12, color:"red"}}>{this.state.addressError}</div>
                </div>

                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:'5px'}} > NIC </label>                                       
                    <input type="text" 
                    className="form-control" 
                    id="NIC" 
                    placeholder="Enter Your NIC Number"
                    
                    value={this.state.NIC}
                    onChange={this.handleNICChange}></input>
                    <div style={{ fontSize:12, color:"red"}}>{this.state.NICError}</div>
                </div>


                <div className="form-group" style={{marginBottom:"15px"}}>
                    <label style={{marginBottom:'5px'}} > Email </label>                                       
                    <input type="email" className="form-control" id="email" placeholder="Enter Your Email"
                    
                    value={this.state.email}
                    onChange={this.handleemailChange}></input>
                    <div style={{ fontSize:12, color:"red"}}>{this.state.emailError}</div>
                </div>

                
                <button type="submit" className="btn btn-success" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                <i className="far fa-check-square"></i>
                &nbsp; save
                </button>
            </form>
        </div>
        )
    }
}