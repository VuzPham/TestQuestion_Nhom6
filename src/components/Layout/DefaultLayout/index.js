// src/components/Layout/DefaultLayout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
