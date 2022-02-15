import React from 'react';
import Header from '../../containers/Header/Header';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="page">
      <Header />
      {children}
    </div>
  );
}
export default Layout;
