/*
 export const demoOrganizations = {
   byId: {
     organization1234567890: {
       name: 'Whole Foods Laurelhurst',
       id: 'organization1234567890'
     }
   },
   allIds: ['organization1234567890']
 };
*/

/**
 * Organizations Reducer
 * Interacts with employee categories in the store
 */
export default (state = {
  byId: {}, 
  allIds: []
}, action) => {
  switch (action.type) {
    case 'ADD_ORGANIZATION':
      const { id, name } = action;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            id,
            name,
          }
        },
        allIds: [
          ...state.allIds,
          id
        ]
      };
    case 'CLEAR_ORGANIZATIONS':
      return {};
    default:
      return state;
  }
};