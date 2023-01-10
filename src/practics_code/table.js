import React from 'react'
import Table from 'react-bootstrap/Table';
function App()
{
  
  const students = [
    {name:"pranay", email:"pranay@test.com"},
    {name:"sayali", email:"saylai@tets.com"}
  ];
  return (
    <>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Emai </th>
          
        </tr>
      </thead>
      <tbody>
      {
        students.map((item,i)=>{
          return (
            <tr>
            <td>{i+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            
          </tr>
          )
        })
      }
      </tbody>
    </Table>


     

    </>
  )
}

export default App;

////
by  condition 
import React from 'react'
import Table from 'react-bootstrap/Table';
function App()
{
  
  const students = [
    {name:"pranay", email:"pranay@test.com"},
    {name:"sayali", email:"saylai@tets.com"}
  ];
  return (
    <>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Emai </th>
          
        </tr>
      </thead>
      <tbody>
      {
        students.map((item,i)=>{
          return (
           item.name === 'pranay'? <tr>
           <td>{i+1}</td>
           <td>{item.name}</td>
           <td>{item.email}</td>
           
         </tr>: null
          )
        })
      }
      </tbody>
    </Table>


     

    </>
  )
}

export default App;
