import { createSelector } from 'reselect';

const employeesSelector = (state) => state.employee.employees;
const employeesSelectorID = (state) => state.employee.employee;

export const getAll = createSelector(
  employeesSelector,
  (employees) => employees
);

export const getById = createSelector(
    employeesSelectorID,
    (employees) => employees
);
