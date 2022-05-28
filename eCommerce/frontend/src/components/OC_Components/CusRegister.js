import React, { useState } from 'react';
import axios from 'axios';
// import FileBase64 from 'react-file-base64';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function CusRegister (){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd1, setPassword1] = useState("");
    const [pwd2, setPassword2] = useState("");

    const sendData = async (e) => {
        e.preventDefault();

        let newCustomer = {
            name : name,
            email : email,
            psw : pwd1,
        }

        if (pwd1 === pwd2) { 
            axios.post("http://localhost:8070/customer/signup",newCustomer)
            .then(()=>{
                //alert("Registration Success")
                toast.success('Registration Success',{position:toast.POSITION.TOP_CENTER});
                window.location = "/login"
            }).catch((err)=>{
                toast.warning('Customer account already exists. Please check your Email.',{position:toast.POSITION.TOP_CENTER});;
            })
            }else{
                //alert("Password dismatch")
                toast.warning('Password dismatch',{position:toast.POSITION.TOP_CENTER});
            }

            setName("");
            setEmail("");
            setPassword1("");
            setPassword2("");
    }

        return (
            <div>
            {/* <!-- Register Form Card Starts --> */}
            <div className="container mb-5">
                <div className="card mx-auto mt-5 pb-3 shadow rounded" style={{width:'25rem'}}>
                <div className="card-body">
                    <h4 className="card-title">Register</h4>
                    {/* <!-- Register Form Start --> */}
                    <form className="needs-validation" autocomplete="off" action="#/" method="post" name="form" onSubmit={sendData} novalidate>
                    
                    <div className="form-group">
                        <label for="userName">Your name: </label>
                        <input type="text" className="form-control" placeholder="Ganguly Tech" minlength="10"
                        onChange={(e) => setName(e.target.value)} required/>
                        <div className="valid-feedback">
                        <i className="far text-success fa-thumbs-up"></i> OK
                        </div>
                        <div className="invalid-feedback">
                        <i className="fas text-danger fa-exclamation-triangle"></i> Some error in your name.
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="userEmail">Email: </label>
                        <input type="email" className="form-control" placeholder="abc@abc.com"
                        aria-describedby="emailHelp" 
                        pattern="(?![.-])((?![.-][.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
                        inputMode="email" 
                        onChange={(e) => setEmail(e.target.value)} required/>
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
                        <input type="password" className="form-control" placeholder="******"
                        aria-describedby="passwordHelp" minlength="6"
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$" 
                        onChange={(e) => setPassword1(e.target.value)} required/>
                        <small id="passwordHelp" className="form-text text-muted"><i className="fas text-primary fa-info"></i> Password must be at least 6 characters.</small>
                        <div className="valid-feedback">
                        <i className="far text-success fa-thumbs-up"></i> OK
                        </div>
                        <div className="invalid-feedback">
                        <i className="fas text-danger fa-exclamation-triangle"></i> Some error in password.
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="userPassword2">Password again: </label>
                        <input type="password" className="form-control" placeholder="******"
                        aria-describedby="passwordHelp2" minlength="6"
                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$" 
                        onChange={(e) => setPassword2(e.target.value)} required/>
                        <small id="passwordHelp2" className="form-text text-muted"><i className="fas text-primary fa-info"></i> Password must match the above.</small>
                        <div className="valid-feedback">
                        <i className="far text-success fa-thumbs-up"></i> OK
                        </div>
                        <div className="invalid-feedback">
                        <i className="fas text-danger fa-exclamation-triangle"></i> Some error in re-type password.
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 shadow btn-sm rounded">Register</button>
                    </form> 
                    {/* <!-- Register Form Ends --> */}

                    {/* <!-- OR Seperator --> */}
                    <hr className="hr-text" data-content="OR"/>

                    {/* <!-- Create account button --> */}
                    <p className="text-center">Already have an account? <a href="/login" style = {{textDecoration:'none'}}>
                        Sign in <i className="fas fa-caret-right"></i></a></p>
                    <a href="#/" className="btn btn-outline-success btn-sm w-100 mt-2">
                    <i className="fab fa-google"></i> Sign in with Google
                    </a>
                    <a href="#/" className="btn btn-outline-primary btn-sm w-100 mt-2">
                    <i className="fab fa-facebook-square"></i> Sign in with Facebook
                    </a>
                </div>
                </div>
            </div> 
            {/* <!-- Register Form Card Ends --> */}

            </div>
        )
}

export default CusRegister;