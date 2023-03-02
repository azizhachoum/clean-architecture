import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployeeById, updateEmployee, delEmployee } from '../redux/actions';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const employer = useSelector((state) => state.employee.employee);
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    id : '',
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
  
    dispatch(fetchEmployeeById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (employer) {
      setFormData({
        id : employer.id , 
        firstName: employer.firstName ,
        lastName: employer.lastName ,
        email: employer.email ,
      });
    }
  }, [employer]);


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateEmployee(formData));
      navigation('/')
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) =>{
    try {
     dispatch(delEmployee(id))
     navigation('/')
    }catch(error) {
        console.log(error)
    }
  
  }

  return (
    <div className="container d-flex h-100">
    <h1>Details Employee</h1>
    <form  >
      <div id="form-group">
        <label>First Name:</label>
        <input
          className="form-control"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div id="form-group">
        <label>Last Name:</label>
        <input
          className="form-control"
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div id="form-group">
        <label>Email:</label>
        <input
          className="form-control"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
      </div>
      <button variant="contained" class="btn btn-warning" onSubmit={handleSubmit}  type="submit">
       UPDATE
      </button>
    <button variant="contained" style={{marginLeft : "30px"}} class="btn btn-danger" onClick={()=>{handleDelete(employer.id)}} >
      DELETE
      </button>
    </form>
  </div>
  );
};

export default Details;
