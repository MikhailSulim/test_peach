import { Promo } from './Promo/Promo';
import './Main.scss';

import React from 'react';
import { Info } from './Info/Info';
import { Numbers } from './Numbers/Numbers';
import { Mission } from './Mission/Mission';
import { Business } from './Business/Business';
import { Benefits } from './Benefits/Benefits';
import { Gallery } from './Gallery/Gallery';

/**
 * Главный компонент страницы, содержит в себе весь контент
 * @returns JSX element.
 */
export const Main: React.FC = () => {
  return (
    <main className="main">
      <Promo />
      <Info/>
      <Numbers/>
      <Mission/>
      <Business/>
      <Benefits/>
      <Gallery/>
    </main>
  );
};
