import React from 'react';

import TextLoop from 'react-text-loop';

const COLORS = ['#EF4444', '#EC4899', '#8B5CF6', '#6366F1', '#3B82F6'];
const texts = [
  'SISTEMAS DE SEGURIDAD',
  'INFRAESTRUCTURA TECNOLOGICA',
  'FACILITY MANAGEMENT',
  'NETWORKING',
  'SOLUCIONES DE SOFTWARE',
];

const AnimatedText = () => {
  return (
    <div className="title display-one text-center mt-10 w-100 items-center">
      <h1 className="text-3xl font-bold text-center">
        <br />
        <TextLoop interval={900} mask={true}>
          {texts.map((text, index) => (
            <span key={index} style={{ color: COLORS[index % COLORS.length] }}>
              {text}
            </span>
          ))}
        </TextLoop>
        <br />
      </h1>
    </div>
  );
};

export default AnimatedText;
