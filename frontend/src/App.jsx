import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AuthContent from './components/AuthContent';
import LoginForm from './components/LoginForm';
import Home from './components/Home.jsx';
import SignupForm from './components/SignupForm';
import ComplaintForm from './components/ComplaintForm';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/complaintform" element={< ComplaintForm/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

