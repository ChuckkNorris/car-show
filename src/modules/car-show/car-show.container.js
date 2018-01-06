import React from 'react';
import {compose} from 'redux';
import { connect } from 'react-redux';
import { If } from "../common/utilities";
import {Header} from 'semantic-ui-react';
import CarList from './car-list/car-list.component';
import CarEditor from './car-editor/car-editor.container';
import * as carEditorActions from './car-editor/car-editor.actions';

const styles = {
  header: {
    textAlign: 'center',
  }
};

// Stateful Component
class CarShow extends React.Component {

  render() {
    const {toggleCarEditorModal, cars, carEditorModal} = this.props;
    return (
      <div>
        <Header style={{textAlign: 'center'}}>Welcome to the Ride Show, Credera!</Header>
        <If condition={true}>
          <CarList cars={this.props.cars} onCarSelected={(car) => toggleCarEditorModal(car)} />
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
  {...carEditorActions}
)(CarShow);
