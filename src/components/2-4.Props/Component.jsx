import React from "react";

function Welcome(props) {
  return <h1> hello, {props.name} </h1>;
}

export default function Composition() {
  return (
    <div>
      <Welcome name="sara" />
    </div>
  );
}
