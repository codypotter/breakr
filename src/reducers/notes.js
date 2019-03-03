// TODO: ALL DIS

// const demoNotes = {
//   note1234567890: {
//     id: 'note1234567890',
//     text: 'Had to trespass a canner today',
//   }
// };

/**
 * Notes Reducer
 * Responsible for interacting with notes in the store
 */
// export default (state = {}, action) => {
//   switch (action.type) {
//     case 'ADD_EMPLOYEE':
//       const {
//         id,
//         name,
//         checkpoints
//       } = action;
//       return {
//         ...state,
//         [id]: {
//           id,
//           name,
//           checkpoints
//         }
//       };
//     case 'EDIT_EMPLOYEE':
//       return {
//         ...state,
//         [action.id]: {
//           ...state[action.id],
//           ...action.updates
//         }
//       }
//     case 'REMOVE_EMPLOYEE':
//       return Object.keys(state)
//         .filter(key => key !== action.id)
//         .reduce((result, current) => {
//           result[current] = state[current];
//           return result;
//         }, {});
//     default:
//       return state;
//   }
// };