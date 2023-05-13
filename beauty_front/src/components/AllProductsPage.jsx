import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';

const AllProductsPage = () => {
    const [productDetails, setProductDetails] = useState([]);
    
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
                    <Card.Text style={{ color: 'blue' }}>{product.name}</Card.Text>
                  <Link to={`/product/${product.name}`}>
                    <Card.Img
                      style={{ width: '15rem', height: '20rem' }}
                      src={product.api_featured_image}
                      variant='top'
                    />
                  </Link>
                  {/* <Card.Body>
                    <Card.Text>
                      <Row className='text-center'>{product.description}</Row>
                    </Card.Text>
                  </Card.Body> */}
                  <Card.Text style={{ color: 'green' }}>$ {product.price}</Card.Text>
                  <Link to={`/product/${product.name}`}>
                    {/* {!showProductPage && (
                    <button onClick={() => handleButtonClick(product)} className='productbutton'>details</button>)}
                    {showProductPage && <ProductPage product={selectedProduct} />} */}
                    <button className='productbutton'>Product details</button>
                    <button className='productbutton'>Add to cart</button>
                    </Link>
                   
                </Card>
              </Col>
            ))}
          </Row>
        </>
      );
    };

export default AllProductsPage;