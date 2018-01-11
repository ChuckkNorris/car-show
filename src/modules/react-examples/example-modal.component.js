import React from 'react';
import {Modal, Button} from 'semantic-ui-react';

const ExampleStatelessModalWithBreeds = ({isOpen, breeds, onClose}) => {
  return (
    <div>
      <Modal onClose={() => onClose()} open={isOpen}>
        I'm a modal!
        <ul>
          {breeds.map(breedName => (
            <li key={breedName}>{breedName}</li>
          ))}
        </ul>
      </Modal>
    </div>
  );
}

// 
const ExampleStatelessModal = ({isOpen, onClose}) => {
  return (
    <div>
      <Button
        onClick={() => this.setState({...this.state, isOpen: true})}>
        Open Modal
      </Button>
      <Modal
        open={isOpen}
        onClose={() => onClose()}>
        I'm a modal and I'm open!
      </Modal>
    </div>
  );
}

class ExampleStatefulModal extends React.Component {
  // Pass the props
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  // TODO #1: Call this endpoint at various stages of lifecycle
  // 'https://dog.ceo/api/breeds/list/all'
  // Response format => { message: { 'breedNameHere': []}}

  // Called on first render and whenever its state/props change
  render() {
    return (
      <div>
        <Button
          onClick={() => this.setState({...this.state, isOpen: true})}>
          Open Modal
        </Button>
        <Modal
          open={this.state.isOpen}
          onClose={() => this.setState({...this.state, isOpen: false})}>
          I'm a modal and I'm open!
        </Modal>
      </div>
    );
  }
}

export default ExampleModal;
