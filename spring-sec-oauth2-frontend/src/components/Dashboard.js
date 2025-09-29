import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:9000/api/user/details', { withCredentials: true })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.error('Error occurred:', error));
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '95vh',
    background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'center',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '1.8rem',
    color: '#333',
  };

  const userDetailsStyle = {
    backgroundColor: '#fff',
    padding: '18px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '380px',
    textAlign: 'left',
  };

  const userImageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
    marginLeft : '120px'
  };

  const userInfoStyle = {
    marginBottom: '10px',
    fontSize: '1.5rem',
    color: 'Red',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Welcome to OAuth2</h2>
      {user ? (
        <div style={userDetailsStyle}>
          <img
            src={user.picture}
            referrerPolicy="no-referrer"
            alt="user_image"
            style={userImageStyle}
          />
          <p style={userInfoStyle}><stong style={{color:'Black'}}>Name: </stong>{user.name}</p>
          <p style={userInfoStyle}><stong style={{color:'Black'}}>Email: </stong>{user.email}</p>
        </div>
      ) : (
        <p>Loading User Data...</p>
      )}
    </div>
  );
};

export default Dashboard;
