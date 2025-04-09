import React from "react";

const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
      {age >= 18 ? <p>Can drive</p> : <p>Can't drive</p>}
    </div>
  );
};

export default UserDetails;
