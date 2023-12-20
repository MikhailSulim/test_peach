import { NumbersBlock } from '../../NumbersBlock/NumbersBlock';
import './Numbers.scss';

import React, { useEffect, useRef } from 'react';

export const Numbers: React.FC = () => {
  const numbersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(observerCallback, options);

    if (numbersRef.current) {
      observer.observe(numbersRef.current);
    }

    return () => {
      if (numbersRef.current) {
        observer.unobserve(numbersRef.current);
      }
    };
  }, []);

  return (
    <section className="numbers" ref={numbersRef}>
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
