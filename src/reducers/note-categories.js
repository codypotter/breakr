/*
 const demoNoteCategories = {
   noteCategory1234567890: {
     title: 'OBRC',
     noteIds: ['note1234567890']
   }
 };
*/

/**
 * Note Category Reducer
 * Interacts with note categories in the store
 */
export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NOTE_CATEGORY':
      const { id, title, noteIds } = action;
      return {
        ...state,
        [id]: {
          id,
          title,
          noteIds
        }
      };
    case 'EDIT_NOTE_CATEGORY':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.updates
        }
      };
    case 'REMOVE_NOTE_CATEGORY':
      return Object.keys(state)
        .filter(key => key !== action.id)
        .reduce((result, current) => {
          result[current] = state[current];
          return result;
        }, {});
    case 'REMOVE_NOTE_FROM_CATEGORY':
      return {
        ...state,
        [action.noteCategoryId]: {
          ...state[action.noteCategoryId],
          noteIds: state[action.noteCategoryId].noteIds.filter(noteId => noteId !== action.noteId)
        }
      };
    case 'ADD_NOTE_TO_CATEGORY':
      return {
        ...state,
        [action.noteCategoryId]: {
          ...state[action.noteCategoryId],
          noteIds: state[action.noteCateoryId].noteIds.concat(action.noteId)
        }
      };
    default:
      return state;
  }
};