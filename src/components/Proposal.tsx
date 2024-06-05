import React, { useState } from 'react';

import { Parallax } from 'react-parallax';
import { useSpring, animated } from 'react-spring';

import ServicesWheel from './ServicesWheel';
import AnimatedText from './utils/AnimatedText';

const backgroundImg = '/assets/images/bg-blue.png';

const NuestraPropuesta: React.FC = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const backgroundAnimation = useSpring({
    config: { tension: 200, friction: 30 },
  });

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setCoords({ x: clientX, y: clientY });
  };

  const enterLeft = useSpring({
    from: { transform: 'translateX(-200%)' },
    to: { transform: 'translateX(0%)' },
    config: { tension: 200, friction: 20, delay: 500 },
  });

  const enterRight = useSpring({
    from: { transform: 'translateX(200%)' },
    to: { transform: 'translateX(0%)' },
    config: { tension: 200, friction: 20 },
  });

  const enterTop = useSpring({
    from: { transform: 'translateY(-500%)' },
    to: { transform: 'translateY(0%)' },
    config: { tension: 200, friction: 20 },
  });

  return (
    <Parallax bgImage={backgroundImg} strength={1000}>
      <animated.section
        className="nuestra-propuesta-section-2 pt-40 py-14"
        onMouseMove={handleMouseMove}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <animated.div className="lg:text-left" style={{ enterTop }}>
            <p className="mt-2 text-5xl  text-tertiary leading-8 font-extrabold tracking-tight mb-10">
              NUESTRA
            </p>
            <p className="mt-2 text-5xl  text-primary leading-8 font-extrabold tracking-tight mb-10">
              PROPUESTA
            </p>
          </animated.div>
          <div className="flex">
            <div className="w-1/2">
              <animated.p
                className="mt-10 text-tertiary text-xl lg:text-left "
                style={enterLeft}
              >
                One Stop Solutions (OSS) es una empresa creada con el objetivo
                de brindar servicios de calidad que ayuden y faciliten a las
                empresas a tener un mejor enfoque en el core de su negocio.
                Adicionalmente, en línea con nuestra denominación, procuramos
                concentrar la gestión de las necesidades y desafíos
                empresariales en un único punto de contacto en lugar de
                dispersarla entre diversas entidades.
              </animated.p>
              <div className="mt-10">
                <animated.p
                  className="mt-10 text-xl text-tertiary"
                  style={enterRight}
                >
                  Tenemos una convicción sólida de que la excelencia en el
                  servicio constituye nuestro principal valor diferencial, lo
                  cual se traduce en la minimización de las interrupciones en el
                  funcionamiento empresarial de nuestros clientes.
                </animated.p>
              </div>
            </div>
            <div className="w-1/2 justify-center lg:items-center">
              <ServicesWheel />
              <AnimatedText />
            </div>
          </div>
        </div>
      </animated.section>
    </Parallax>
  );
};

export default NuestraPropuesta;
