//service/Api.js

import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getAllEmployees = async () => {
  const response = await axios.get(`${API_URL}/employees`);
  console.log(response.data)
  return response.data;
};

export const getEmployeeById = async (id) => {
  const response = await axios.get(`${API_URL}/employees/${id}`);
  console.log(response.data)
  return response.data;
};

export const createEmployee = async (employee) => {
  const response = await axios.post(`${API_URL}/employees`, employee);
  return response.data;
};

export const editEmployee = async ( employee) => {
  const response = await axios.put(`${API_URL}/employees/${employee.id}`, employee);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${API_URL}/employees/${id}`);
  return response
};
