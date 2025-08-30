import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './regform.css'
const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail] = useState("");
  let navigate = useNavigate();

  const handleSubmit= async (e) =>{
    e.preventDefault();
    const requestOptions = {
        method : 'POST' ,
        headers: {
            'Content-Type': 'application/json'
        },
        body :JSON.stringify({ username: username, password: password , email : email})
        }
    console.log(username,password)
    const response = await fetch('http://localhost:3001/register', requestOptions)
    const data = await response.json();
    console.log(data)
    navigate("/login");
  }
  return (
    <div class="login-page">
    <div class="form">
   REGISTER AN ACCOUNT
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        <input
          type="String"
          value={email}
          placeholder="email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type = 'submit'>Submit</button>
    </form>
    </div>
    </div>
  );
};
export default Form;