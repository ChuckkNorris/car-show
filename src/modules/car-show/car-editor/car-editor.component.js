import React from 'react';
import {Modal, Button, Icon, Header} from 'semantic-ui-react';

const CarEditorModal = ({carEditorModal}) => {
  // carEditorModal.isOpen
  // trigger={<Button>Show Modal</Button>}
  return (
    // <Modal open={carEditorModal.isOpen}>
    //   <Modal.Header> Hello!</Modal.Header>
    //   <Modal.Content image>
    //     {/* <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' /> */}
    //     <Modal.Description>
    //       <Header>Default Profile Image</Header>
    //       <p>We've found the following gravatar image associated with your e-mail address.</p>
    //       <p>Is it okay to use this photo?</p>
    //     </Modal.Description>
    //   </Modal.Content>
    // </Modal>
    <Modal open={carEditorModal.isOpen} basic size='small'>
      <Header icon='archive' content='Archive Old Messages' />
      <Modal.Content>
        <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CarEditorModal;
