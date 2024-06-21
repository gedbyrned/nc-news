import { useState, useEffect } from "react";
import { getUsers } from "../utils/Api";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const {user, setUser} = useContext(UserContext)


  console.log(users)
  useEffect(() => {
    getUsers().then((usersFromApi) => {
        console.log(usersFromApi)
      setUsers(usersFromApi);
    });
  }, []);

  return (
    <></>
  );
};
