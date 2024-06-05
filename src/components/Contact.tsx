import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { animated, useSpring } from 'react-spring';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [responseMessage, setResponseMessage] = useState('');

  const onSubmit = (data) => {
    const serviceID = 'service_bbdtf7b';
    const templateID = 'template_dfe5571';
    const userID = '5RfyxZfnP8in02_kr';

    emailjs.send(serviceID, templateID, data, userID).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setResponseMessage('Correo enviado exitosamente!');
      },
      (error) => {
        console.log('FAILED...', error);
        setResponseMessage(
          'Error enviando el correo. Por favor, inténtalo de nuevo.'
        );
      }
    );
  };

  const formAnimation = useSpring({
    from: { transform: 'translateY(250px)' },
    to: { transform: 'translateY(0px)' },
  });

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const backgroundAnimation = useSpring({
    background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, #fc232b, #2442ad)`,
    config: { tension: 200, friction: 30 },
  });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCoords({ x: clientX, y: clientY });
  };

  return (
    <animated.div
      className="text-white p-8 nuestra-propuesta-section"
      style={backgroundAnimation}
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto">
        <div className="lg:text-center">
          <h2 className="text-base text-white font-semibold tracking-wide uppercase">
            Contacto
          </h2>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl">
            Contactate con nuestro equipo de ventas
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-500 text-center lg:mx-auto">
            Nuestros expertos te indicaran cómo podemos ayudar a tu empresa a
            obtener mejores resultados. Donde resolvemos tus dolores de cabeza.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-1/2">
            <animated.form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white text-black p-6 rounded-lg border-8 border-sky-500 mt-8"
              style={formAnimation}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  Nombre*
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  {...register('firstName', { required: true })}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs italic">
                    El nombre es requerido.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Apellido*
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  {...register('lastName', { required: true })}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs italic">
                    El apellido es requerido.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email laboral*
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">
                    Email es requerido.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="company"
                >
                  Empresa*
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="company"
                  type="text"
                  {...register('company', { required: true })}
                />
                {errors.company && (
                  <p className="text-red-500 text-xs italic">
                    Empresa es requerida.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phoneNumber"
                >
                  Número de celular*
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  type="text"
                  {...register('phoneNumber', { required: true })}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs italic">
                    El número es requerido.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Si tiene alguna consulta o pregunta, escriba aquí:
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  type="text"
                  {...register('message')}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
              {responseMessage && (
                <p className="mt-4 text-center">{responseMessage}</p>
              )}
            </animated.form>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Contact;
