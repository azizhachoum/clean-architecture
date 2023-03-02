import { ActionTypes } from "../ActionTypes";

const initialState = {
employees: [],
loading: false,
error: null,
employee: null,
};
console.log(initialState)

export const employeeReducer = (state = initialState, action) => {
switch (action.type) {
case ActionTypes.FETCH_EMPLOYEES_REQUEST:
return {
...state,
loading: true,
};
case ActionTypes.FETCH_EMPLOYEES_SUCCESS:
return {
...state,
loading: false,
employees: action.payload,
error: null,
};
case ActionTypes.FETCH_EMPLOYEES_FAILURE:
return {
...state,
loading: false,
employees: [],
error: action.payload,
};
case ActionTypes.FETCH_EMPLOYEE_BY_ID_REQUEST:
return {
...state,
loading: true,
employee: null,
};
case ActionTypes.FETCH_EMPLOYEE_BY_ID_SUCCESS:
return {
...state,
loading: false,
employee: action.payload,
error: null,
};
case ActionTypes.FETCH_EMPLOYEE_BY_ID_FAILURE:
return {
...state,
loading: false,
employee: null,
error: action.payload,
};
case ActionTypes.ADD_EMPLOYEE_REQUEST:
return {
...state,
loading: true,
};
case ActionTypes.ADD_EMPLOYEE_SUCCESS:
return {
...state,
loading: false,
employees: [...state.employees, action.payload],
error: null,
};
case ActionTypes.ADD_EMPLOYEE_FAILURE:
return {
...state,
loading: false,
error: action.payload,
};
case ActionTypes.UPDATE_EMPLOYEE_REQUEST:
  return {
    ...state,
    loading: true,
  };
case ActionTypes.UPDATE_EMPLOYEE_SUCCESS:
  return {
    ...state,
    loading: false,
    employees: state.employees.map((employee) =>
      employee._id === action.payload._id ? action.payload : employee
    ),
    error: null,
  };
case ActionTypes.UPDATE_EMPLOYEE_FAILURE:
  return {
    ...state,
    loading: false,
    error: action.payload,
  };

case ActionTypes.DELETE_EMPLOYEE_REQUEST:
return {
...state,
loading: true,
};
case ActionTypes.DELETE_EMPLOYEE_SUCCESS:
return {
...state,
loading: false,
employees: state.employees.filter(
(employee) => employee.id !== action.payload
),
error: null,
};
case ActionTypes.DELETE_EMPLOYEE_FAILURE:
return {
...state,
loading: false,
error: action.payload,
};
default:
return state;
}
};

export default employeeReducer;