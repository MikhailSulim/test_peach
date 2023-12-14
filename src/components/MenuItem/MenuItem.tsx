import './MenuItem.scss';

import React from 'react';

type MenuItemProps = {
  name: string;
  label: string;
  onClick: () => {};
};

export const MenuItem: React.FC<MenuItemProps> = ({ name, label, onClick }) => {
  return (
    <div id={name} className="menu-item menu-item_selected" onClick={onClick}>
      {label}
    </div>
  );
};
