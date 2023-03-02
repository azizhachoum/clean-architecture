//components/AddEmployer
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/actions';


const AddEmployee = () => {
  
  const [employer, setEmployer] = useState({
    id : "",
    firstName : "",
    lastName : "",
    email : ""
  })

  const dispatch = useDispatch(); 
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addEmployee(employer))
    setEmployer({
      id : "",
      firstName : "",
      lastName : "",
      email : ""
    })
  }

  return (
<div className="container d-flex h-100">
  <h1>Add Employee</h1>
  <form onSubmit={handleSubmit}>
    <div id="form-group">
      <label>First Name:</label>
      <input class="form-control" name="firstName" type="text" onChange={(e)=>{setEmployer({...employer, firstName : e.target.value})}}/>
    </div>
    <div id="form-group">
      <label>Last Name:</label>
      <input class="form-control" name="lastName" type="text" onChange={(e)=>{setEmployer({...employer, lastName : e.target.value})}}/>
    </div>
    <div id="form-group">
      <label>Email:</label>
      <input class="form-control" name="email" type="email" onChange={(e)=>{setEmployer({...employer, email : e.target.value})}}/>
      <br/>
    </div>
    <button class="btn btn-success" type="submit" value="Submit"> ADD
    </button>
  </form>
</div>
  )
}

export default AddEmployee;
