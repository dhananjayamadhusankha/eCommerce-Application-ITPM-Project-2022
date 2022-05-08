import '../index.css'
import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Product(props) {

    const { product, onAdd } = props;



    return (
        <div>
            <Card className="my-3 p-3 rounded" border="light">
                <Card.Img className="small" src={product.image} alt={product.name} variant="top"></Card.Img>
                <Card.Body>

                    <Card.Title as="center"><strong>{product.name}</strong></Card.Title>
                    <Card.Text as="center">
                        {product.description}
                    </Card.Text>

                    <Card.Text as="h3">
                        <div style={{textAlign:'center'}}>
                        RS.{product.price}
                        </div>
                    </Card.Text>

                    <div className="d-grid gap-2">
                    <Button variant="outline-success" onClick={() => onAdd(product)}>Add To Cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
