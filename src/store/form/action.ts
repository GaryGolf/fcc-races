export const ADD_POSITION = 'ADD_POSITION';
export const addPosition = (position:iPosition) => ({
  type: ADD_POSITION,
  payload: { position }
});

export const REMOVE_POSITION = 'REMOVE_POSITION';
export const removePosition = (position:iPosition) => ({
  type: REMOVE_POSITION,
  payload: { position }
});

export const CLEAR_FORM = 'CLEAR_FORM';
export const clearForm = () => ({ type: CLEAR_FORM });
