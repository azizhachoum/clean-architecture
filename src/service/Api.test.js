// Import the function to test
import { createEmployee } from './Api';

// Mock axios to avoid actually sending HTTP requests
jest.mock('axios');

describe('createEmployee', () => {
  it('returns the created employee', async () => {
    // Set up a mock response for axios
    const mockResponse = { data: { id: 1, name: 'John Doe', email: 'johndoe@example.com' } };
    axios.post.mockResolvedValueOnce(mockResponse);

    // Call the function and expect the response to match the mock
    const employee = { name: 'John Doe', email: 'johndoe@example.com' };
    const response = await createEmployee(employee);
    expect(response).toEqual(mockResponse.data);

    // Verify that axios was called with the correct arguments
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/employees', employee);
  });

  it('throws an error if the request fails', async () => {
    // Set up a mock error response for axios
    const mockError = new Error('Request failed');
    axios.post.mockRejectedValueOnce(mockError);

    // Call the function and expect it to throw the error
    const employee = { name: 'John Doe', email: 'johndoe@example.com' };
    await expect(createEmployee(employee)).rejects.toThrow(mockError);
  });
});
