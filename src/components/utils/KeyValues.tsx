import React, { useState } from 'react';

import { Parallax } from 'react-parallax';
import { animated, useSpring } from 'react-spring';

import TabContent from './TabContent';

const backgroundImg = '/assets/images/bg-blue.png';

const tabs = [
  {
    id: 'tab-1',
    title: 'Integridad',
    subtitle: 'Nuestro Compromiso',
    description:
      'Actuamos con transparencia y honestidad en todas nuestras interacciones.',
    imgSrc: '/assets/images/integrity.png',
    gradientText: 'Nuestro Compromiso',
  },
  {
    id: 'tab-2',
    title: 'Responsabilidad',
    subtitle: 'Nuestra Promesa',
    description:
      'Asumimos la responsabilidad de nuestras acciones y su impacto en la comunidad y el medio ambiente.',
    imgSrc: '/assets/images/respons.png',
    gradientText: 'Nuestra Promesa',
  },
  {
    id: 'tab-3',
    title: 'Colaboración',
    subtitle: 'Nuestro Trabajo en Equipo',
    description:
      'Trabajamos juntos, en constante comunicación con el cliente para brindarle el mejor servicio posible y asegurar una solución a medida.',
    imgSrc: '/assets/images/collab.png',
    gradientText: 'Nuestro Trabajo en Equipo',
  },
  {
    id: 'tab-4',
    title: 'Calidad',
    subtitle: 'Nuestra Meta',
    description:
      'Nos esforzamos por superar las expectativas de nuestros clientes con soluciones de alta calidad.',
    imgSrc: '/assets/images/f-quality.png',
    gradientText: 'Nuestra Meta',
  },
];

const KeyValues = () => {
  const animateText = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const animateTab = useSpring({
    from: { translateX: -1000 },
    to: { translateX: 0 },
  });

  const [activeTab, setActiveTab] = useState('tab-1');

  return (
    <Parallax bgImage={backgroundImg} className="container mx-auto p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="lg:text-center">
          <animated.h2
            style={animateText}
            className="text-base text-primary font-semibold tracking-wide uppercase"
          >
            SOLUCIONES INTEGRALES A MEDIDA
          </animated.h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-tertiary sm:text-4xl">
            NUESTROS VALORES FUNDAMENTALES
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            En OSS, creemos en la importancia de mantener una ética sólida y un
            compromiso constante con nuestros clientes y empleados. Nuestros
            valores fundamentales son:
          </p>
        </div>
      </div>
      <div className="tabs">
        <div className="tab-buttons justify-center text-tertiary   mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${
                activeTab === tab.id ? 'active' : ''
              } p-4 m-2 text-3xl`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="count-text">
                <span className="theme-gradient">{`0${
                  tabs.indexOf(tab) + 1
                }`}</span>
              </div>
              <h4 className="title">{tab.title}</h4>
            </button>
          ))}
        </div>
        <animated.div
          style={animateTab}
          className="tab-contents text-tertiary "
        >
          {tabs.map((tab) => (
            <TabContent
              key={tab.id}
              active={activeTab === tab.id}
              subtitle={tab.subtitle}
              title={tab.title}
              description={tab.description}
              image={tab.imgSrc}
              gradientText={tab.gradientText}
            />
          ))}
        </animated.div>
      </div>
    </Parallax>
  );
};

export default KeyValues;
