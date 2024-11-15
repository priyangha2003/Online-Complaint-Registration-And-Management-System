import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/login', { email, password });
      login(response.data);
      alert('Login successful!');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again.');
    }
  };


  return (
    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 md:w-1/3 lg:w-1/4 mx-auto mt-24 flex items-center justify-center flex-col">
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div className="relative">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
        <div className="relative mt-1">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full border border-gray-300 rounded-lg shadow-sm py-2.5 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 text-sm"
          />
          <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </div>
      </div>
      <div className="relative">
        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
        <div className="relative mt-1">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full border border-gray-300 rounded-lg shadow-sm py-2.5 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 text-sm"
          />
          <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Log in
      </button>
    </form>
      <p className="mt-4 text-center text-sm">
        Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-700">Sign up</Link>
      </p>
  </div>
  
  );
}
