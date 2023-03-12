import React, { useState } from "react";

const UserGreeting = (props) => {
  return <h1> {props.name && props.name + ","} Welcome. </h1>;
};

const GuestGreeting = () => {
  return <div> Please Sign In</div>;
};

const Greeting = (props) => {
  return props.isLoggedIn ? (
    <UserGreeting name="Rocku Oh" />
  ) : (
    <GuestGreeting />
  );
};

export default function Condition() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginClick = (props) => {
    setIsLoggedIn((current) => !current);
  };

  return (
    <div>
      <button onClick={loginClick}> login </button>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
