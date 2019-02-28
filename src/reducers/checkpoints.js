const demoCheckpoints = {
  byId: {
    checkpoint0: {
      id: 'checkpoint0',
      length: 0,
      time: 'timestamp',
      type: 'in',
      complete: true
    },
    checkpoint1: {
      id: 'checkpoint1',
      length: 15,
      time: 'timestamp',
      type: 'break',
      complete: true
    },
    checkpoint2: {
      id: 'checkpoint2',
      length: 0,
      time: 'timestamp',
      type: 'out',
      complete: false
    }
  },
  allIds: ['checkpoint0', 'checkpoint1', 'checkpoint2']
};

/**
 * Add Checkpoint Action Generator
 * Returns an action with data to add a new checkpoint to the store
 * @param {object} payload includes the id, length, time, type, and (is)complete 
 */
const addCheckpoint = ({
  id,
  length,
  time,
  type,
  complete
}) => ({
  type: 'ADD_CHECKPOINT',
  id,
  length,
  time,
  type,
  complete
});

/**
 * Edit Checkpoint Action Generator
 * Returns an action with data to edit a checkpoint in the store
 * @param {string} id 
 * @param {Object} updates 
 */
const editCheckpoint = (id, updates) => ({
  type: 'EDIT_CHECKPOINT',
  id,
  updates
});

/**
 * Remove Checkpoint Action Generator
 * Returns an action with data to remove a checkpoint from the store
 * @param {Object} payload includes the id of the checkpoint to remove 
 */
const removeCheckpoint = ({
  id
}) => ({
  type: 'REMOVE_CHECKPOINT',
  id
});

/**
 * Checkpoints Reducer
 * Interacts with checkpoints in the store
 */
const CheckpointsStore = createStore((state = {}, action) => {
  switch (action.type) {
    case 'ADD_CHECKPOINT':
      const {
        id,
        length,
        time,
        type,
        complete
      } = action;
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
});