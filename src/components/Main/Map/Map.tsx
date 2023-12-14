import './Map.scss';
import Icon from '../../Icon/Icon';
import { MapRF } from './MapRF';

import React, { useEffect, useRef, useState } from 'react';

export const Map = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const mapRef = useRef<HTMLDivElement | null>(null);

  type MenuItemProps = {
    name: string;
    label: string;
  };

  useEffect(()=>{
    mapRef.current?.querySelector(`#${selectedRegion}_cities`)?.setAttribute('display','visible');
  },[selectedRegion]);

  const MenuItem: React.FC<MenuItemProps> = ({ name, label }) => {
    return (
      <div
        id={name}
        className={`map__regions-item ${
          name === selectedRegion && 'map__regions-item_selected'
        }`}
        onClick={() => setSelectedRegion(name)}
      >
        {label}
      </div>
    );
  };

  return (
    <section className="map">
      <div className="map__header">
        <div className="map__btn">
          <p className="map__btn-title">Офисы Softline</p>
          <Icon iconId="arrDown" />
        </div>

        <nav className="map__regions">
          <MenuItem name="all" label="Все" />
          <MenuItem name="moscow" label="Москва" />
          <MenuItem name="center" label="Центр" />
          <MenuItem name="nw" label="Северо-Запад" />
          <MenuItem name="south" label="Юг" />
          <MenuItem name="volga" label="Волга" />
          <MenuItem name="ural" label="Урал" />
          <MenuItem name="siberia" label="Сибирь" />
          <MenuItem name="dv" label="Дальний восток" />
        </nav>
      </div>

      <div ref={mapRef} className="map__map">
        <MapRF currentRegion={selectedRegion} />
      </div>

      {/* </div> */}
    </section>
  );
};
