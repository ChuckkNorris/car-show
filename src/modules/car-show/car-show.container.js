import React from 'react';
import _ from 'lodash';
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

const CarDetails = ({carDetailsResponse}) => {
  if (!carDetailsResponse || !carDetailsResponse.Trims || !carDetailsResponse.Trims.length > 0)
    return null;
  const trims = carDetailsResponse.Trims;
  const trim = trims[trims.length - 1];
  // DETAILS IS  UNDEFEINE!!!!
  const details = Object.keys(trim).forEach(specName => {
    const specValue = trim[specName];
    return (
      <p>{specName}: {specValue}</p>
    )
  });
  return (
    <div>
      {details}
    </div>
  )
};

// Stateful Component
class CarShow extends React.Component {

  constructor(props) {
    super(props);
    this.onCarSelected = this.onCarSelected.bind(this);
  }

  componentWillMount() {
    // this.props.getModelTrims("1988", "bmw", "m3");
  }

  onCarSelected(car) {
    const {toggleCarEditorModal, getModelTrims, fetchPostsIfNeeded, dispatch} = this.props;
    toggleCarEditorModal(car);
    getModelTrims(car.year, car.make, car.model);
  }

  render() {
    const {cars, carEditorModal, carDetails = {}} = this.props;
    console.log('editorModal', carEditorModal)
    return (
      <div>
        <CarEditor />
        {carDetails.response ? <CarDetails carDetailsResponse={carDetails.response} /> : null}
        <Header style={{textAlign: 'center'}}>Welcome to the Ride Show, Credera!</Header>
        <If condition={true}>
          <CarList cars={this.props.cars} onCarSelected={this.onCarSelected} />
        </If>
        
       
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
    carEditorModal: state.carShow.carEditorModal,
    carDetails: _.get(state, 'carShow.carDetails')
  }),
  // Map actions your component needs to trigger
  {...carEditorActions, ...carShowActions}
)(CarShow);
