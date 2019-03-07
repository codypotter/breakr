// const demoDay = {
//   date: '05122018',
//   organization: 'organization1234567890',
//   noteCategories: ['noteCategory1234567890'],
//   employeeCategories: ['employeeCategory1234567890']
// };

/**
 * Day Reducer
 * Responsible for interacting with the day in the store
 */
export default (state = {
  date: null,
  noteCategories: [],
  employeeCategories: []
}, action) => {
  switch (action.type) {
    case 'ADD_CATEGORIES':
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
      };
    case 'CHANGE_DATE':
      return {
        ...state,
        date: action.date
      };
    case 'CHANGE_ORGANIZATION':
      return {
        ...state,
        organization: action.organizationId,
        noteCategories: [],
        employeeCategories: []
      };
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
      };
    default:
      return state;
  }
};

