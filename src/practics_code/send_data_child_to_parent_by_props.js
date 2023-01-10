import React from 'react'
import Child from './Child'


function App()
{

  function parent_function(data)
  {
    console.log(data)
  }
  return(
    <>
      <h2>App Component</h2>
        <Child alert={parent_function} />
    </>
  )
}


export default App;

//
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


