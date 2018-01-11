import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {Modal, Button, Icon, Header, Input, Table} from 'semantic-ui-react';
import * as carEditorActions from './car-editor.actions';
import * as carShowActions from '../car-show.actions';
import CarEditorDetails from './car-editor-details.component';
import CarSelector from './car-selector.component';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';
import * as editorHelpers from './car-editor.helpers';

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
  const selectedCarId = _.get(props, 'carEditorModal.selectedCarId');
  if (!selectedCarId)
    return undefined;
  return _.find(props.cars, (car) => _.get(car, 'id') == selectedCarId);
}

const shoudGetModelTrims = (prevCar, nextCar) => {
  // !prevCar ||
  if (prevCar === undefined && nextCar && nextCar.year && nextCar.make && nextCar.model)
    return true;
  if (!nextCar)
    return false;
  return (prevCar && nextCar
    && nextCar.year && nextCar.make && nextCar.model
    && prevCar.year !== nextCar.year
    && prevCar.make !== nextCar.make
    && prevCar.model !== nextCar.model);
}

const handleCarChange = (prevProps, nextProps) => {
  const prevCar = getSelectedCar(prevProps);
  const nextCar = getSelectedCar(nextProps);
  // Make car details request if there is no car or a new one coming in
  const shouldGetModelTrims = !prevCar || (nextCar && nextCar !== prevCar);
  if (shoudGetModelTrims(prevCar, nextCar)) {
    nextProps.getModelTrims(nextCar.year, nextCar.make, nextCar.model);
  }
}

const handleSpecsChange = (prevProps, nextProps) => {
  const prevCarSpecs = editorHelpers.getLastModelTrimSpecs(prevProps.carDetails.response);
  const nextCarSpecs = editorHelpers.getLastModelTrimSpecs(nextProps.carDetails.response);
  const horsepowerSpec = _.find(nextCarSpecs, (spec) => spec.name === 'model_engine_power_ps');
  if (prevCarSpecs !== nextCarSpecs && horsepowerSpec) {
    const selectedCar = getSelectedCar(nextProps);
    // nextProps.updateCar({...selectedCar, horsepower: horsepowerSpec.value});
  }
}

class CarEditorModal extends React.Component {

  componentWillReceiveProps(nextProps) {
    handleCarChange(this.props, nextProps);
    // Removed to avoid revoked API access
    // handleSpecsChange(this.props, nextProps);
  }

  render() {
    const {carEditorModal, toggleCarEditorModal, carDetails, updateCar, cars} = this.props;
    const car = getSelectedCar(this.props); // carEditorModal.selectedCar;
    if (!car || !car.id)
      return null;
    
    return (
      <Modal onClose={() => toggleCarEditorModal()} open={carEditorModal.isOpen} basic size='small'>
        <div style={styles.getHeaderImageStyle(car.imageUrl)}>
         
        
          <Header style={styles.headerText} icon='car' content={`${car.year} ${car.make} ${car.model}`} />
        </div>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Button onClick={() => this.props.removeCar(car.id)} basic color='red' inverted>
                <Icon name='remove' /> Remove Car
              </Button>
            </Grid.Row>
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
    cars: state.carShow.cars,
    carEditorModal: state.carShow.carEditorModal,
    carDetails: state.carShow.carDetails
  }),
  // Mapping actions to props
  {...carEditorActions, ...carShowActions}
)(CarEditorModal);
