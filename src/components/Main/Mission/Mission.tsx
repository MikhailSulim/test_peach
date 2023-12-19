import './Mission.scss';
import React from 'react';

/**
 * Renders the mission section.
 *
 * @returns JSX.Element
 */
export const Mission: React.FC = (): JSX.Element => {
  return (
    <section className="mission">
      <div className='mission__bg'/>
      <div className="mission__pattern mission__pattern_left" />
      <div className="mission__pattern mission__pattern_right" />
      <div className="mission__text">
        <h2 className="mission__text-title">Миссия Softline</h2>
        <p className="mission__text-subtitle">
          Мы помогаем организациям трансформироваться, работать эффективно и&nbsp;безопасно в&nbsp;условиях цифровой&#10;экономики.
        </p>
      </div>
    </section>
  );
};
