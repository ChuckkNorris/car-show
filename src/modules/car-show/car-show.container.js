import React from 'react';
import { If } from "../common/utilities";

// Stateful Component
class CarShow extends React.Component {

  render() {

    return (
      <div>
        <h1>Welcome to the Car Show, Credera!</h1>
        <If condition={true}>
          <div>
            <p>
              Hello There!
            </p>
          </div>
        </If>
      </div>
    );
  }
}
export default CarShow;
