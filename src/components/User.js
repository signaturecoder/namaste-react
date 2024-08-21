import React, { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => console.log("USer Component Loaded"), 1000);

    // cleanup the interval when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="user-card">
      <h2>Count = {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
      <h5>Contact: @singaturecoder</h5>
    </div>
  );
};

export default User;
