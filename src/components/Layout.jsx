import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './Layout.css';

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-layout">
      <Header onMenuClick={toggleSidebar} />
      <div className="content-area-and-sidebar">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="main-content">
          <div className="page-content">
            {children}
          </div>
        </div>
      </div>
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
}

export default Layout;