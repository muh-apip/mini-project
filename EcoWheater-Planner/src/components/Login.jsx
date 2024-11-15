import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCloudSun } from "react-icons/fa";

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'Haviv123@gmail.com' && password === 'password123') {
      onLogin(); // Memanggil fungsi onLogin untuk mengubah status login
      navigate('/');  
    } else {
      alert('Invalid Email or Password');
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-8">
        <div className="flex items-center justify-center mt-6 mb-6">
          <FaCloudSun className="text-4xl text-blue-500 mr-2" /> 
          <h2 className="text-2xl font-semibold text-center">Eco Weather Planner</h2>
        </div>

        
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-control mb-6">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-full text-white mt-4 bg-blue-500 hover:bg-blue-400"
          >
            Log in
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
