const CareScale = ({ careType, scaleValue }) => {
  const range = [1, 2, 3];
  const scaleType = careType === 'light' ? '☀️' : '💧';

  return (
    <div>
      {range.map((element) => (
        scaleValue >= element ? <span key={element.toString()}>{scaleType}</span> : null
      ))}
    </div>
  );
};

export default CareScale
