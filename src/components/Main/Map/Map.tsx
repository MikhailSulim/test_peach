import './Map.scss';
import Icon from '../../Icon/Icon';
import { MapRF } from './MapRF';
import { OFFICES } from '../../../utils/constants';
import { useWindowWidth } from '../../../hooks/useWindowWidth';

import React, { useEffect, useRef, useState } from 'react';

/**
 * Render map of RF
 * @returns {JSX.Element}
 */

export const Map: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const [isRegionsMobile, setIsRegionsMobile] = useState<boolean>(false);
  const [isDrawerShow, setIsDrawerShow] = useState<boolean>(false);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const windowWidth = useWindowWidth();

  type MenuItemProps = {
    name: string;
    label: string;
  };

  useEffect(() => {
    windowWidth <= 768 ? setIsRegionsMobile(true) : setIsRegionsMobile(false);
  }, [windowWidth]);

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
          name === selectedRegion ? 'map__regions-item_selected' : ''
        }`}
        onClick={() => setSelectedRegion(name)}
      >
        {label}
      </div>
    );
  };

  type RegionColumnProps = {
    region: { region: string; cities: string[] };
  };

  const RegionColumn: React.FC<RegionColumnProps> = ({ region }) => {
    const [isRegionOpen, setIsRegionOpen] = useState<boolean>(!isRegionsMobile);
    return (
      <div key={region.region} className="map__drawer-column">
        <p className="map__drawer-column-title">
          {region.region}{' '}
          {isRegionsMobile && (
            <button
              type="button"
              className={`${
                isRegionOpen
                  ? 'map__drawer-column-btn'
                  : 'map__drawer-column-btn map__drawer-column-btn_collapse'
              }`}
              onClick={() => {
                setIsRegionOpen(!isRegionOpen);
              }}
            >
              <Icon iconId="arrDownReg" />
            </button>
          )}
        </p>

        {region.cities.map((city) => (
          <p
            key={city}
            className={`${
              isRegionOpen
                ? 'map__drawer-column-item'
                : 'map__drawer-column-item map__drawer-column-item_collapse'
            }`}
          >
            {city}
          </p>
        ))}
      </div>
    );
  };

  const DrawerContainer: React.FC = () => {
    return isDrawerShow ? (
      // <div
      // className={`map__drawer ${isDrawerShow ? 'map__drawer_visible' : ''}`}
      // >
      <div className="map__drawer-container">
        {OFFICES.map((region) => (
          <RegionColumn key={region.region} region={region} />
        ))}
      </div>
      // </div>
    ) : (<></>);
  };

  return (
    <section className="map">
      
      {!isRegionsMobile && <div
        className={`map__drawer ${isDrawerShow ? 'map__drawer_visible' : ''}`}
      >
        <DrawerContainer />
      </div>}

      <div className="map__header">
        <div
          className={`map__btn ${
            isDrawerShow ? 'map__btn_drawer-visible' : ''
          }`}
          onClick={() => setIsDrawerShow(!isDrawerShow)}
        >
          <p className="map__btn-title">Офисы Softline</p>
          <Icon iconId="arrDown" />
        </div>

        {isDrawerShow ? (
          <DrawerContainer />
        ) : (
          <nav
            className={`map__regions ${
              isDrawerShow ? 'map__regions_drawer-visible' : ''
            }`}
          >
            <MenuItem key="all" name="all" label="Все" />
            <MenuItem key="moscow" name="moscow" label="Москва" />
            <MenuItem key="center" name="center" label="Центр" />
            <MenuItem key="nw" name="nw" label="Северо-Запад" />
            <MenuItem key="south" name="south" label="Юг" />
            <MenuItem key="volga" name="volga" label="Волга" />
            <MenuItem key="ural" name="ural" label="Урал" />
            <MenuItem key="siberia" name="siberia" label="Сибирь" />
            <MenuItem key="dv" name="dv" label="Дальний восток" />
          </nav>
        )}
      </div>

      <div
        ref={mapRef}
        className={`map__map ${isDrawerShow ? 'map__map_drawer-visible' : ''}`}
      >
        <MapRF currentRegion={selectedRegion} />
      </div>
    </section>
  );
};
