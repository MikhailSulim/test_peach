import { NumbersBlock } from '../../NumbersBlock/NumbersBlock';
import './Numbers.scss';

import React from 'react';

export const Numbers: React.FC = () => {
  return (
    <section className="numbers">
      <NumbersBlock
        title="30 лет"
        symbol=">"
        isSymbolFirst
        subtitle="на IT-рынке"
      />
      <NumbersBlock title="4600" subtitle="сотрудников в России" />
      <NumbersBlock title="25" subtitle="городов России" />
      <NumbersBlock
        title="2000"
        symbol="+"
        isSymbolFirst={false}
        subtitle="разработчиков"
      />
      <NumbersBlock
        title="3000"
        symbol="+"
        isSymbolFirst={false}
        subtitle="сотрудников ежегодно&#10;проходят оценку и обучение"
      />
    </section>
  );
};
