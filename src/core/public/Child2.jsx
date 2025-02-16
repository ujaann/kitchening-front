import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

function Child2() {
  const {info,setInfo} = useContext(AuthContext);
  console.log(info);
  return (
    <> I am child2
      <input type='text'onChange={(e)=>setInfo({"username":e.target.value,"password":"oo"})}/>
      {info?.username},

    </>
  )
}

export default Child2