/**
 * Add Organization Action Generator
 * Returns an action with data to add a new organization to the store
 * @param {object} payload includes the id and name of the organization 
 */
export const addOrganization = ({
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
export const clearOrganizations = () => ({
  type: 'CLEAR_ORGANIZATIONS'
});