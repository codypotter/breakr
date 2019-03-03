/**
 * Employees Reducer - 
 * Responsible for interacting with employees in the store
 */
export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      const {id, name, checkpoints} = action;
      return {
        ...state,
        [id]: {
          id,
          name,
          checkpoints
        }
      };
    case 'EDIT_EMPLOYEE':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.updates
        }
      }
    case 'REMOVE_EMPLOYEE':
      return Object.keys(state)
        .filter(key => key !== action.id)
        .reduce((result, current) => {
          result[current] = state[current];
          return result;
      }, {});
    default:
      return state;
  }
};