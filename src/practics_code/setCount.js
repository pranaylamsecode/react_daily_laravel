import React, {useState,useEffect} from 'react'

import User from './User'

function App()
{

  const [count,setCount] = useState(0);
  const [data, setData] = useState(2);
  return (
    <div>
      {/* <h2>{count}</h2>
      <h3>Data : {data}</h3> */}
      <User count={count} data={data} />
      <button onClick={()=>setCount(count+1)}>Update</button>
      <button onClick={()=>setData(data+1)}>Update Data</button>
    </div>
  )
}


export default App;