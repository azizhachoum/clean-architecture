import React, { useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { fetchEmployees } from './redux/actions';
import Home from './components/Home';
import AddEmployee from './components/AddEmployer';
import Details from './components/Details';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch employees on component mount
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/add" element={<AddEmployee/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
