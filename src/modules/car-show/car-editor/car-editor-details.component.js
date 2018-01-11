import React from 'react';
import _ from 'lodash';
import {Table, Segment, Dimmer, Loader} from 'semantic-ui-react';
import * as editorHelpers from './car-editor.helpers';

const getSpecsAsRows = (carDetailsResponse) => {
  const trimSpecs = editorHelpers.getLastModelTrimSpecs(carDetailsResponse);
  const specRows = trimSpecs.map(spec => {
    return (
      <Table.Row key={spec.name}>
        <Table.Cell>{spec.name}</Table.Cell>
        <Table.Cell>{spec.value}</Table.Cell>
      </Table.Row>
    );
  });
  return specRows;
}

const LoadingScreen = () => (
  <Segment>
    <Dimmer active>
      <Loader>Loading</Loader>
    </Dimmer>
</Segment>
);

// TODO #2: Create removeCar() action
const CarEditorDetails = ({carDetails}) => {
  if (carDetails.isLoading)
    return <LoadingScreen />;
  const response = carDetails.response;

  if (!response || !response.Trims || response.Trims.length < 1)
    return (<p>No Car Data Found :</p>);
 
  return (
    <Table>
      <Table.Header>
        <Table.HeaderCell colSpan='2'>Vehicle Specifications</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        {getSpecsAsRows(response)}
      </Table.Body>
    </Table>
  )
};

export default CarEditorDetails;
