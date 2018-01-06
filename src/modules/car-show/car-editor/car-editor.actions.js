
export const keys = {
  TOGGLE_CAR_EDITOR_MODAL: 'TOGGLE_CAR_EDITOR_MODAL'
};

export const toggleCarEditorModal = (selectedCar) => {
  return {
    type: keys.TOGGLE_CAR_EDITOR_MODAL,
    selectedCar
  };
}
