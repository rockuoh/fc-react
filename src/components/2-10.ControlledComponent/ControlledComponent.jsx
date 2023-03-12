import React, { useState, useRef } from "react";

export default function ControlledComponent() {
  const [name, setName] = useState("");
  const fileInputRef = useRef(null);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("the value submitted is: " + name);
    alert(`the file submitted is: ${fileInputRef.current.files[0].name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input value={name} onChange={handleChange} />
      </label>
      <label>
        File:
        <input type="file" ref={fileInputRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
