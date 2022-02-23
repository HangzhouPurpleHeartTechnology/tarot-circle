import React from 'react';

const ChartImageGenerator = () => {
  var data = {
    planets: {
      Lilith: [18],
      Chiron: [18],
      Pluto: [63],
      Neptune: [110, 0.2],
      Uranus: [318],
      Saturn: [201, -0.2],
      Jupiter: [192],
      Mars: [210],
      Moon: [268],
      Sun: [281],
      Mercury: [312],
      Venus: [330],
      NNode: [2],
    },
    cusps: [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274],
  };
  return (
    <div>
      <h1>ChartImageGenerator</h1>
    </div>
  );
};

export default ChartImageGenerator;
