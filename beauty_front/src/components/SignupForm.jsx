import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/signup/', data);
      if (response.status === 200) {
        setMessage('User registered successfully. Please login.');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setMessage('User with the same email already exists. Please choose a different email.');
      } else {
        setMessage('An error occurred during signup. Please try again later.');
      }
    }
  };

  const password = watch('password');

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" {...register('firstName', { required: true })} />
          {errors.firstName && <span className="error">First Name is required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" {...register('lastName', { required: true })} />
          {errors.lastName && <span className="error">Last Name is required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span className="error">Invalid Email</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && (
            <span className="error">Password is required (minimum 6 characters)</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="reEnterPassword">Re-enter Password</label>
          <input
            type="password"
            id="reEnterPassword"
            {...register('reEnterPassword', {
              required: true,
              validate: (value) => value === password || 'Passwords do not match'
            })}
          />
          {errors.reEnterPassword && <span className="error">{errors.reEnterPassword.message}</span>}
        </div>

        <button type="submit">Sign Up</button>

        {message && <p className="message">{message}</p>}
      </form>

      <div className="login-link-container">
        <p className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
