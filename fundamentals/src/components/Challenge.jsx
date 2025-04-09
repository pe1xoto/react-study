const Challenge = () => {
  const a = 7;
  const b = 7;

  const handleSum = () => {
    console.log(a + b);
  };

  return (
    <div>
      <h1>Primeiro Challenge</h1>
      <p>
        {a} + {b}
      </p>
      <button onClick={handleSum}>Somar</button>
    </div>
  );
};

export default Challenge;
