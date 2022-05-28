import React, { Component } from 'react'

//import img
import book from '../img/book.jpg';
import computor from '../img/computor.jpg';
import electronics from '../img/electronics.jpg';
import Men from '../img/Men-Fashion.jpg';
import Women from '../img/Women-Fashion.jpg';
import Digital from '../img/Digital-Music.jpg';
import phone from '../img/phone.jpg';
import Sports from '../img/Sports-Outdoors.jpg';
import Home from '../img/Home-And-Kitchen.jpg';

export default class ProductList extends Component {

    render() {
        return (
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Exclsv Collection</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <p>
                        <a href="#/" className="btn btn-primary my-2">Buyer Account</a>&nbsp; &nbsp;
                        <a href="#/" className="btn btn-secondary my-2">Seller Account</a>
                        </p>
                    </div>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                        <div className="card shadow-sm">
                            <img src={book} alt="book"></img>
                            <div className="card-body">
                                <h4>Books</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <a href="/display/booksAdd">
                                <button type="button" className="btn btn-sm btn-outline-secondary" >View</button></a>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                            <img src={computor} alt="compotor"></img>

                            <div className="card-body">
                            <h4>Computers & Accessories</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                        <img src={Digital} alt="Digital"></img>

                            <div className="card-body">
                            <h4>Digital Music</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <a href="/display/ElectronicsAdd">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col">
                        <div className="card shadow-sm">
                        <img src={Sports} alt="compotor"></img>

                            <div className="card-body">
                            <h4>Sports Outdoors</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                        <img src={phone} alt="compotor"></img>

                            <div className="card-body">
                            <h4>Mobile Phones And Accessories</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                        <img src={Women} alt="compotor"></img>

                            <div className="card-body">
                            <h4>Women's Fashion</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col">
                        <div className="card shadow-sm">
                        <img src={Men} alt="compotor"></img>

                            <div className="card-body">
                            <h4>Men's Fashion</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                        <img src={Home} alt="compotor"></img>

                            <div className="card-body">
                            <h4>Home And Kitchen</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                        <img src={electronics} alt="compotor"></img>

                            <div className="card-body">
                            <h4>Electronics Items</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                </main>
        )
    }

}