const careInfo = (type, value) => {
  const scaleType = type === 'light' ? 'de lumière' : "d'arrosage";
  let dose = "";
  if (value === 1) {
    dose = "peu";
  } else if (value === 2) {
    dose = "modérement";
  } else {
    dose = "beaucoup";
  }
  alert(`Cette plante requiert ${dose} ${scaleType}`);
};

const CareScale = ({ careType, scaleValue }) => {
  const range = [1, 2, 3];
  const scaleType = careType === 'light' ? '☀️' : '💧';

  return (
    <div onClick={() => careInfo(careType, scaleValue)}>
      {range.map((element) => (
        scaleValue >= element ? <span className="lmj-care-span" key={element.toString()}>{scaleType}</span> : null
      ))}
    </div>
  );
};

export default CareScale;
