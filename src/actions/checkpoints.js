/**
 * Add Checkpoint Action Generator - 
 * Returns an action with data to add a new checkpoint to the store
 * @param {*}       payload -           includes checkpoint data 
 * @param {string}  payload.id -        the id of the checkpoint
 * @param {number}  payload.time -      the timestamp of the checkpoint
 * @param {string}  payload.type -      the type of checkpoint
 * @param {number}  payload.length -    the length of the checkpoint
 * @param {boolean} payload.complete -  true when checkpoint is complete
 */
export const addCheckpoint = ({ id, time, type, length=0, complete=false }) => ({
  type: 'ADD_CHECKPOINT',
  id,
  length,
  time,
  type,
  complete
});

/**
 * Edit Checkpoint Action Generator -
 * Returns an action with data to edit a checkpoint in the store
 * @param {string}  id -      the id of the checkpoint to edit
 * @param {*}       updates - the updates to apply to the checkpoint
 */
export const editCheckpoint = (id, updates) => ({
  type: 'EDIT_CHECKPOINT',
  id,
  updates
});

/**
 * Remove Checkpoint Action Generator -
 * Returns an action with data to remove a checkpoint from the store
 * @param {string} id - the id of the checkpoint to remove 
 */
export const removeCheckpoint = (id) => ({
  type: 'REMOVE_CHECKPOINT',
  id
});