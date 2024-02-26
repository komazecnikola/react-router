import { createContext, useReducer } from "react";
import { usersReducer } from "../reducer/usersReducer";
export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [users, dispatch] = useReducer(usersReducer, []);
  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
