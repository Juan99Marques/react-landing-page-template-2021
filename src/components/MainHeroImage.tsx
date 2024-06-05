import React from 'react';

import { animated, useSpring } from 'react-spring';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;

  const [style, set] = useSpring(() => ({
    transform: 'translateX(0px) translateY(0px)',
  }));

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = (clientY / window.innerHeight) * 2 - 1;
    set({ transform: `translateX(${x * 20}px) translateY(${y * 20}px)` });
  };

  const handleMouseLeave = () => {
    set({ transform: 'translateX(0px) translateY(0px)' });
  };

  return (
    <animated.div
      className=" wave-container lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={mainHero.img}
        alt="happy team image"
      />
      <div className="wave-overlay"></div>
    </animated.div>
  );
};

export default MainHeroImage;
