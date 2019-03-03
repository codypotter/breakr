
/**
 * Add Note Action Generator
 * Returns an action with data to add a new note to the store
 * @param {object} payload includes the id and text of a new note 
 */
export const addNote = ({ id, text }) => ({
  type: 'ADD_NOTE',
  id,
  text
});

/**
 * Edit Note Action Generator
 * Returns an action with data to edit a note in the store
 * @param {string} id the id of the note to edit
 * @param {Object} updates the relevant data of the note to update
 */
export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates
});

/**
 * Remove Note Action Generator
 * Returns an action with data to remove a note from the store
 * @param {Object} payload includes the id of the note to remove 
 */
export const removeNote = ({ id }) => ({
  type: 'REMOVE_NOTE',
  id
});