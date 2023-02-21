import React from 'react'
import { AiOutlineHeart ,AiOutlineEdit,AiOutlineMail,AiOutlinePhone,AiOutlineGlobal} from "react-icons/ai";
import { BiTrashAlt} from "react-icons/bi";

const UsersView = ({users,setChecked ,checked,deleteHandler}) => {
  return (
    <div className='p-4'>
    <div class="row row-cols-1 row-cols-md-4 g-4  ">
  {users&& users.map(user =><>
    <div class="col">
    <div class="card h-100">

   <img className='image bg-secondary-subtle ' src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy`} class="card-img-top" alt="..."/>

      <div class="card-body">
        <h5 class="card-title">{user.name}</h5>
        <p class="card-text d-flex align-items-center gap-1 m-0"><AiOutlineMail size={20}/>{user.email}</p>
        <p class="card-text d-flex align-items-center gap-1 m-0 my-1"><AiOutlinePhone size={20}/>{user.phone}</p>
        <p class="card-text d-flex align-items-center gap-1 m-0"><AiOutlineGlobal size={20}/>{user.website}</p>
      </div>
      <div class=" d-flex w-100 justify-content-between card-footer align-items-center">
        <p ><AiOutlineHeart onClick={()=> setChecked(user._id)}  className={`${checked === user._id?'text-danger':''} cursor-pointer`} size={30}/> </p>
     
        <p ><AiOutlineEdit className='cursor-pointer' size={30}/> </p>
       
        <p ><BiTrashAlt className='cursor-pointer' onClick={()=>deleteHandler(user._id)} size={30}/></p>
      </div>
    </div>
  </div>
  
  
  </>)}
 
</div>
    
    </div>
  )
}

export default UsersView