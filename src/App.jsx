import { useEffect, useState } from 'react';
import {Button } from 'react-bootstrap'
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
    const name = newName.trim();
    const email = newEmail.trim();
    const phone = newPhone.trim();
    const website = newWebsite.trim();
    fetch("https://jsonplaceholder.typicode.com/users",
    {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        phone,
        website,
        
    }),
      headers:{
        "content-type" : "Application/json; charset=utf-8"
      } 
    }
    ).then((response)=> response.json())
    .then((value)=> setUsers([...user, value]))

    setNewName('');
    setNewPhone('');
    setNewEmail('');
    setNewWebsite('');
  }
   
  return(<>
   <h1 className='h1 text-info text-center'>Api Fetched Data</h1>
   
    <div className='container-fluid table table-bordered small w- mt-4 px-0'>
      <div className="row px-0 ms-2 me-3">
        <div className="col  ">
         <th>ID</th></div>
        <div className="col  ">
         <th >Name</th>
        </div>
        <div className="col">
         <th >Email</th>
        </div>
        <div className="col">
          <th >Phone</th>
        </div>
        <div className="col"> 
          <th>Website</th>
        </div>
      </div>
      <div className='row px-0 ms-2 me-3'>
        {user.map(users =>
        <td key={users.id}>
          <div className="row px-0 ms-1">
          <div className="col px-0  "><td >{users.id}</td></div>
          <div className="col px-0"><td>{users.name}</td></div>
          <div className="col px-0"><td>{users.email}</td></div>
          <div className="col px-0"><td>{users.phone}</td></div>
          <div className="col px-0"><td>{users.website}</td></div>
          </div>
         
        </td>
          )
        }
      </div>
      <p className='h3 mt-3 ms-4'>Add User</p>
      <tfoot className=' card ms-3 w-25 mt-3'>
        <div className="card border-info mx-auto">
 
          <div className="row ">
          <div className="col-12 ms-5 mt-1 ">
            
          <td><input type="text" placeholder='Enter name..' value={newName} onChange={(e) => setNewName(e.target.value)} autoFocus></input></td>
          </div>

          <div className="col-12 ms-5 mt-1">
          <td><input type="text" placeholder='Enter email..' value={newEmail} onChange={(e) => setNewEmail(e.target.value)}></input></td>
          </div>

          <div className="col -12 ms-5 mt-1">
          <td><input type="text" placeholder='Enter phone..' value={newPhone} onChange={(e) => setNewPhone(e.target.value)}></input></td>
          </div>

          <div className="col-12 ms-5 mt-1">
          <td><input type="text" placeholder='Enter website..' value={newWebsite} onChange={(e) => setNewWebsite(e.target.value)}></input></td>
          </div>

          <div className="col-12 ms-5 mt-1">
          <td><Button onClick={addUser} variant="outline-success">Add User</Button></td>
          </div>
          </div>

          </div>
      </tfoot>
    </div>
   
    </>
  );
}

export default App
