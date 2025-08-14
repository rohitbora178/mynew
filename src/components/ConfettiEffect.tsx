import React from 'react';
// @ts-ignore
import ReactConfetti from 'react-confetti';

const ConfettiEffect: React.FC = () => {
  const [dimensions, setDimensions] = React.useState({ width: window.innerWidth, height: window.innerHeight });

  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <ReactConfetti width={dimensions.width} height={dimensions.height} numberOfPieces={250} recycle={false} />;
};

export default ConfettiEffect;
