import React, { useEffect, useState } from 'react'
import { deleteUser, getUsers } from '../../Api/api'
import UsersView from './UsersView'

const Users = () => {
  const [users,setUsers] = useState([])
  const [reload,setReload] = useState(false)
  const [checked,setChecked] = useState('')
  useEffect(()=>{
    const fetching = async ()=>{
      const users  = await getUsers();
      console.log(users);
      setUsers(users);
    }
    fetching()
  },[reload])

  const deleteHandler = async(id)=>{
const dropUser = await deleteUser(id);
console.log(dropUser);
setReload(!reload)
  }
  return (
    <>
    
    <UsersView checked={checked} deleteHandler={deleteHandler} setChecked={setChecked} users={users}/>
    </>
  )
}

export default Users