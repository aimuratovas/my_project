import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';


const ProductPage = () => {
    console.log("aaaaa");
    const [productDetails, setProductDetails] = useState();

    const getProducts = async () => {
        console.log("getProducts called");
        const details = await getProductData();
        console.log(details)
        setProductDetails(details.data);
    }

    const getProductData = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/products`, { withCredentials: true });
        // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        return res;
    }

    useEffect(() => {
        getProducts();
    }, [])
    
    return (
        <>
        <h3>
            All Products
        </h3>
        {productDetails && (
        <Row>
            <Col xs={5} sm={5} md={5} lg={5} xl={3}>
                <Card className='text-center' style={{ width: '25rem', height: '35rem', margin: "10px", padding: "10px"}}>
                    <Link to={`/pokemon/${productDetails[0].id}`}>
                        <Card.Img style={{ width: '15rem', height: '20rem' }} src={productDetails.sprites.front_default} variant='top'/>
                    </Link>
                <Card.Body>
                    <Card.Text>
                        <Row className='text-center'>
                            {productDetails.moves.slice(0, 4).map(a => (
                                <Col key={a.move.name} xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <div className={`rounded px-4 py-1`}>
                                        {a.move.name}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Card.Text>
                </Card.Body>
                <Link to="/">
                    <button className="homebutton">Home</button>
                </Link> 
                </Card>
            </Col>
        </Row>
        )}
        </>
      );
      }

export default ProductPage;