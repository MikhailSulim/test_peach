import { Benefit } from '../../Benefit/Benefit';
import './Benefits.scss';

import React from 'react';

export const Benefits: React.FC = () => {
  return (
    <section className="benefits">
      <div className="benefits__compensation">
        <h2 className="benefits__compensation-title">Компенсационный пакет</h2>
        <div className="benefits__container">
          <Benefit iconId="dms" text="Дмс" />
          <Benefit iconId="cake" text="Выходной&#10;в день рождения" />
          <Benefit iconId="phone" text="Корпоративная мобильная связь" />
          <Benefit iconId="sport" text="Корпоративные скидки на спорт" />
          <Benefit iconId="hands" text="LTI" />
        </div>
      </div>

      <div className="benefits__extra">
        <h3 className="benefits__extra-title">Программа дополнительной мотивации<br/>
          <span className="benefits__extra-title_red">доплата 12% от суммы</span>
        </h3>
        <div className="benefits__container">
          <Benefit iconId="printer" text="Оргтехники" />
          <Benefit iconId="dms" text="ДМС" />
          <Benefit iconId="house" text="Ипотеки" />
        </div>
      </div>
    </section>
  );
};
