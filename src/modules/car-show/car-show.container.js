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

// Stateful Component
class CarShow extends React.Component {

  constructor(props) {
    super(props);
    // Bind our function's scope to the CarShow component
    // which enables access to this.props, this.setState(), etc.
    this.onCarSelected = this.onCarSelected.bind(this);
  }

  componentWillMount() {
    // this.props.getModelTrims("1988", "bmw", "m3");
  }

  onCarSelected(car) {
    const {toggleCarEditorModal} = this.props;
    toggleCarEditorModal(car);
    // getModelTrims(car.year, car.make, car.model);
  }

  render() {
    const {cars, carEditorModal, carDetails = {}} = this.props;
    console.log('editorModal', carDetails)
    return (
      <div>
        <CarEditor />
        <Header style={{textAlign: 'center'}}>Welcome to the Ride Show, Credera!</Header>
        <If condition={true}>
          <CarList cars={this.props.cars} onCarSelected={this.onCarSelected} />
        </If>
        
       
      </div>
    );
  }

}
// Redux Middleware
// Connects our component to the redux store
export default connect(
  // Map the required data objects from the global
  // state to your component via its 'props'
  // NOTE: Anytime these values change, this component will re-render
  (state) => ({
    cars: state.carShow.cars,
    carEditorModal: state.carShow.carEditorModal,
    carDetails: _.get(state, 'carShow.carDetails')
  }),
  // Map actions your component needs to trigger
  {...carEditorActions, ...carShowActions}
)(CarShow);
