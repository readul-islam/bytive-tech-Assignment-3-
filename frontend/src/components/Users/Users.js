import React, { useEffect, useState } from "react";
import { deleteUser, getUsers, updateUser } from "../../Api/api";
import Modal from "../Modal";
import UsersView from "./UsersView";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  const [checked, setChecked] = useState("");
  const [selectedUser, setSelectedUser] = useState({});
  useEffect(() => {
    const fetching = async () => {
      const users = await getUsers();
      console.log(users);
      setUsers(users);
    };
    fetching();
  }, [reload]);

  const deleteHandler = async (id) => {
    const dropUser = await deleteUser(id);
    console.log(dropUser);
    setReload(!reload);
  };

  const handleSubmit = async (values) => {
    console.log(values);
    const updateUserInfo = await updateUser(selectedUser._id, values);
    console.log(updateUserInfo);
    setReload(!reload);
    setSelectedUser({});
  };
  return (
    <>
      <UsersView
        setSelectedUser={setSelectedUser}
        checked={checked}
        deleteHandler={deleteHandler}
        setChecked={setChecked}
        users={users}
      />
      {selectedUser && (
        <Modal selectedUser={selectedUser} handleSubmit={handleSubmit} />
      )}
    </>
  );
};

export default Users;
