import React from 'react';
import { If } from "../common/utilities";
import {Header} from 'semantic-ui-react';
import CarList from './car-list/car-list.component';
import CarEditor from './car-editor/car-editor.component';

const styles = {
  header: {
    textAlign: 'center',
    
  }
  
}

// Stateful Component
class CarShow extends React.Component {

  render() {

    return (
      <div>
        <Header style={{textAlign: 'center'}}>Welcome to the Ride Show, Credera!</Header>
        <If condition={true}>
          <CarList />
        </If>
        <CarEditor />
      </div>
    );
  }
}
export default CarShow;

