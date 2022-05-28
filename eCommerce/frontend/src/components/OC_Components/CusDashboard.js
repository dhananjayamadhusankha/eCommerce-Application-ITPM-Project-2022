import React, { Component } from 'react';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import axios from 'axios';
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// toast.configure()

export default class AdminDashboard extends Component {

    // const deleteAccount = async () => {
    //     const config = {
    //       headers: {
    //         Authorization: localStorage.getItem("Authorization"),
    //       },
    //     };
    //     if (window.confirm('Are you sure you wish to delete this Account?')) {
    //         await axios.delete('http://localhost:8070/customer/delete', config)
    //         .then((res) => {
    //         toast.success('Your account deleted successfuly',{position:toast.POSITION.TOP_CENTER});
    //             localStorage.removeItem('role')
    //             localStorage.removeItem('Authorization')
    //             window.location="/signup"
    //         })
    //         .catch((err) => {
    //             console.log(err.message)
    //         })
    //     }
    // }

    //    const customerLogout = () => {
    //     if (window.confirm('Are you sure you wish to logout from this Account?')) {
    //   toast.success('Log out successfuly',{position:toast.POSITION.TOP_CENTER});
    //   localStorage.removeItem('role')
    //   localStorage.removeItem('Authorization')
    //   window.location = "/login"
    //     }
    // }

    // if (loading) {
    //     return <div className="d-flex justify-content-center" style={{ paddingTop: 400 }}>
    //        <CircularProgress hidden={false} />
    //     </div>
    //  }
  

    render() {
        return (
            <div>
                {/* <!-- Your Account Starts --> */}
            <div className="container mt-5">
                <h2>Your Account</h2>
                {/* <!-- Account Panel Starts --> */}
                <div className="row">
                <div className="col-md-4">
                    <a href="/productList" className="btn w-100">
                    <div className="card">
                        <div className="card-body">
                        <div className="card-title">
                            <i className="fas fa-2x fa-shopping-bag"></i>
                            <span className="h4"> Your Products</span>
                        </div>
                        <small className="text-muted">Track, return or buy things again.</small>
                        </div>
                    </div>
                    </a>
                </div>

                <div className="col-md-4">
                    <a href="/customer/update" className="btn w-100">
                    <div className="card">
                        <div className="card-body">
                        <div className="card-title">
                            <i className="fas fa-2x fa-key"></i>
                            <span className="h4"> Update Profile</span>
                        </div>
                        <small className="text-muted">Change your password.</small>
                        </div>
                    </div>
                    </a>
                </div>

                <div className="col-md-4">
                    <a href="your_addresses.html" className="btn w-100">
                    <div className="card">
                        <div className="card-body">
                        <div className="card-title">
                            <i className="fas fa-2x fa-map-marked-alt"></i>
                            <span className="h4"> Your Addresses</span>
                        </div>
                        <small className="text-muted">Edit addresses for orders.</small>
                        </div>
                    </div>
                    </a>
                </div>
                </div> 
                {/* <!-- Account Panel Starts --> */}

                <div className="row">
                <div className="col-md-4">
                    <a href="seller_account_intro.html" className="btn w-100">
                    <div className="card">
                        <div className="card-body">
                        <div className="card-title">
                            <i className="fas fa-universal-access fa-2x"></i>
                            <span className="h4"> Seller Account</span>
                        </div>
                        <small className="text-muted">Sell your products.</small>
                        </div>
                    </div>
                    </a>
                </div>
                </div>
            </div> 
            {/* <!-- Your Account Ends --> */}

            </div>
        )
    }
}