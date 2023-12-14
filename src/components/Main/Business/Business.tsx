import './Business.scss';

import { BUSINESS_DIRECTIONS } from '../../../utils/constants';

import React from 'react';
import { BusinessDirection } from '../../BusinessDirection/BusinessDirection';

/**
 * Renders the Business component.
 * @returns {JSX.Element} The rendered Business component.
 */
export const Business: React.FC = (): JSX.Element => {
  return (
    <section className="business">
      <h2 className="business__title">Направления бизнеса</h2>
      <div className="business__directions">
        {BUSINESS_DIRECTIONS.map(({ id, background, title, text }) => (
          <BusinessDirection
            key={id}
            background={background}
            title={title}
            text={text}
          />
        ))}
      </div>
    </section>
  );
};
