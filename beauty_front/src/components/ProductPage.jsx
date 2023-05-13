import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductPage = ({ match }) => {
  const [productDetails, setProductDetails] = useState(null);

  const name = match.params.name;

  const getProduct = async (name) => {
    try {
      const details = await getProductData(name);
      if (details.length === 0) {
        console.log('Product not found');
        setProductDetails(null);
      } else {
        setProductDetails(details);
        // console.log('details: ' + JSON.stringify(details));
      }
    } catch (error) {
      console.log('Error fetching product:', error);
    }
  };
  

  const getProductData = async (name) => {
    const res = await axios.get(`http://127.0.0.1:8000/products/`);
    const filteredData = res.data.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
    return filteredData;
  };
  

  useEffect(() => {
    getProduct(name);
  }, [name]);

  return (
    <>
      <h3>Product info</h3>
      {productDetails ? (
        <Row>
          <Col xs={5} sm={5} md={5} lg={5} xl={3} key={productDetails[0].id}>
            <Card
              className='text-center'
              style={{
                width: '25rem',
                height: '35rem',
                margin: '10px',
                padding: '10px',
              }}
            >
              <Card.Img
                style={{ width: '15rem', height: '20rem' }}
                src={productDetails[0].api_featured_image}
                variant='top'
              />
              <Card.Body>
                <Card.Text>
                  <Row className='text-center'>{productDetails[0].description}</Row>
                </Card.Text>
              </Card.Body>
              <Link to='#'>
                <button className='cartbutton'>Add to cart</button>
              </Link>
              <Link to='/'>
                <button className='homebutton'>Home</button>
              </Link>
            </Card>
          </Col>
        </Row>
      ) : (
        <h1>Not Found</h1>
      )}
    </>
  );
};

export default ProductPage;
