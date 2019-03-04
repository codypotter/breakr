
/**
 * Add Note Action Generator -
 * Returns an action with data to add a new note to the store
 * @param {*}       payload -       the data to add a new note
 * @param {string}  payload.id -    the id of the new note 
 * @param {string}  payload.text -  the text of a new note 
 */
export const addNote = ({ id, text='' }) => ({
  type: 'ADD_NOTE',
  id,
  text
});

/**
 * Edit Note Action Generator -
 * Returns an action with data to edit a note in the store
 * @param {string}  id -       the id of the note to edit
 * @param {*}       updates -  the data of the note to update
 * @example
 *  editNote('note1234567890', { text: 'heres some new text' });
 */
export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates
});

/**
 * Remove Note Action Generator -
 * Returns an action with data to remove a note from the store
 * @param {Object} payload includes the id of the note to remove 
 */
export const removeNote = (id) => ({
  type: 'REMOVE_NOTE',
  id
});