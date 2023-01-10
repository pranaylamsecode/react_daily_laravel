import React from 'react'

const Child = (props) => {
    const data={name:'pranay'}
  return (
    <>  
    <button onClick={()=>props.alert(data)} >Click</button>
    
    </>

    
  )
}

export default Child;