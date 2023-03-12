import React from "react";
import Extraction from "./Extraction/Extraction";

function Welcome(props) {
  return <h1> hello, {props.name} </h1>;
}

export default function Composition() {
  return (
    <div>
      <Welcome name="sara" />
      <Extraction />
    </div>
  );
}
