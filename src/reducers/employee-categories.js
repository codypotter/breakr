// const demoEmployeeCategories = {
//   employeeCategory1234567890: {
//     id: 'employeeCategory1234567890',
//     title: 'Cashiers',
//     employeeIds: ['employee1234567890']
//   }
// };

/**
 * Employee Category Reducer
 * Interacts with employee categories in the store
 */
export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE_CATEGORY':
      const { id, title, employeeIds } = action;
      return {
        ...state,
        [id]: {
          id,
          title,
          employeeIds
        }
      };
    case 'EDIT_EMPLOYEE_CATEGORY':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.updates
        }
      };
    case 'REMOVE_EMPLOYEE_CATEGORY':
      return Object.keys(state)
        .filter(key => key !== action.id)
        .reduce((result, current) => {
          result[current] = state[current];
          return result;
        }, {});
    case 'REMOVE_EMPLOYEE_FROM_CATEGORY':
      return {
        ...state,
        [action.employeeCategoryId]: {
          ...state.action.employeeCategoryId,
          employeeIds: state[action.employeeCategoryId].employeeIds.filter(employeeId => employeeId !== action.employeeId)
        }
      };
    case 'ADD_EMPLOYEE_TO_CATEGORY':
      return {
        ...state,
        [action.employeeCategoryId]: {
          ...state[action.employeeCategoryId],
          employeeIds: state[action.employeeCateoryId].employeeIds.concat(action.employeeId)
        }
      };
    default:
      return state;
  }
};