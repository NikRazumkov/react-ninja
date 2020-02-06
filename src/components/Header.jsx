import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <img src="https://vk.com/images/svg_icons/ic_head_logo.svg" alt=""/>
        </div>
        <input type="text" className="search__input" placeholder="Поиск"/>
      </div>
    </header>
  );
};

export default Header;
