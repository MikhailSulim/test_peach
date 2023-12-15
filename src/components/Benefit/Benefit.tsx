import Icon from '../Icon/Icon';
import './Benefit.scss';

import React from 'react';

/**
 * Renders a benefit component with an icon and text.
 * @param props - The properties for the benefit component.
 * @param props.iconId - The ID of the icon from the sprite to be displayed.
 * @param props.text - The text to be displayed.
 * @returns The rendered benefit component.
 */

type BenefitProps = {
  iconId: string;
  text: string;
};

export const Benefit: React.FC<BenefitProps> = ({ iconId, text }) => {
  return (
    <div className="benefit">
      <div className="benefit__icon">
        <Icon iconId={iconId} />
      </div>

      <span className="benefit__text">{text}</span>
    </div>
  );
};
