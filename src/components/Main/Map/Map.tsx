import './Map.scss';
import Icon from '../../Icon/Icon';
import { MapRF } from './MapRF';
import { OFFICES } from '../../../utils/constants';

import React, { useEffect, useRef, useState } from 'react';

/**
 * Render map of RF
 * @returns {JSX.Element}
 */

export const Map: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [isDrawerShow, setIsDrawerShow] = useState<boolean>(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  type MenuItemProps = {
    name: string;
    label: string;
  };

  useEffect(() => {
    mapRef.current
      ?.querySelector(`#${selectedRegion}_cities`)
      ?.setAttribute('display', 'visible');
  }, [selectedRegion]);

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
      <div className={`map__drawer ${isDrawerShow && 'map__drawer_visible'}`}>
        <div className="map__drawer-container">
          {OFFICES.map((region, idx) => (
            <div className="map__drawer-column">
              <p className="map__drawer-column-title">{region.region}</p>
              {region.cities.map((city) => (
                <p className="map__drawer-column-item">{city}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="map__header">
        <div
          className={`map__btn ${isDrawerShow && 'map__btn_drawer-visible'}`}
          onClick={() => setIsDrawerShow(!isDrawerShow)}
        >
          <p className="map__btn-title">Офисы Softline</p>
          <Icon iconId="arrDown" />
        </div>

        <nav
          className={`map__regions ${
            isDrawerShow && 'map__regions_drawer-visible'
          }`}
        >
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

      <div
        ref={mapRef}
        className={`map__map ${isDrawerShow && 'map__map_drawer-visible'}`}
      >
        <MapRF currentRegion={selectedRegion} />
      </div>
    </section>
  );
};
