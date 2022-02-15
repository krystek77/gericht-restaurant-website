import React from 'react';
import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer/Footer';

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
export default Layout;
