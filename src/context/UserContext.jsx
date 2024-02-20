import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Watson Julius");
  const updateUser = (newName) => {
    setUser(newName);
  };
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("userUser must be used within a UserProvider");
  }
  return context;
};
//export default UserContext;
