import React from 'react';
import Layout from '../components/Layout/Layout';

function NotFounded() {
  const styles = {
    fontSize: '64px',
    textAlign: 'center',
  };
  return (
    <Layout>
      <h1 style={styles}>Page not founded 😱</h1>
    </Layout>
  );
}

export default NotFounded;
