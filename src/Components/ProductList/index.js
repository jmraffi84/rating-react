import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const ProductList = (props) => {
    const { productData, addToCart, removeCart, cart } = props

    return (
        <Row className='mt-5'>
            {
                productData.length && productData.map((data) => (
                    <Col key={data.id}>
                        <Card style={{ width: '15rem' }} >
                            <Card.Img variant="top" style={{ height: '250px' }} src={data.image} />
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>{data.description}</Card.Text>
                                <Card.Text >price: ${data.price}</Card.Text>
                                <Card.Text>Rating: {Array(data.rating).fill().map((_, index) => <span key={index}>★</span>)}</Card.Text>

                                <Button
                                    variant="primary"
                                    onClick={() => addToCart(data.id)}
                                    disabled={data.count > 1}
                                >
                                    Add
                                </Button>
                                <br /><br />
                                <Button
                                    variant="danger"
                                    onClick={() => removeCart(data.id)}
                                    disabled={data.count < 0}
                                >
                                    Remove
                                </Button>







                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row >
    );
}

export default ProductList