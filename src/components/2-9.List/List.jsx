import React from "react";

export default function List() {
  const todos = [
    { id: 1, text: "a" },
    { id: 2, text: "b" },
    { id: 3, text: "c" },
    { id: 4, text: "d" },
  ];

  const Item = (props) => {
    return (
      <li>
        {props.id}: {props.text}
      </li>
    );
  };

  return (
    <ul>
      {todos.map((todo) => (
        <Item key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
