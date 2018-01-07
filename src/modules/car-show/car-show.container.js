import React from 'react';
import {compose} from 'redux';
import { connect } from 'react-redux';
import { If } from "../common/utilities";
import {Header} from 'semantic-ui-react';
import CarList from './car-list/car-list.component';
import CarEditor from './car-editor/car-editor.container';
import * as carEditorActions from './car-editor/car-editor.actions';
import * as carShowActions from './car-show.actions';

import carService from './car-show.service';

const styles = {
  header: {
    textAlign: 'center',
  }
};

// Stateful Component
class CarShow extends React.Component {

  constructor(props) {
    super(props);
    this.onCarSelected = this.onCarSelected.bind(this);
  }

  componentWillMount() {
    // const carDetails = await carService.getModel("13243");
    // const bmwTrims = await carService.getTrims("1988", "bmw", "m3");
    this.props.getModelTrims("1988", "bmw", "m3");
  }

  onCarSelected(car) {
    const {toggleCarEditorModal, getModelTrims} = this.props;
    toggleCarEditorModal(car)
    getModelTrims(car.year, car.make, car.model);
  }

  render() {
    const {cars, carEditorModal} = this.props;
    return (
      <div>
        <Header style={{textAlign: 'center'}}>Welcome to the Ride Show, Credera!</Header>
        <If condition={true}>
          <CarList cars={this.props.cars} onCarSelected={this.onCarSelected} />
        </If>
        <CarEditor />
       
      </div>
    );
  }

}
// Redux Middleware
export default connect(
  // Map the required data objects from the global
  // state to your component via its 'props'
  (state) => ({
    cars: state.carShow.cars,
    carEditorModal: state.carShow.carEditorModal
  }),
  // Map actions your component needs to trigger
  {...carEditorActions, ...carShowActions}
)(CarShow);
