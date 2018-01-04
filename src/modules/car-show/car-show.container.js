import React from 'react';
import {compose} from 'redux';
import { If } from "../common/utilities";
import {Header} from 'semantic-ui-react';
import CarList from './car-list/car-list.component';
import CarEditor from './car-editor/car-editor.component';
import { connect } from 'react-redux';
import * as carShowActions from './car-show.actions';

const styles = {
  header: {
    textAlign: 'center',
  }
};

// Stateful Component
class CarShow extends React.Component {

  render() {
    const {toggleCarEditorModal} = this.props;
    return (
      <div>
        <Header style={{textAlign: 'center'}}>Welcome to the Ride Show, Credera!</Header>
        <If condition={true}>
          <CarList onCarSelected={(carId) => toggleCarEditorModal(carId)} />
        </If>
        {/* <CarEditor /> */}
       
      </div>
    );
  }

}
export default
connect(
  // Mapping state to props
  (state) => ({
    cars: []
  }),
  // Mapping actions to props
  {...carShowActions}
)(CarShow);
