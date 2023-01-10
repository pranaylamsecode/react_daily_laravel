import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext(); 


function Component1() {
  const [user, setUser] = useState("Jesse Hall");
  const [user2, setUser2] = useState('Pranay Lamse')


  return (
    <UserContext.Provider value={[user, user2] }>
      <h1>{`Hello ${user[0]}!`}</h1> <br/>
      <Component2 />
    </UserContext.Provider>
  );
}



function Component2() {
  return (
    <>
      <h1>Component 2</h1> <br/>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1> <br/>
      <Component4 />
    </>
  );
}

function Component4() {

  const user2 = useContext(UserContext)
  console.log(user2)
  return (
    <>
    
      <h1>Component 4 { user2[1]} </h1><br/>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user[0]} again!`}</h2><br/>
    </>
  );
}

export default function App() {


  return (
    <>
    <Component1 />
    </>
  )
}
