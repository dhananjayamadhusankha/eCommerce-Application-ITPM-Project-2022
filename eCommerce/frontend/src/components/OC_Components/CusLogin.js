import React, { Component } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default class CusLogin extends Component {

    constructor(props) {
        super(props);
        this.userLoginSubmit = this.userLoginSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)

        this.state = {
            email: "",
            pwd: "",
            token: "",
            open: false
        }
    }

    async userLoginSubmit(e) {
        e.preventDefault()
        const userData = {
            email: this.state.email,
            pwd: this.state.pwd
    }

    

    await axios.post("http://localhost:8070/customer/login",userData)
    .then((res) => {
        this.setState({
        token: res.data.token
        })
        localStorage.setItem("Authorization", res.data.token)
        window.location = "/";
    })
    .catch((err) => {
        console.log(err)
        this.setState({open: true})
        toast.alert("Loging error",{position:toast.POSITION.TOP_CENTER});
    })
    }

    handleClose(reason) {
    if (reason === 'clickaway') {
        return;
    }
    this.setState({open: false})
    };
  
    render() {
        return (
            <div>
                {/* <!-- Login Form Card Starts --> */}
                <div className="container mb-5">
                    <div className="card mx-auto mt-5 pb-3 shadow rounded" style={{width:'25rem'}}>
                    <div className="card-body">
                        <h4 className="card-title">Login</h4>
                        {/* <!-- Login Form Start --> */}
                        <form className="needs-validation" autocomplete="off" onSubmit={this.userLoginSubmit} novalidate>
                        
                        <div className="form-group">
                            <label for="userEmail">Email: </label>
                            <input type="email" name="email" className="form-control" placeholder="abc@abc.com" id="userEmail"
                            aria-describedby="emailHelp" onChange={e => this.setState({email:e.target.value})} required/>
                            <small id="emailHelp" className="form-text text-muted"><i className="fas text-primary fa-info"></i> We'll never share your email with anyone else.</small>
                            <div className="valid-feedback">
                            <i className="far text-success fa-thumbs-up"></i> OK
                            </div>
                            <div className="invalid-feedback">
                            <i className="fas text-danger fa-exclamation-triangle"></i> Some error in email.
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="userPassword">Password: </label>
                            <input type="password" className="form-control" placeholder="******" name="pwd" id="pwd"
                            aria-describedby="passwordHelp" onChange={e => this.setState({pwd:e.target.value})} required/>
                            <small id="passwordHelp" className="form-text text-muted"><i className="fas text-primary fa-info"></i> Password must be at least 6 characters.</small>
                            <div className="valid-feedback">
                            <i className="far text-success fa-thumbs-up"></i> OK
                            </div>
                            <div className="invalid-feedback">
                            <i className="fas text-danger fa-exclamation-triangle"></i> Some error in password.
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 shadow btn-sm rounded">Sign in</button>
                        </form> 
                        {/* <!-- Login Form Ends --> */}

                        {/* <!-- OR Seperator --> */}
                        <hr className="hr-text" data-content="New to Exclsv?"/>

                        {/* <!-- Create account button --> */}
                        <a href="/customer/register" className="btn btn-dark btn-sm w-100 mt-2">Create your Exclsv account</a>
                        
                        <a href="#/" className="btn btn-outline-success btn-sm w-100 mt-2">
                        <i className="fab fa-google"></i> Sign in with Google
                        </a>
                        
                        <a href="#/" className="btn btn-outline-primary btn-sm w-100 mt-2">
                        <i className="fab fa-facebook-square"></i> Sign in with Facebook
                        </a>
                    </div>
                    </div>
                </div> 
                {/* <!-- Login Form Card Ends --> */}
            </div>
        )
    }
}