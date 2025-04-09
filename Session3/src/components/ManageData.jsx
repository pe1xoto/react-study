import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  console.log(someData);

  const [number, setNumber] = useState(15);

  console.log(number);

  return (
    <div>
      <div>
        <p>Value: {someData}</p>
        <button onClick={() => (someData = 15)}>Variable Change</button>
      </div>
      <div>
        <p>Value: {number}</p>
        <button onClick={() => setNumber(25)}>State Change</button>
      </div>
    </div>
  );
};

export default ManageData;
