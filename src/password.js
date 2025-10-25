import React, { useState } from 'react';

export default function Password() {
  // State to store password input and strength level
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  // Function to check password strength dynamically
  const checkStrength = (value) => {
    setPassword(value);
    let stValue = 0;

    // Check different conditions and increment score
    if (value.length >= 8) stValue++;              // At least 8 characters
    if (/[A-Z]/.test(value)) stValue++;            // Contains uppercase letter
    if (/[0-9]/.test(value)) stValue++;            // Contains number
    if (/[!@#$%^&*()<>?{}|+_\-]/.test(value)) stValue++; // Contains special character

    // Set strength based on score
    if (stValue <= 1) setStrength('Weak');
    else if (stValue === 2 || stValue === 3) setStrength('Medium');
    else setStrength('Strong');
  };

  // Function to change border color based on password strength
  const getBorderColor = () => {
    if (strength === 'Weak') return 'red';
    else if (strength === 'Medium') return 'orange';
    else if (strength === 'Strong') return 'green';
    return '#ccc'; // Default color
  };

  // Form submit function
  const handleFun = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Password: ${password}\nStrength: ${strength}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>LOGIN</h2>

      {/* Login form */}
      <form onSubmit={handleFun}>
        {/* Username input */}
        <input
          type="text"
          placeholder="Enter your username"
          style={{ marginBottom: '10px', padding: '8px' }}
        />
        <br />

        {/* Password input with dynamic border color */}
        <input
          type="password"
          value={password}
          onChange={(e) => checkStrength(e.target.value)}
          placeholder="Enter your password"
          style={{
            padding: '8px',
            border: `2px solid ${getBorderColor()}`,
            borderRadius: '5px',
            outline: 'none',
          }}
        />

        {/* Password strength message */}
        <p>Password Strength: <strong>{strength}</strong></p>

        {/* Submit button */}
        <button type="submit" style={{ padding: '8px 16px' }}>
          Login
        </button>
      </form>
    </div>
  );
}
