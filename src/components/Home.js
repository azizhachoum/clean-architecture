//components/Home 

import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../redux/actions';
import { getAll} from '../redux/selector/employeeSelector';


const Home = () => {
  const dispatch = useDispatch();
  const employees = useSelector(getAll);

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])

  return (
    <div className="container d-flex h-100">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          { employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <a className="btn btn-info" href={`/details/${employee.id}`} >
                  Details
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
