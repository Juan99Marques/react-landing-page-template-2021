import React, { useState } from 'react';

import { useSpring, animated, config } from 'react-spring';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Sistemas de seguridad', value: 1 },
  { name: 'Infraestructura tecnológica', value: 1 },
  { name: 'Facility Management', value: 1 },
  { name: 'Networking', value: 1 },
  { name: 'Soluciones de software', value: 1 },
];

const COLORS = ['#EF4444', '#EC4899', '#8B5CF6', '#6366F1', '#3B82F6'];

const AnimatedPieChart = animated(PieChart);

const ServicesWheel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const props = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    config: { duration: 90000, ...config.linear },
    loop: true,
  });

  return (
    <div className="relative w-100 h-80 mx-auto flex items-center justify-center">
      <AnimatedPieChart width={400} height={400} style={props}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={100}
          outerRadius={160}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={false}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </Pie>
      </AnimatedPieChart>
      <div className="absolute inset-0 flex items-center justify-center text-secondary text-3xl font-bold"></div>
    </div>
  );
};

export default ServicesWheel;
