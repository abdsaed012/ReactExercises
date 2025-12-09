import { useState } from "react"

const LoginForm = ()=>{

  const [username,setUsername] =useState('')
  const [password,setPassword] = useState('')
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const handleUsername = (e)=>{
    setUsername(e.target.value)
    // console.log(e.target.value)
  }

  const handlePassword =(e)=>{
    setPassword(e.target.value)
  }

  const handleLoginButton =()=>{
    if(username && password){
      setIsLoggedIn(true);
    }
  }

 

  const handleLogout =()=>{
    setUsername('');
    setPassword('');
    setIsLoggedIn(false);
  }

   if (isLoggedIn) {
    return (
      <div>
        <h1>Soodhawoow, {username}!</h1>
        <button onClick={handleLogout} >Logout</button>
      </div>
    );
  }

  return(
    <div>
      <h2>Login Form</h2>
      <p>username:<input type="text" onChange={handleUsername} required/></p>
      <p>password:<input type="password" onChange={handlePassword} required/></p>
      <button onClick={handleLoginButton}>Login</button>
    </div>
  )
}

export default LoginForm