import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Telegram</h1>
        <div className="header-icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
