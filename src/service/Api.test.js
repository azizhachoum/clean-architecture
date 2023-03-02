import axios from 'axios';
import { createEmployee } from '../service/Api';
require('@babel/register')();


jest.mock('axios');

describe('createEmployee', () => {
  it('creates a new employee successfully', async () => {
    const employee = { _id: '123', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' };
    const response = { data: employee };
    axios.post.mockResolvedValue(response);

    const createdEmployee = await createEmployee(employee);

    expect(createdEmployee).toEqual(employee);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/employees', employee);
  });

  it('throws an error if the server returns an error', async () => {
    const employee = { _id: '123', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' };
    const error = new Error('Internal Server Error');
    axios.post.mockRejectedValue(error);

    await expect(createEmployee(employee)).rejects.toThrow(error);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/employees', employee);
  });
});
