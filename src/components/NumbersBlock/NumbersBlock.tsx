import './NumbersBlock.scss';

import React from 'react';

type NumbersBlockProps = {
  title: string;
  symbol?: string;
  isSymbolFirst?: boolean;
  subtitle: string;
};

export const NumbersBlock: React.FC<NumbersBlockProps> = ({
  title,
  symbol,
  isSymbolFirst,
  subtitle,
}) => {
  const titleClass = `numbers-block__title ${
    !isSymbolFirst ? 'numbers-block__title_reverse' : ''
  }`;

  return (
    <div className="numbers-block">
      <div className={titleClass}>
        {symbol && <h2 className="numbers-block__symbol-title">{symbol}</h2>}
        <h2 className="numbers-block__text-title">{title}</h2>
      </div>
      <p className="numbers-block__subtitle">{subtitle}</p>
    </div>
  );
};
