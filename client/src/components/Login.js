import React, {Component} from 'react';
import axios from 'axios';



export default class CreateCustomer extends Component {


    constructor(props){
        super(props);
        this.state={

            
            NIC:"",
            email:"",
            
            NICError:"",
            emailError:""
        }
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
            
            let NICError="";
            let emailError="";

            
            if(!this.state.NIC){
                NICError = "NIC number is required";
            }

            if(!this.state.email.includes("@")){
                emailError="invalid email";
            }
            if(emailError ||  NICError){
                this.setState({emailError,  NICError});
                return false;
            } 
            
            return true;
    };


    onSubmit = (e) =>{    


        e.preventDefault();
        
        const isValid=this.validate();
        if(isValid){
                    const {NIC,email} = this.state;

                const data ={
                    
                    NIC:NIC,
                    email:email
                }
                console.log(data);
                

            axios.post("/customer/login",data).then((res)=>{
                if(res.data.success){
                    this.props.handleSuccessfulAuth(res.data);
                   
                    /*this.setState(
                        {
                            name:"",
                            age:"",
                            gender:"",
                            address:"",
                            NIC:"",
                            email:""
                        }
                    )*/
                }
            })
        }

                   
    }    
    

    render() {
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 front-weight-normal"> Login</h1>
                <form className="needs-validation" >
                

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

                
                <button type="submit" className="btn btn-success" style={{marginTop:'15px'}} onClick={this.onSubmit} >
                <i className="far fa-check-square"></i>
                <a  href="/">
                &nbsp; Login</a>
                </button>

                
            </form>
        </div>
        )
    }
}