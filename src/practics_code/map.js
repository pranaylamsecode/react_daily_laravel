import React from 'react'

function App()
{
  
  const students = ['Anil', 'Pranay', 'lamse'];
  return (
    <div>
      {
        students.map((item)=>{
          return (
            <div>
              <h2>{item}</h2>
            </div>
          )
        })
      }

    </div>
  )
}

export default App;


///////

import React from 'react'

function App()
{
  
  const students = [
    {name:"pranay", email:"pranay@test.com"},
    {name:"sayali", email:"saylai@tets.com"}
  ];
  return (
    <div>
      {
        students.map((item)=>{
          return (
            <div key={item}>
              <h2>{item.name}</h2>
              <h2>{item.email}</h2>
            </div>
          )
        })
      }

    </div>
  )
}

export default App;


/////////
