import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {Modal, Button, Icon, Header, Input, Table} from 'semantic-ui-react';
import * as carEditorActions from './car-editor.actions';
import * as carShowActions from '../car-show.actions';
import CarEditorDetails from './car-editor-details.component';
import CarSelector from './car-selector.component';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';

const styles = {
  headerText: {
    position: 'absolute',
    bottom: '6%',
    left: '4%',
    color: 'white',
    fontSize: 36
  },
  closeButton: {
    position: 'absolute',
    right: '2%',
    top: '2%'
  },
  getHeaderImageStyle: (imageUrl) => ({
    // linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageUrl}) no-repeat left center`,
    backgroundSize: '100%',
    position: 'relative',
    width: 700,
    height: 400,
  })
}

const getSelectedCar = (props) => {
  if (!_.get(props, 'carEditorModal.selectedCar.id'))
    return undefined;
  return _.find(props.cars, (car) => car.id == props.carEditorModal.selectedCar.id);
  // return _.get(props, 'carEditorModal.selectedCar');
}

class CarEditorModal extends React.Component {

  componentWillReceiveProps(nextProps) {
    const prevCar = getSelectedCar(this.props);
    const nextCar = getSelectedCar(nextProps);
    const shouldGetModelTrims = !prevCar || (nextCar && nextCar !== prevCar);
    if (shouldGetModelTrims) {
      nextProps.getModelTrims(nextCar.year, nextCar.make, nextCar.model);
    }
  }

  render() {
    const {carEditorModal, toggleCarEditorModal, carDetails, updateCar, cars} = this.props;
    const car = getSelectedCar(this.props); // carEditorModal.selectedCar;
    if (!car)
      return null;
    
    return (
      <Modal open={carEditorModal.isOpen} basic size='small'>
        <div style={styles.getHeaderImageStyle(car.imageUrl)}>
          <Button style={styles.closeButton} onClick={() => toggleCarEditorModal()} basic color='red' inverted>
            <Icon name='remove' /> Close
          </Button>
          <Header style={styles.headerText} icon='car' content={`${car.year} ${car.make} ${car.model}`} />
        </div>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <CarSelector car={car} updateCar={updateCar} />
            </Grid.Row>
            <Grid.Row>
              <CarEditorDetails carDetails={carDetails} />
            </Grid.Row>
          </Grid>
          
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(
  // Mapping state to props
  (state) => ({
    cars:state.carShow.cars,
    carEditorModal: state.carShow.carEditorModal,
    carDetails: state.carShow.carDetails
  }),
  // Mapping actions to props
  {...carEditorActions, ...carShowActions}
)(CarEditorModal);
