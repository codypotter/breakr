// const demoDay = {
//   id: '05122018',
//   noteCategories: ['noteCategory1234567890'],
//   employeeCategories: ['employeeCategory1234567890']
// };

/**
 * Day Reducer
 * Responsible for interacting with the day in the store
 */
export default (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_DAY':
      return {
        ...state,
        noteCategories: [
          ...state.noteCategories,
          ...action.updates.noteCategories
        ],
        employeeCategories: [
          ...state.employeeCategories,
          ...action.updates.employeeCategories
        ]
      }
    case 'CLEAR_DAY':
      return {};
    case 'REMOVE_ITEM':
      const {itemToRemove} = action;
      const keyToUpdate = Object.keys(itemToRemove)[0];
      const propertyToRemove = itemToRemove[keyToUpdate];
      return {
        ...state,
        noteCategories: [...state.noteCategories],
        employeeCategories: [...state.employeeCategories],
        [keyToUpdate]: state[keyToUpdate].filter(element => element !== propertyToRemove)
      }
    default:
      return state;
  }
};

