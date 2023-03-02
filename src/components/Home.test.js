import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from './Home';

const mockStore = configureStore([]);

describe('Home component', () => {
  let store;
  let wrapper;

  const employees = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      age: 30,
      dob: '1992-01-01',
      address: '123 Main St',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
      age: 28,
      dob: '1994-01-01',
      address: '456 Park Ave',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  beforeEach(() => {
    store = mockStore({
      employee: { employees },
    });

    wrapper = shallow(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it('should render the employees in a table', () => {
    const tableRows = wrapper.find('tr');
    expect(tableRows).toHaveLength(employees.length + 1); // plus une ligne pour les en-têtes du tableau
  });

  it('should render the employee details', () => {
    const firstEmployee = employees[0];
    const employeeDetailsLink = wrapper.find(`a[href="/${firstEmployee._id}"]`);
    expect(employeeDetailsLink).toHaveLength(1);
  });
});
