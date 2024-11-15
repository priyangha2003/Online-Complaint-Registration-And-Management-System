import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
    {/* Navbar */}
    <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ComplaintCare</h1>
      <nav className="space-x-6">
        <a href="/" className="hover:text-indigo-400">Home</a>
        <a href="/signup" className="hover:text-indigo-400">SignUp</a>
        <a href="/login" className="hover:text-indigo-400">Login</a>
      </nav>
    </header>

    {/* Hero Section */}
    <main className="flex flex-col md:flex-row items-center justify-center p-10 bg-no-repeat bg-center bg-cover h-screen"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1499914567823-c240485cb7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="md:w-1/2 text-center md:text-left space-y-4 mt-6 md:mt-0 px-4">
        <h2 className="text-3xl font-semibold text-gray-100">Empower Your Team,</h2>
        <p className="text-lg text-gray-100">
          Exceed Customer Expectations: Discover our Complaint Management Solution
        </p>
        <Link to="/complaintform" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Register your Complaint
        </Link>
      </div>
    </main>
  </div>
  );
}
