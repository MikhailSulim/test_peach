import React from 'react';
import './Header.scss';

import Icon from '../Icon/Icon';
import { Link } from 'react-router-dom';

/**
 * Хедер страницы
 * @returns JSX.Element
 */
export const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="https://softline.ru" className="header__logo">
        <Icon iconId="logo" />
      </Link>
      <nav className="header__nav-menu">
        <Link className="header__nav-item" to="https://softline.ru">
          Облачные решения
        </Link>
        <Link className="header__nav-item" to="https://softline.ru">
          Кибербезопасность
        </Link>
        <Link className="header__nav-item" to="https://softline.ru">
          Импортозамещение
        </Link>
        <Link className="header__nav-item" to="https://softline.ru">
          Цифровая трансформация
        </Link>
      </nav>
    </header>
  );
};
