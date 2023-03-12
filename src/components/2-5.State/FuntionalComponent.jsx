import React, { useState, useEffect } from "react";

export default function FuntionalComponent() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}. by Functional component</h2>
    </div>
  );
}
