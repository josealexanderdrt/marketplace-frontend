import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        userId,
        setUserId,
        username,
        setUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};