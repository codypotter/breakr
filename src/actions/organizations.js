/**
 * Add Organization Action Generator - 
 * Returns an action with data to add a new organization to the store
 * @param {*}       payload -       the organization data to add
 * @param {string}  payload.id -    the id of the organization
 * @param {string}  payload.name -  the name of the organization
 */
export const addOrganization = ({ id, name }) => ({
  type: 'ADD_ORGANIZATION',
  id,
  name,
});

/**
 * Clear Organizations Action Generator -
 * Returns an action with data to clear the organizations list
 */
export const clearOrganizations = () => ({
  type: 'CLEAR_ORGANIZATIONS'
});