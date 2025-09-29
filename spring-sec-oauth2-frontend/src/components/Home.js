import React from 'react';

const Home = () => {
  const googleLogin = () => {
    window.location.href = 'http://localhost:9000/oauth2/authorization/google';
  };

  const githubLogin = () => {
    window.location.href = 'http://localhost:9000/oauth2/authorization/github';
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#333',
  };

  const buttonStyle = {
    padding: '12px 24px',
    margin: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  };

  const googleStyle = {
    ...buttonStyle,
    backgroundColor: '#db4437',
    color: 'white',
  };

  const githubStyle = {
    ...buttonStyle,
    backgroundColor: '#333',
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Welcome to OAuth2 Demo</h2>
      <button onClick={googleLogin} style={googleStyle}>
        Sign in with Google
      </button>
      <button onClick={githubLogin} style={githubStyle}>
        Sign in with GitHub
      </button>
    </div>
  );
};

export default Home;
