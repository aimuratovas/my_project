import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [brandDetails, setBrandDetails] = useState([]);
  const [typeDetails, setTypeDetails] = useState([]);

  const history = useHistory();

  const getBrands = async () => {
    const details = await getBrandsData();
    setBrandDetails(details);
  };

  const getTypes = async () => {
    const details = await getTypesData();
    setTypeDetails(details);
  };

  const getBrandsData = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/brands/`);
    return res.data;
  };

  const getTypesData = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/types/`);
    return res.data;
  };

  const handleBrandsClick = async () => {
    await getBrands();
  };

  const handleTypesClick = async () => {
    await getTypes();
  };

  useEffect(() => {
    getBrands();
  }, []);

  useEffect(() => {
    getTypes();
  }, []);

  const handleSearch = () => {
    if (searchTerm) {
      history.push(`/product/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Glossier
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item active">
            <Dropdown className="custom-dropdown" onClick={handleTypesClick}>
              <Dropdown.Toggle
                className="nav-link dropdown-toggle"
                id="categoriesDropdown"
              >
                Types
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {typeDetails.map((type) => (
                  <Dropdown.Item key={type.id}>
                    <Link
                      to={`/type/${type.id}`}
                      style={{ color: 'bg-dark', textDecoration: 'none' }}
                    >
                      {type.name}
                    </Link>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="nav-item active">
            <Dropdown className="custom-dropdown" onClick={handleBrandsClick}>
              <Dropdown.Toggle
                className="nav-link dropdown-toggle"
                id="categoriesDropdown"
              >
                Brands
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {brandDetails.map((brand) => (
                  <Dropdown.Item key={brand.id}>
                    <Link
                      to={`/brand/${brand.id}`}
                      style={{ color: 'bg-dark', textDecoration: 'none' }}
                    >
                      {brand.name}
                    </Link>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            id="button"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="cart">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Shopping-cart-icon-with-bags-white-background.png"
            width="40"
            height="40"
            alt="Cart"
          />{' '}
          <Link to="/cart" className="cart-link">
            Shopping Cart
          </Link>
        </div>
        <div className="login">
          <Link to="/login" className="login-link">
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
