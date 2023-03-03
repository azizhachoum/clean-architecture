import { ActionTypes } from "../redux/ActionTypes";
import {getAllEmployees, getEmployeeById, createEmployee, editEmployee, deleteEmployee} from "../service/Api";

// Action Creator pour récupérer tous les employés
export const fetchEmployees = () => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.FETCH_EMPLOYEES_REQUEST,
    });
    const data = await getAllEmployees()
    dispatch({
      type: ActionTypes.FETCH_EMPLOYEES_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_EMPLOYEES_FAILURE,
      payload: error.message,
    });
  }
};

// Action Creator pour récupérer un employé par ID
export const fetchEmployeeById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.FETCH_EMPLOYEE_BY_ID_REQUEST,
    });
    const data = await getEmployeeById(id)
    dispatch({
      type: ActionTypes.FETCH_EMPLOYEE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_EMPLOYEE_BY_ID_FAILURE,
      payload: error.message,
    });
  }
};

// Action Creator pour ajouter un employé
export const addEmployee = (employee) => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.ADD_EMPLOYEE_REQUEST,
    });

    const response = await createEmployee(employee)
    const data = response.data;

    dispatch({
      type: ActionTypes.ADD_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.ADD_EMPLOYEE_FAILURE,
      payload: error.message,
    });
  }
};

// Action Creator pour mettre à jour un employé
export const updateEmployee = (employee) => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.UPDATE_EMPLOYEE_REQUEST,
    });

    const data = await editEmployee(employee)

    console.log(data)
   
    dispatch({
      type: ActionTypes.UPDATE_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.UPDATE_EMPLOYEE_FAILURE,
      payload: error.message,
    });
  }
};

// Action Creator pour supprimer un employé
export const delEmployee = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.DELETE_EMPLOYEE_REQUEST,
    });

     await deleteEmployee(id)

    dispatch({
      type: ActionTypes.DELETE_EMPLOYEE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.DELETE_EMPLOYEE_FAILURE,
      payload: error.message,
    });
  }
};
