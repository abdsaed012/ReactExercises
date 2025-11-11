
import Greeting from "./UserCard"

const App = ()=>{

  const username = "Abdsaed"
  const role = "CEO";
  
  return (
    <>
    <Greeting name={username} 
    role = {role}/>
    <Greeting name={"Ahmed"} 
    role = {"CTO"}/>
    <Greeting name={"Gulled"} 
    role = {"Assistant"}/>


    </>
    
  )
}

export default App;