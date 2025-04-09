const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);

    console.log("Start Event!!!");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Render 1</h1>;
    }
    return <h1>Render 2</h1>;
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Click Here</button>
      </div>
      <div>
        <br />
        <button onClick={() => console.log("Click!")}>
          Click Here too!!!
        </button>{" "}
        <br />
        <button
          onClick={() => {
            if (true) {
              console.log("Fake =)");
            }
          }}
        ></button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
