import React, { useState } from 'react';
import axios from 'axios';
// import FileBase64 from 'react-file-base64';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const CusUpdate = ({
    cusName,
    cusEmail
}) => {
    const [name, setName] = useState(cusName);
    const [email, setEmail] = useState(cusEmail);

    const updateCusProfile = async (e) => {
        e.preventDefault()
        const config = {
            headers: {
                Authorization: localStorage.getItem("Authorization"),
            },
        };
        const updateObject = {
            name: name,
            email: email,
        }
        await axios.put('http://localhost:8070/customer/update', updateObject, config)
        .then((res) => {
            toast.success('Your details updated successfully',{position:toast.POSITION.TOP_CENTER});
            window.setTimeout(function() {
            window.location = "/customer/dashboard"
        }, 2000);

        })
        .catch((err) => {
            console.log(err.message);
            toast.alert('Successfully Not Updated..!',{position:toast.POSITION.TOP_CENTER});
        })
    }

        return (
            <div>
            {/* <!-- Register Form Card Starts --> */}
            <div className="container mb-5">
                <div className="card mx-auto mt-5 pb-3 shadow rounded" style={{width:'25rem'}}>
                <div className="card-body">
                    <h4 className="card-title">Register</h4>
                    {/* <!-- Register Form Start --> */}
                    <form className="needs-validation" autocomplete="off" action="#/" method="post" name="form" onSubmit={updateCusProfile} novalidate>
                    
                    <div className="form-group">
                        <label for="userName">Your name: </label>
                        <input type="text" name="name" className="form-control" placeholder="Ganguly Tech" id="userName" minlength="10"
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
                        <input type="email" name="email" className="form-control" placeholder="abc@abc.com" id="userEmail"
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

                   
                    <button type="submit" className="btn btn-primary w-100 shadow btn-sm rounded">Update</button>
                    </form> 
                    {/* <!-- Register Form Ends --> */}

                    {/* <!-- OR Seperator --> */}
                    <hr className="hr-text" data-content="OR"/>

                    
                    <a href="#/" className="btn btn-outline-success btn-sm w-100 mt-2">
                    <i className="fab fa-google"></i> Delete Profile
                    </a>
                    
                </div>
                </div>
            </div> 
            {/* <!-- Register Form Card Ends --> */}

            </div>
        );
};

export default CusUpdate;