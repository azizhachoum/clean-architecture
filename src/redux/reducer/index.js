// Importing combineReducers from redux
import { combineReducers } from 'redux';

// Importing employeeReducer
import initialState from './employee.reducer';

// Combining reducers
const rootReducer = combineReducers({
employee: initialState,
});

export default rootReducer;