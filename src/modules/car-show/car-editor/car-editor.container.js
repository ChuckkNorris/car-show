import React from 'react';
import { connect } from 'react-redux';
import {Modal, Button, Icon, Header, Input} from 'semantic-ui-react';
import * as carEditorActions from './car-editor.actions';
import _ from 'lodash';
import * as carShowActions from '../car-show.actions';

//
class CarEditorModal extends React.Component {

  // componentWillUpdate() {
  //   const nextProps = this.props;
  //   if (nextProps) {
  //     const {carEditorModal, getModelTrims} = nextProps;
  //     const car = carEditorModal.selectedCar;
    
  //     if (car) {
  //       getModelTrims(car.year, car.make, car.model);
  //     }
  //   }
  // }
  // componentWillReceiveProps(nextProps) {
  
  // }

  render() {
    const {carEditorModal, toggleCarEditorModal} = this.props;
    // const car = carEditorModal.selectedCar;
    // console.log('render() car:', car);
    // if (!car) { 
    //   return null;
    // }
    return (
      carEditorModal.isOpen ? <h1>TOTALLY OPEN</h1> : <h1>IT'S CLOSED ASFKMLASF</h1>
      // <If condition={carEditorModal.isOpen}></If>
      // `${car.year} ${car.make} ${car.model}`
      // <Modal open={carEditorModal.isOpen} basic size='small'>
      //   <Header icon='archive' content={''} />
      //   <Modal.Content>
      //     <p>ssdsd</p>
      //   </Modal.Content>
      //   <Modal.Actions>
      //     <Button onClick={toggleCarEditorModal} basic color='red' inverted>
      //       <Icon name='remove' /> No
      //     </Button>
      //     <Button color='green' inverted>
      //       <Icon name='checkmark' /> Yes
      //     </Button>
      //   </Modal.Actions>
      // </Modal>
    );
  }
}

// export default CarEditorModal;
export default connect(
  // Mapping state to props
  (state) => ({
    carEditorModal: state.carShow.carEditorModal
  }),
  // Mapping actions to props
  {...carEditorActions, ...carShowActions}
)(CarEditorModal);
