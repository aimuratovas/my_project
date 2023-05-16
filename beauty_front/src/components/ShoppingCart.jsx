import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../index.css';

const ShoppingCart = () => {
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCartData();
  }, []);

  useEffect(() => {
    fetchProductDataForCarts();
  }, [carts]);

  const fetchCartData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/cart/');
      setCarts(response.data);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const fetchProductDataForCarts = async () => {
    const productIds = carts.map((cart) => cart.product_id);
    const promises = productIds.map(fetchProductData);
    const productsData = await Promise.all(promises);
    setProducts(productsData);
  };

  const fetchProductData = async (productId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/products/${productId}`);
      return response.data[0];
    } catch (error) {
      console.error(`Error fetching product data for ID ${productId}:`, error);
      return null;
    }
  };

  const addItem = async (productId) => {
    console.log("productId: " + productId)
    try {
      await axios.get(`http://127.0.0.1:8000/cart/add/${productId}`);
      fetchCartData();
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const removeItem = async (productId) => {
    try {
      await axios.get(`http://127.0.0.1:8000/cart/remove/${productId}`);
      fetchCartData();
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const getTotal = () => {
    const total = carts.reduce((accumulator, item) => {
      const product = products.find((product) => product.id === item.product_id);
      if (product) {
        const price = parseFloat(product.price);
        const quantity = item.quantity; // Assuming the cart item has a 'quantity' property
        return accumulator + price * quantity;
      }
      return accumulator;
    }, 0);
    return total.toFixed(2); // Format the total to 2 decimal places
  };
  

  if (!carts || carts.length === 0) {
    return (
      <div className="cart-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Shopping-cart-icon-with-bags-white-background.png"
          className="cart-icon"
          alt="Cart"
        />
        <div className="empty-cart">Your cart is empty</div>
      </div>
    );
  }
  
  if (!products || products.length === 0) {
    return null; // Or you can render a loading state here
  }
  
  return (
    <div className="cart-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Shopping-cart-icon-with-bags-white-background.png"
        className="cart-icon"
        alt="Cart"
      />
      <div className="cart-items">
        <Row className="cart-header">
          <Col className="header-column">Product name</Col>
          <Col className="header-column">Price</Col>
          <Col className="header-column">Quantity</Col>
          <Col className="header-column">-/+</Col>
        </Row>
        {products.map((product, index) => {
          const cart = carts[index];
          if (!product || !cart) return null;
  
          return (
            <Row key={cart.id} className="cart-item">
              <Col>{product.name}</Col>
              <Col>$ {product.price}</Col>
              <Col>{cart.quantity}</Col>
              <Col>
                <div className="item-actions">
                  <button className="remove-btn" onClick={() => removeItem(cart.product_id)}>
                    -
                  </button>
                  <button className="add-btn" onClick={() => addItem(cart.product_id)}>
                    +
                  </button>
                </div>
              </Col>
            </Row>
          );
        })}
      </div>
      <div className="cart-total">Total: ${getTotal()}</div>
    </div>
  );
};

export default ShoppingCart;
