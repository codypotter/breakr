/**
 * Add Checkpoint Action Generator
 * Returns an action with data to add a new checkpoint to the store
 * @param {object} payload includes the id, length, time, type, and (is)complete 
 */
export const addCheckpoint = ({ id, length, time, type, complete }) => ({
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
export const editCheckpoint = (id, updates) => ({
  type: 'EDIT_CHECKPOINT',
  id,
  updates
});

/**
 * Remove Checkpoint Action Generator
 * Returns an action with data to remove a checkpoint from the store
 * @param {Object} payload includes the id of the checkpoint to remove 
 */
export const removeCheckpoint = ({id}) => ({
  type: 'REMOVE_CHECKPOINT',
  id
});