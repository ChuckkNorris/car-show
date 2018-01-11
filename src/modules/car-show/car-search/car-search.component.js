// TODO #3: Build search component and implement redux state for it
import React from 'react';
import {Input} from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as carShowActions from '../car-show.actions';

class CarSearch extends React.Component {

  render() {
    return <Input onChange={(e) => this.props.searchCars(e.currentTarget.value)} placeholder='Search by make, model, year' />
  }
}

export default connect(
  (state) => ({
    searchText: state.carShow.carSearch.searchText
  }),
  {
    searchCars: carShowActions.searchCars
  }
)(CarSearch);
