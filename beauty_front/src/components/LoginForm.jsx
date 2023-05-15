import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/login/', {
        username: data.username,
        password: data.password
      });
      console.log('response:', response);
      if (response.status === 200) {
        // Redirect to the home page after successful login
        history.push('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid username or password. Please register.');
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" {...register('username', { required: true })} />
        {errors.username && <span className="error">Username is required</span>}

        <input type="password" placeholder="Password" {...register('password', { required: true })} />
        {errors.password && <span className="error">Password is required</span>}

        {errorMessage && <span className="error">{errorMessage}</span>}

        <button type="submit">Log In</button>
        <Link to="/signup" className="signup-link">Not registered? Sign Up</Link>
      </form>
    </div>
  );
};

export default LoginForm;
