// const demoCheckpoints = {
//   byId: {
//     checkpoint0: {
//       id: 'checkpoint0',
//       length: 0,
//       time: 'timestamp',
//       type: 'in',
//       complete: true
//     },
//     checkpoint1: {
//       id: 'checkpoint1',
//       length: 15,
//       time: 'timestamp',
//       type: 'break',
//       complete: true
//     },
//     checkpoint2: {
//       id: 'checkpoint2',
//       length: 0,
//       time: 'timestamp',
//       type: 'out',
//       complete: false
//     }
//   },
//   allIds: ['checkpoint0', 'checkpoint1', 'checkpoint2']
// };

/**
 * Checkpoints Reducer
 * Interacts with checkpoints in the store
 */
export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CHECKPOINT':
      const { id, length, time, type, complete } = action;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            id,
            length,
            time,
            type,
            complete
          }
        },
        allIds: [
          ...state.allIds,
          id
        ]
      };
    case 'EDIT_CHECKPOINT':
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            ...action.updates
          }
        },
        allIds: [
          ...state.allIds
        ]
      }
    case 'REMOVE_CHECKPOINT':
      return {
        ...state,
        byId: Object.keys(state.byId)
            .filter(key => key !== action.id)
            .reduce((result, current) => {
              result[current] = state[current];
              return result;
            }, {})
        ,
        allIds: state.allIds.filter((id) => id !== action.id)
      }
    default:
      return state;
  }
};