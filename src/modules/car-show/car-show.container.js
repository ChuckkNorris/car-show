import React from 'react';
import { If } from "../common/utilities";
import {Header} from 'semantic-ui-react';
import CarList from './car-list/car-list.component';

// Stateful Component
class CarShow extends React.Component {

  render() {

    return (
      <div>
        <Header style={{textAlign: 'center'}}>Welcome to the Ride Show, Credera!</Header>
        <If condition={true}>
          <CarList />
        </If>
      </div>
    );
  }
}
export default CarShow;
