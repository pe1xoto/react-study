import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Sadakiyo");

  return (
    <div>
      <h1>Will this be displayed?</h1>
      {x && <p>If x is true, yes!</p>}
      {!x && <p>Now x is false</p>}
      <h1>If ternário</h1>
      {name === "Pe1xoto" ? (
        <div>
          <p>The name is Peixoto</p>
        </div>
      ) : (
        <div>
          <p>Name not found</p>
        </div>
      )}
      <button onClick={() => setName("Pe1xoto")}>Don't click here !!!</button>
    </div>
  );
};

export default ConditionalRender;
