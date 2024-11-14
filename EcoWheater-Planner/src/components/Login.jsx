import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password123') {
      onLogin(); // Memanggil fungsi onLogin untuk mengubah status login
      navigate('/');  
    } else {
      alert('Invalid Username or Password');
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label htmlFor="username" className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              className="input input-bordered w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
