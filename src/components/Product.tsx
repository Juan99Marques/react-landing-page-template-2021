import { Parallax } from 'react-parallax';
import { useSpring, animated } from 'react-spring';

import config from '../config/index.json';
import Divider from './Divider';

const backgroundImg = '/assets/images/bg-blue.png';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem, thirdItem, fourthItem, fifthItem] =
    product.items;

  const animatedLeft = useSpring({
    transform: 'translateX(0%)',
    from: { transform: 'translateX(-100%)' },
    config: { tension: 200, friction: 20 },
  });

  const animatedRight = useSpring({
    transform: 'translateX(0%)',
    from: { transform: 'translateX(100%)' },
    config: { tension: 200, friction: 20 },
  });

  const [props, set] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 200, friction: 10 },
  }));

  const [breath, setBreath] = useSpring(() => ({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.05)' },
    config: { duration: 1000 },
    loop: { reverse: true },
  }));

  const handleMouseEnter = () => set({ transform: 'scale(1.05)' });
  const handleMouseLeave = () => set({ transform: 'scale(1)' });

  return (
    <Parallax
      bgImage={backgroundImg}
      strength={1000}
      className="product-bg py-8"
    >
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-primary">
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <animated.div
          className="flex flex-wrap"
          style={animatedLeft}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <animated.div style={props} className="w-5/6 sm:w-1/2 p-6 mt-20">
            <h3 className="text-3xl text-primary font-bold leading-none mb-3">
              {firstItem?.title}
            </h3>
            <p className="text-tertiary">{firstItem?.description}</p>
          </animated.div>
          <animated.div style={breath} className="w-full sm:w-1/2 p-6">
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </animated.div>
        </animated.div>
        <animated.div
          className="flex flex-wrap flex-col-reverse sm:flex-row"
          style={animatedRight}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <animated.div style={breath} className="w-full sm:w-1/2 p-6">
            <img
              className="h-6/6"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </animated.div>
          <animated.div style={props} className="w-full sm:w-1/2 p-6 mt-20">
            <div className="align-middle">
              <h3 className="text-3xl text-primary font-bold leading-none mb-3">
                {secondItem?.title}
              </h3>
              <p className="text-tertiary mb-8">{secondItem?.description}</p>
            </div>
          </animated.div>
        </animated.div>
        <animated.div
          className="flex flex-wrap"
          style={animatedLeft}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <animated.div style={props} className="w-5/6 sm:w-1/2 p-6 mt-20">
            <h3 className="text-3xl text-primary font-bold leading-none mb-3">
              {thirdItem?.title}
            </h3>
            <p className="text-tertiary">{thirdItem?.description}</p>
          </animated.div>
          <animated.div style={breath} className="w-full sm:w-1/2 p-6">
            <img
              className="h-6/6"
              src={thirdItem?.img}
              alt={thirdItem?.title}
            />
          </animated.div>
        </animated.div>
        <animated.div
          className="flex flex-wrap flex-col-reverse sm:flex-row"
          style={animatedRight}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <animated.div style={breath} className="w-full sm:w-1/2 p-6">
            <img
              className="h-6/6"
              src={fourthItem?.img}
              alt={fourthItem?.title}
            />
          </animated.div>
          <animated.div style={props} className="w-full sm:w-1/2 p-6 mt-20">
            <div className="align-middle">
              <h3 className="text-3xl text-primary font-bold leading-none mb-3">
                {fourthItem?.title}
              </h3>
              <p className="text-tertiary mb-8">{fourthItem?.description}</p>
            </div>
          </animated.div>
        </animated.div>
        <animated.div
          className="flex flex-wrap"
          style={animatedLeft}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <animated.div style={props} className="w-5/6 sm:w-1/2 p-6 mt-20">
            <h3 className="text-3xl text-primary font-bold leading-none mb-3">
              {fifthItem?.title}
            </h3>
            <p className="text-tertiary">{fifthItem?.description}</p>
          </animated.div>
          <animated.div style={breath} className="w-full sm:w-1/2 p-6">
            <img
              className="h-6/6"
              src={fifthItem?.img}
              alt={fifthItem?.title}
            />
          </animated.div>
        </animated.div>
      </div>
    </Parallax>
  );
};

export default Product;
