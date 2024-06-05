import React from 'react';

import { animated, useSpring } from 'react-spring';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, subtitle, description, items: featuresList } = features;

  const featuresAnimation = useSpring({
    from: { transform: 'translateY(100px)' },
    to: { transform: 'translateY(0px)' },
  });

  return (
    <div className="py-12 bg-background" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-tertiary sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => {
              const [hoverAnimation, setHoverAnimation] = useSpring(() => ({
                transform: 'scale(1)',
              }));

              const onHoverAnimation = () => {
                setHoverAnimation({ transform: 'scale(1.1)' });
              };

              const onHoverAnimationOut = () => {
                setHoverAnimation({ transform: 'scale(1)' });
              };

              return (
                <animated.div
                  key={feature.name}
                  className="relative"
                  style={{ ...featuresAnimation, ...hoverAnimation }}
                  onMouseEnter={onHoverAnimation}
                  onMouseLeave={onHoverAnimationOut}
                >
                  <dt>
                    <div className="absolute flex items-center justify-center h-18 w-18 rounded-md bg-background text-tertiary border-primary border-4">
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src={feature.icon}
                        alt={feature.name}
                      />
                    </div>
                    <p className="ml-16 text-xl leading-6 text-primary font-bold">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-lg text-gray-500">
                    {feature.description}
                  </dd>
                </animated.div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
