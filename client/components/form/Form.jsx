import React, { useState, useEffect } from 'react';
import "./form.css"

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Simulate form submission on component mount
    console.log('Form submitted with:', { email, password });
  }, [email, password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', { email, password });
    // Add your form submission logic here
  };

  return (
    <div style={{ height:'50vh', width: '25vw', margin: 'auto', marginTop: '50px', padding: '3rem', border: '1px solid #ccc', borderRadius: '10px',backdropFilter: 'blur(20px)',boxShadow: '0px 18.261890411376953px 22.827362060546875px rgba(0, 0, 0, 0.05)' }}>
      <h2 style={{ textAlign: 'center',textAlign: 'center', color: 'white', fontSize: 36, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>Signup/Login</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', background: '#297BCA', color: 'white', borderRadius: '5px', border: 'none', position:'relative',top:'10vh' }}>Signup</button>
      </form>
    </div>
  );
};

export default Form;
