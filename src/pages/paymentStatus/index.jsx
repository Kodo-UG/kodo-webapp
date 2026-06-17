import React from 'react';

const PaymentStatus = () => {
    const handleClick = () => {
    // Try to open the app
    window.location.href = 'myapp://scholarships';
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Transaction status</h2>
        <p style={styles.text}> 
          Your payment is currently being processed, which typically takes a few minutes.
          <br />
          You will receive an email once the payment has been confirmed.
        </p>
        <button 
            onClick={handleClick}
            style={styles.button}
        > Back to Kodo app </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  box: {
    backgroundColor: '#fff',
    padding: '30px 40px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxWidth: '400px',
  },
  title: {
    marginBottom: '20px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  text: {
    marginBottom: '30px',
    fontSize: '16px',
    color: '#666',
  },
  button: {
    backgroundColor: '#f47c2c',
    color: '#fff',
    border: 'none',
    padding: '10px 25px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default PaymentStatus;
