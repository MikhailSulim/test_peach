import { Link } from 'react-router-dom';
import './Promo.scss';
import React from 'react';

/**
 * Render the Promo section.
 *
 * @returns JSX.Element
 */
export const Promo: React.FC = (): JSX.Element => {
  return (
    <section className="promo">
      <div className="promo__content">
        <h1 className="promo__title">
          Поставщик услуг цифровой трансформации и&nbsp;кибербезопасности
        </h1>
        <Link to="" className="promo__button">
          На сайт
        </Link>
      </div>
    </section>
  );
};
