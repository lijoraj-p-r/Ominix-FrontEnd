// RegistrationPage.jsx
import React, { useState } from 'react';
import './assets/styles.css';
import { useNavigate } from 'react';

export default function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({}); // For field-specific validation

  const validate = () => {
    const newErrors = {};

    // Username validation
    if (!username.trim()) newErrors.username = 'Username is required';
    else if (username.length < 3) newErrors.username = 'Username must be at least 3 characters';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) newErrors.email = 'Enter a valid email address';

    // Password validation
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < minLength) newErrors.password = `Password must be at least ${minLength} characters`;
    else if (!hasUpperCase) newErrors.password = 'Password must contain at least 1 uppercase letter';
    else if (!hasLowerCase) newErrors.password = 'Password must contain at least 1 lowercase letter';
    else if (!hasNumber) newErrors.password = 'Password must contain at least 1 number';
    else if (!hasSpecialChar) newErrors.password = 'Password must contain at least 1 special character (!@#$%^&*)';

    // Role validation
    if (!role) newErrors.role = 'Please select a role';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // No errors = valid
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous server errors

    if (!validate()) return; // Stop if validation fails

    try {
      const response = await fetch('http://localhost:9090/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User registered successfully:', data);
        window.location.href = '/';
      } else {
        throw new Error(data.error || 'Registration failed');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="page-layout">
      <div className="page-container">
        <div className="form-container">
          <h1 className="form-title">Register</h1>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSignUp} className="form-content">

            {/* Username */}
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className={`form-input ${errors.username ? 'input-error' : ''}`}
              />
              {errors.username && <small className="error-text">{errors.username}</small>}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`form-input ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && <small className="error-text">{errors.email}</small>}
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`form-input ${errors.password ? 'input-error' : ''}`}
              />
              {errors.password && <small className="error-text">{errors.password}</small>}
            </div>

            {/* Role */}
            <div className="form-group">
              <label htmlFor="role" className="form-label">Role</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className={`form-select ${errors.role ? 'input-error' : ''}`}
              >
                <option value="" disabled>Select your role</option>
                <option value="CUSTOMER">Customer</option>
                <option value="ADMIN">ADMIN</option>
              </select>
              {errors.role && <small className="error-text">{errors.role}</small>}
            </div>

            <button type="submit" className="form-button">Sign Up</button>
          </form>

          <p className="form-footer">
            Already a user?{' '}
            <a href="/" className="form-link">Log in here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
