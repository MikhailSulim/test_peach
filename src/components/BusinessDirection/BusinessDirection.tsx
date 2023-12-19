import Icon from '../Icon/Icon';
import './BusinessDirection.scss';
import { useWindowWidth } from '../../hooks/useWindowWidth';

import React, { useEffect, useState } from 'react';

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
  const [isBlockOpen, setIsBlockOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const winWidth = useWindowWidth();

  useEffect(()=>{
    winWidth > 520 ? setIsMobile(false) : setIsMobile(true);
  },[winWidth]);

  // const blockClassName = `direction${isMobile ? '_mobile' : ''}`;
  return (
    <div
      className={`direction ${isMobile ? '' :'direction_full'}${isBlockOpen ? 'direction_open' : ''}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="direction__overlay">
        <h3 className="direction__title">
          {title}
          <button
            type="button"
            className="direction__btn"
            onClick={() => setIsBlockOpen(!isBlockOpen)}
          >
            <Icon iconId="arrDownDir" />
          </button>
        </h3>
        <p className={`${isMobile ? 'direction__text' :'direction__text_full'}`}>{text}</p>
      </div>
    </div>
  );
};
