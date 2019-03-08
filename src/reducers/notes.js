
/*
 const demoNotes = {
   note1234567890: {
     id: 'note1234567890',
     text: 'Had to trespass a canner today',
   }
 };
*/

/**
 * NoteList Reducer
 * Responsible for interacting with notes in the store
 */
export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      const { id, text } = action;
      return {
        ...state,
        [id]: {
          id,
          text
        }
      };
    case 'EDIT_NOTE':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.updates
        }
      };
    case 'REMOVE_NOTE':
      return Object.keys(state)
        .filter(key => key !== action.id)
        .reduce((result, current) => {
          result[current] = state[current];
          return result;
        }, {});
    case 'CLEAR_NOTES':
      return {};
    default:
      return state;
  }
};