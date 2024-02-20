import React, { useState } from "react";
import Component2 from "./Component2";
import { UserProvider } from "../context/UserContext";
import Component5 from "./Component5";

const Component1 = () => {
  const [username, setUsername] = useState("Jameson Black");

  return (
    <>
      <UserProvider>
        <h1>welcome back to context API</h1>
        <Component2 />
        <Component5 />
      </UserProvider>
    </>
  );
};

export default Component1;
