import { useEffect, useState } from 'react';
import {Button , InputGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const[user, setUsers]=useState([])
  const[newName, setNewName]=useState('')
  const[newPhone, setNewPhone]=useState('')
  const[newWebsite, setNewWebsite]=useState('')
  const[newEmail, setNewEmail]=useState('')

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=> setUsers(data))
},[])

  function addUser(){
    const Name = newName.trim();
    const Email = newEmail.trim();
    const Phone = newPhone.trim();
    const Webpage = newWebsite.trim();
  
    
    console.log(Name, Phone, Webpage, Email);

    fetch("https://jsonplaceholder.typicode.com/users",
    {
      method: 'POST',
      body: JSON.stringify({
        Name,
        Email,
        Phone,
        Webpage,
        
    }),
      headers:{
        'content-type' : 'Application/json; charset=utf-8',
      } 
    }
    ).then((response)=> response.json())
    .then((addUser)=> setUsers([...user, addUser]))
  }
   
  return(
    <div className='container-fluid' >
    <table>
      <thead>
       
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Action</th>
      </thead>
      <tbody>
        {user.map(users =>
        <tr key={users.id}>
          <td >{users.id}</td>
          <td>{users.name}</td>
          <td>{users.email}</td>
          <td contentEditable='true'>{users.phone}</td>
          <td contentEditable='true'>{users.website}</td>
          <td>
            
            <Button className={'bg-primary text'} >Update</Button>
            <Button className='bg-danger' >Delete</Button>
          </td>
        </tr>
          )
        }
      </tbody>
      <tfoot>
        <tr>
          <td></td>
         <td><input type="text" placeholder='Enter name..' value={setNewName}></input></td>
         <td><input type="email" placeholder='Enter Email..'  value={setNewEmail} ></input></td>
         <td><input type="number" placeholder='Enter Phone..'  value={setNewPhone}></input></td>
         <td><input type="text" placeholder='Enter Website..'  value={setNewWebsite}></input></td>
         <td><Button className='bg-success' onClick={addUser}>Add</Button></td>
        </tr>
      </tfoot>
    </table>
    </div>
  );
}

export default App
