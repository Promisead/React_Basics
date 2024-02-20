import React, { useContext } from "react";
import { useUser } from "../context/UserContext";

const Component5 = () => {
  const { user, updateUser } = useUser();

  const handleUpdateUser = () => {
    // You can update the user name using the updateUser function
    const newName = prompt("Enter the new name:");
    if (newName) {
      updateUser(newName);
    }
  };

  return (
    <>
      <h2>{` ${user}, Welcome to Component 5`}</h2>
      <button onClick={handleUpdateUser}>Update Name</button>
    </>
  );
};

export default Component5;
