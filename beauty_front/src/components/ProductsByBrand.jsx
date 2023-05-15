import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';

const ProductsByBrand = ({ match }) => {
  const [productDetails, setProductDetails] = useState([]);

  const id = match.params.id;

  const getBrands = async (id) => {
    const details = await getBrandData(id);
    setProductDetails(details);
  };

  const getBrandData = async (id) => {
    const res = await axios.get(`http://127.0.0.1:8000/brands/${id}`);
    return res.data;
  };

  const addToCart = async (productId) => {
    try {
      await axios.get(`http://127.0.0.1:8000/cart/add/${productId}`);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  useEffect(() => {
    getBrands(id);
  }, [id]);

  return (
    <>
      <h3>Products by brands</h3>
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
                <Card.Text style={{ color: 'blue' }}>{product.name}</Card.Text>
              <Link to={`/product/${product.name}`}>
                <Card.Img
                  style={{ width: '15rem', height: '20rem' }}
                  src={product.api_featured_image}
                  variant='top'
                />
              </Link>
              <Card.Text style={{ color: 'green' }}>$ {product.price}</Card.Text>
              <Link to={`/product/${product.name}`}>
                <button className='productbutton'>Product details</button>
                </Link>
              <Link to={`/cart`}>
                <button onClick={() => addToCart(product.id)}>Add to Cart</button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductsByBrand;
