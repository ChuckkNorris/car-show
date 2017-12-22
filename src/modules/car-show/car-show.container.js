import React from 'react';
import {If} from "../common/utilities";

// Stateful Component
class CarShow extends React.Component {

    render() {
        
      return (
        <If condition={true}>
          <div>
            <p>
              Hello There!
            </p>
          </div>
        </If>
      );
    }
} 
export default CarShow;
