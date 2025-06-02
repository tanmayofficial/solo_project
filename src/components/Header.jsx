import React from 'react';
import './Header.css';

function Header({ onMenuClick }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="menu-icon" onClick={onMenuClick}>☰</div>
        <div className="header-logo">B</div>
      </div>
      <div className="header-right">
        <span className="header-icon">ⓘ</span>
        <span className="header-icon">🔔</span>
        <div className="user-info">
          <span className="user-avatar"></span>
          <div className="user-text">
            <p className="user-greeting">Hi, Muhammad Asad</p>
            <p className="welcome-message">welcome back!</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 