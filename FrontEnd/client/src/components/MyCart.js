import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap'
import { saveAs } from 'file-saver'


toast.configure()

export default class MyCart extends Component {
    constructor(props) {
        super(props);
        this.generateReport = this.generateReport.bind(this);

        this.state = {
            cartItems: []
        };
    }

    componentDidMount() {
        this.retrievecartItems();
    }

    retrievecartItems() {
        axios.get("/cart/display").then(res => {
            if (res.data.success) {
                this.setState({
                    cartItems: res.data.existingcartItems
                });

                console.log(this.state.cartItems)

            }


        });
    }

    onDelete = (id) => {
        axios.delete(`/cart/delete/${id}`).then((res) => {
            toast.success('Order Deleted Successfully', { position: toast.POSITION.TOP_CENTER })
            this.retrievecartItems();
        })
    }

    async generateReport() {
        const obj = { cartItems: this.state.cartItems }
        await axios.post('http://localhost:8000/cartreport/generatecartreport', obj, { responseType: 'arraybuffer', headers: { Accept: 'application/pdf', }, }).then((res) => {
            //alert('Report Generated')
            toast.success('Report Generated Successfully', { position: toast.POSITION.TOP_CENTER })
            console.log(res)
            console.log(res.data)



            const pdfBlog = new Blob([res.data], { type: 'application/pdf' });
            saveAs(pdfBlog, 'invoice.pdf');

            //window.open(res.data, '_blank');

        }).catch((err) => {
            console.log(err.message)
        })
        console.log(obj)
    }





    filterData(cartItems, searchKey) {

        const result = cartItems.filter((cartItem) =>
            cartItem.productName.toLowerCase().includes(searchKey)
        )
        this.setState({ cartItems: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get("/cart/display").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingcartItems, searchKey)
            }
        });
    }

    render() {
        return (
            <div className="">
                <NavBar />
                <Container>
                    <div className="">
                        <div className="row">
                            <div className="col-lg-9 mt-2 mb-2">
                                <h2>MY ORDERS</h2>
                            </div>
                            <div className="col-lg-3 mt-2 mb-2">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Search"
                                    name="searchQuery"
                                    onChange={this.handleSearchArea}>

                                </input>

                            </div>
                        </div>
                        <table class="table table-hover" style={{ marginTop: '40px' }}>
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    {/* <th scope="col">Image</th> */}
                                    <th scope="col">Product ID</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Sub Total</th>
                                    <th scope="col">Tax Price</th>
                                    <th scope="col">Shipping Price</th>
                                    <th scope="col">Total Price</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.cartItems.map((cartItems, index) => (
                                    <tr>
                                        <th scope="row">
                                            {/* <a href={`/cart/display/${cartItems._id}`} style={{ textDecoration: 'none' }}> */}
                                            Order{index + 1}
                                            {/* </a> */}
                                        </th>
                                        {/* <td>{cartItems.productImage}</td> */}
                                        <td>{cartItems.productId}</td>
                                        <td>{cartItems.productName}</td>
                                        <td>RS.{cartItems.productPrice}</td>
                                        <td>{cartItems.quantity}</td>
                                        <td>RS.{cartItems.subTotal}</td>
                                        <td>RS.{cartItems.taxPrice}</td>
                                        <td>RS.{cartItems.shippingPrice}</td>
                                        <td>RS.{cartItems.totalPrice}</td>
                                        <td>
                                            <Button variant="warning" href="#">
                                                Proceed To Deliver&nbsp;<i class="fas fa-chevron-circle-right"></i>
                                            </Button>
                                            &nbsp;
                                            &nbsp;
                                            <Button variant="outline-danger" href="#" onClick={() => this.onDelete(cartItems._id)}>
                                                <i class="fas fa-trash"></i>
                                            </Button>

                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>
                        <br></br>
                        <br></br>
                        <br></br>

                        <Row>
                            <Col sm={8}>
                                <a href="/" >

                                    <Button variant="success" style={{ fontSize: '20px' }}><i class="fas fa-arrow-alt-circle-left"></i>&nbsp; Continue Shopping</Button>

                                </a>
                            </Col>
                            <Col sm={4}>
                                <Button variant="secondary" style={{ fontSize: '20px' }} type="submit" onClick={this.generateReport}><i class="fas fa-file-download"></i>&nbsp; Download Invoice</Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>

        )
    }
}