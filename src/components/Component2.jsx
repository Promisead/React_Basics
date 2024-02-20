import React, { useContext } from "react";
import { useUser } from "../context/UserContext";

const Component2 = () => {
  const { user } = useUser();
  return <div> Mr {user} welcome to component 2 </div>;
};

export default Component2;
