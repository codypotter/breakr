// const demoNoteCategories = {
//   noteCategory1234567890: {
//     id: 'noteCategory1234567890',
//     title: 'OBRC',
//     notesIds: ['note1234567890']
//   }
// };

/**
 * Add Note Category Action Generator -
 * Returns an action with data to add a new note category to the store
 * @param {*}               payload  -        includes note data to add a new note category
 * @param {string}          payload.id -      the id of the note category to add
 * @param {string}          payload.title -   the title of the note category to add
 * @param {Array.<string>}  payload.noteIds - the noteIds that belong to this category
 */
export const addNoteCategory = ({ id, title="", noteIds=[] }) => ({
  type: 'ADD_NOTE_CATEGORY',
  id,
  title,
  noteIds
});

/**
 * Edit Note Category Action Generator -
 * Returns an action with data to edit a note category in the store
 * @param {string}  id -       the note category id
 * @param {*}       updates -  the updates for the note category
 */
export const editNoteCategory = (id, updates) => ({
  type: 'EDIT_NOTE_CATEGORY',
  id,
  updates
});

/**
 * Remove Note Category Action Generator -
 * Returns an action with data to remove a note category from the store
 * @param {string} id - includes the id of the note category to remove 
 */
export const removeNoteCategory = (id) => ({
  type: 'REMOVE_NOTE_CATEGORY',
  id
});

/**
 * Remove Note From Category Action Generator -
 * Returns an action with data to remove a note from a note category
 * @param {*}       payload -                 the data to remove a note from a category
 * @param {string}  payload.noteCategoryId -  the id of the category to edit
 * @param {string}  payload.noteId -          the id of the note to remove
 */
export const removeNoteFromCategory = ({ noteCategoryId, noteId }) => ({
  type: 'REMOVE_NOTE_FROM_CATEGORY',
  noteCategoryId,
  noteId
});

/**
 * Add Note To Category Action Generator - 
 * Returns an action with data to add a note to a note category
 * @param {*}       payload -                 the data to add a note to a category
 * @param {string}  payload.noteCategoryId -  the id of the category to edit
 * @param {string}  payload.noteId -          the id of the note to add
 */
export const addNoteToCategory = ({ noteCategoryId, noteId }) => ({
  type: 'ADD_NOTE_TO_CATEGORY',
  noteCategoryId,
  noteId
});

/**
 * Clear Note Categories Action Generator -
 * @returns {{type: string}}
 */
export const clearNoteCategories = () => ({
  type: 'CLEAR_NOTE_CATEGORIES'
});