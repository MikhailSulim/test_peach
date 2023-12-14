import React from 'react'

type IconProps = {
  iconId: string;
};

const Icon: React.FC<IconProps> = ({ iconId }) => {
  return (
    <svg >
      <use xlinkHref={`sprite.svg#${iconId}`} />
    </svg>
  );
};

export default Icon