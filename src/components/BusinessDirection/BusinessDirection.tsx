import './BusinessDirection.scss';

import React from 'react';

type BusinessDirectionProps = {
  background: string;
  title: string;
  text: string;
};

/**
 * Renders a business direction component.
 *
 * @param {BusinessDirectionProps} props - The props for the component.
 * @returns {JSX.Element} - The rendered component.
 */
export const BusinessDirection: React.FC<BusinessDirectionProps> = ({
  background,
  title,
  text,
}) => {
  return (
    <div className="direction">
      <img
        src={background}
        alt={`Изображение ${title}`}
        className="direction__background"
      />
      <div className="direction__overlay">
        <h3 className="direction__title">{title}</h3>
        <p className="direction__text">{text}</p>
      </div>
    </div>
  );
};
