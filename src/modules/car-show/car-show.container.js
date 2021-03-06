import React from 'react';
import _ from 'lodash';
import {compose} from 'redux';
import { connect } from 'react-redux';
import { If } from "../common/utilities";
import {Header, Grid, Button, Input} from 'semantic-ui-react';
import CarList from './car-list/car-list.component';
import CarEditor from './car-editor/car-editor.container';
import * as carEditorActions from './car-editor/car-editor.actions';
import * as carShowActions from './car-show.actions';
import carService from './car-show.service';

import CarSearch from './car-search/car-search.component';

import ExampleModal from '../react-examples/example-modal.component';

const styles = {
  header: {
    textAlign: 'center',
  },
  container: {
    paddingTop: 30
  }
};

// Stateful Component
// e.g. can call this.setState() and has Lifecycle Hooks
class CarShow extends React.Component {

  constructor(props) {
    // Pass the props to React.Component
    super(props);
    // Bind our function's scope to the CarShow component
    // which enables access to this.props, this.setState(), etc.
    this.onCarSelected = this.onCarSelected.bind(this);
  }

  onCarSelected(car) {
    const {toggleCarEditorModal} = this.props;
    // connect wraps
    toggleCarEditorModal(car.id);
  }

  render() {
    const {carEditorModal, carDetails = {}, addCar} = this.props;
    return (
      <div style={styles.container}>
        <CarEditor />
        <Header size='large' style={{textAlign: 'center'}}>Welcome to the Ride Show, Credera!</Header>
        <Grid>
          <Grid.Row>
            <Grid.Column style={{textAlign: 'center'}}>
              <Button onClick={() => addCar()}>Add Car</Button>
              <CarSearch />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <If condition={true}>
              <CarList cars={this.props.filteredCars} onCarSelected={this.onCarSelected} />
            </If>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

}

const filterCars = (cars, searchText) => {
  return searchText ? cars.filter(car => {
    return car.make.toLowerCase().includes(searchText);
  }): cars;
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
    carDetails: _.get(state, 'carShow.carDetails'),
    filteredCars: filterCars(state.carShow.cars, state.carShow.carSearch.searchText)
  }),
  // Map actions your component needs to trigger
  // This will wrap a dispatch around your action creators
  {...carEditorActions, ...carShowActions}
)(CarShow);
