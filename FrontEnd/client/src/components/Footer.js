import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

            <div>

                <footer className="bg-dark text-center text-white">

                    <div className="container p-4" style={{ position: 'relative' }}>


                        <section className="">


                            <div className="row d-flex justify-content-center">


                                <h3>ABOUT US</h3>
                            </div>


                        </section>

                        <section className="mb-4" style={{ marginTop: '-20px' }}>
                            <p><tt>
                                <br />
                                24 HOURES CUSTOMER  SUPPORT LINE
                                <br />
                            </tt></p>
                        </section>
                        <br />
                        <section className="mb-3" style={{ marginTop: '-15px' }}>

                            <a className="btn btn-floating mx-3" href="#!" role="button">
                                <i className="fa fa-facebook fa-3x" style={{ color: "#4267B2" }}></i></a>


                            <a className="btn btn-floating mx-3" href="#!" role="button">
                                <i className="fa fa-twitter fa-3x" style={{ color: "#00acee" }}></i></a>


                            <a className="btn btn-floating mx-3" href="#!" role="button">
                                <i className="fa fa-google fa-3x" style={{ color: "#0F9D58" }}></i></a>


                            <a className="btn btn-floating mx-3" href="#!" role="button">
                                <i className="fa fa-instagram fa-3x" style={{ color: "#8a3ab9" }}></i></a>

                            <a className="btn btn-floating mx-3" href="#!" role="button">
                                <i className="fa fa-linkedin fa-3x" style={{ color: "#0077b5" }}></i></a>

                            <a className="btn btn-floating mx-3" href="#!" role="button">
                                <i className="fas fa-share fa-3x" style={{ color: "#f57d00" }}></i></a>

                        </section>


                    </div>



                    <div className="text-center p-4" style={{ marginTop: '-20px' }}>

                        <b><tt>
                            Copyright © 2022
                            <a className="text-white" href="#!" style={{ textDecoration: 'none' }}> E-Shopping  </a>
                            All Rights Reserved.
                        </tt></b>
                    </div>

                </footer>
            </div>

        );
    }
}

export default Footer;