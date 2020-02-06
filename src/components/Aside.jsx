import React from 'react';

const Aside = () => {
 return (
   <aside>
    <nav className = 'nav'>
      <ul>
        <li><a className="nav__link" href="http://localhost:3000/">Моя страница</a></li>
        <li><a className="nav__link" href="http://localhost:3000/">Новости</a></li>
        <li><a className="nav__link" href="http://localhost:3000/">Сообщения</a></li>
        <li><a className="nav__link" href="http://localhost:3000/">Друзья</a></li>
        <li><a className="nav__link" href="http://localhost:3000/">Сообщества</a></li>
        <li><a className="nav__link" href="http://localhost:3000/">Фотографии</a></li>
        <li><a className="nav__link" href="http://localhost:3000/">Настройки</a></li>
      </ul>
    </nav>
  </aside>
 );
};

export default Aside;
