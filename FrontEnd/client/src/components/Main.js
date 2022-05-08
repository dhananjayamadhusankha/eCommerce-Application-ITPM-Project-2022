import '../index.css';
import React from 'react'
import Product from './Product';
import { Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

export default function Main(props) {
    const { products, onAdd } = props;


    // function filterData(products, searchKey) {

    //     const result = products.filter((product) =>
    //         product.name.toLowerCase().includes(searchKey)
    //     )
    //     this.setState({ products: result })
    // }

    //  handleSearchArea = (e) => {
    //     const searchKey = e.currentTarget.value;


    //     this.filterData(products, searchKey)


    // }













    return (
        <main className="">
            <h2>PRODUCTS</h2>
            <div className="">
                {/* <div className="row">
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
                </div> */}
                <Container >
                    <Row>
                        {products.map((product) => (
                            <Col sm={4}>
                                <Product key={product.id} product={product} onAdd={onAdd}></Product>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

        </main>
    );

}