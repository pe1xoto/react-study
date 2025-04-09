import { Fragment, useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import lombra from "./assets/lombra.png";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragmentt from "./components/Fragmentt";
import Container from "./components/Container";
import ExeFunction from "./components/ExeFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  const [count, setCount] = useState(0);
  const name = "Peixoto";
  const [userName] = useState("Peixoto");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Yellow", newCar: true, km: 0 },
    { id: 2, brand: "Porsche", color: "Vermelho", newCar: false, km: 50000 },
    { id: 3, brand: "Lamborghini", color: "Blue", newCar: false, km: 0 },
  ];

  function showMessage() {
    console.log("Parent component event!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    { id: 1, name: "Peixoto", job: "Developer", age: 20 },
    { id: 2, name: "Flakao", job: "Content Creator", age: 30 },
    { id: 5, name: "Neymar", job: "Infinite injury", age: 33 },
    { id: 4, name: "Henrique", job: "Clown", age: 16 },
  ];

  return (
    <>
      <div>
        <h1>Session3</h1>
        {/* Img public */}
        <div>
          <img src="/Miau.jpg" alt="Miau" />
        </div>
        {/* Img assets */}
        <div>
          <img src={lombra} alt="lombra" />
        </div>
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="Porsche" km={50000} color="Red" />
      {/* reaproveitamento */}
      <CarDetails brand="Ferrari" km={0} color="Blue" newCar={true} />
      <CarDetails brand="Lamborghini" km={0} color="Yellow" newCar={false} />
      {/* loop em array */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragmentt propFragment="test" />
      {/* children */}
      <Container myValue="testing">
        <p>Children</p>
      </Container>
      <Container myValue="fullbox 200">
        <h5>Container test</h5>
      </Container>
      {/* function exe */}
      <ExeFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* challenge */}
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          job={user.job}
          age={user.age}
        />
      ))}
    </>
  );
}

export default App;
