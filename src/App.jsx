import { useEffect, useState } from 'react';
import {Button, Table } from 'react-bootstrap'
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
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-10 col-lg-8'>
          <div className='table-responsive mt-4'>
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {user.map(users => (
                  <tr key={users.id}>
                    <td>{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.phone}</td>
                    <td>{users.website}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>



      <p className='h3 mt-3 ms-4'>Add User</p>
      <tfoot className=' card ms-3 w-25 mt-3'>
        <div className="card border-muted mx-auto">
          <div className="row ">
          <div className="col-12 ms-4 mt-1 ">
            
          <td><input type="text" placeholder='Enter name..' value={newName} onChange={(e) => setNewName(e.target.value)} autoFocus></input></td>
          </div>

          <div className="col-12 ms-4 mt-1">
          <td><input type="text" placeholder='Enter email..' value={newEmail} onChange={(e) => setNewEmail(e.target.value)}></input></td>
          </div>

          <div className="col -12 ms-4 mt-1">
          <td><input type="text" placeholder='Enter phone..' value={newPhone} onChange={(e) => setNewPhone(e.target.value)}></input></td>
          </div>

          <div className="col-12 ms-4 mt-1">
          <td><input type="text" placeholder='Enter website..' value={newWebsite} onChange={(e) => setNewWebsite(e.target.value)}></input></td>
          </div>

          <div className="col-12 ms-4 mt-1">
          <td><Button onClick={addUser} variant="outline-success">Add User</Button></td>
          </div>
          </div>
         
          </div>
      </tfoot>
      
   
    </>
  );
}

export default App
