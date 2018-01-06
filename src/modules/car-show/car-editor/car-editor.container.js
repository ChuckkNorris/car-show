import React from 'react';
import { connect } from 'react-redux';
import {Modal, Button, Icon, Header, Input} from 'semantic-ui-react';
import * as carEditorActions from './car-editor.actions';
import _ from 'lodash';

const CarEditorModal = ({carEditorModal, toggleCarEditorModal}) => {
  // carEditorModal.isOpen
  // trigger={<Button>Show Modal</Button>}
  const car = carEditorModal.selectedCar;
  if (!car) { 
    return null;
  }
  return (
    <Modal open={carEditorModal.isOpen} basic size='small'>
      <Header icon='archive' content={`${car.year} ${car.make} ${car.model}`} />
      <Modal.Content>
        <p>ssdsd</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={toggleCarEditorModal} basic color='red' inverted>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
  
};

// export default CarEditorModal;
export default connect(
  // Mapping state to props
  (state) => ({
    carEditorModal: state.carShow.carEditorModal
  }),
  // Mapping actions to props
  {...carEditorActions}
)(CarEditorModal);
