import React, {useState,useEffect} from 'react'


function User(props)
{
    useEffect(()=>{
      
    },props.data)

    useEffect(()=>{
        alert('count', props.count)
    },props.count)

  return (
    <div>
      <h2>{props.count}</h2>
      <h3>Data : {props.data}</h3>

     
    </div>
  )
}


export default User;