
export const keys = {
  TOGGLE_CAR_EDITOR_MODAL: 'TOGGLE_CAR_EDITOR_MODAL'
};

export const toggleCarEditorModal = (carId) => {
  return {
    type: keys.TOGGLE_CAR_EDITOR_MODAL,
    myParam: 'Neato',
    carId
  };
}
