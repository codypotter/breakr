const demoOrganizations = {
  byId: {
    organization1234567890: {
      name: 'Whole Foods Laurelhurst',
      id: 'organization1234567890'
    }
  },
  allIds: ['organization1234567890']
};

/**
 * Add Organization Action Generator
 * Returns an action with data to add a new organization to the store
 * @param {object} payload includes the id and name of the organization 
 */
const addOrganization = ({
  id,
  name,
}) => ({
  type: 'ADD_ORGANIZATION',
  id,
  name,
});

/**
 * Clear Organizations Action Generator
 * Returns an action with data to clear the organizations list
 */
const clearOrganizations = () => ({
  type: 'CLEAR_ORGANIZATIONS'
});

/**
 * Organizations Reducer
 * Interacts with employee categories in the store
 */
const organizationsStore = createStore((state = {}, action) => {
  switch (action.type) {
    case 'ADD_ORGANIZATION':
      const {
        id,
        name
      } = action;
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
});