import React from 'react';
import Navbar from '../navbar';
import '../Layout/layout.css'

import Sidebar from './sidebar';

function Layout({ children }) {
  return (
    <div className='layout-container'>
      <Navbar />
     <div className='body-container'>
      <Sidebar />
      {children}
      </div> 
    </div>
  );
}

export default Layout;
