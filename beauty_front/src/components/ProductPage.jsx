import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';

const ProductPage = () => {
    const [productDetails, setProductDetails] = useState();

    const getProducts = async () => {
        const details = await getProductData();
        setProductDetails(details.data);
    }

    const getProductData = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/products/`);
        return res;
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
          <h3>All Products</h3>
          <Row>
            {productDetails.map((product) => (
              <Col xs={5} sm={5} md={5} lg={5} xl={3} key={product.id}>
                <Card
                  className='text-center'
                  style={{
                    width: '25rem',
                    height: '35rem',
                    margin: '10px',
                    padding: '10px',
                  }}
                >
                  <Link to={`/products/${product.id}`}>
                    <Card.Img
                      style={{ width: '15rem', height: '20rem' }}
                      src={product.api_featured_image}
                      variant='top'
                    />
                  </Link>
                  <Card.Body>
                    <Card.Text>
                      <Row className='text-center'>{product.description}</Row>
                    </Card.Text>
                  </Card.Body>
                  <Link to='/'>
                    <button className='homebutton'>Home</button>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      );
    };

export default ProductPage;