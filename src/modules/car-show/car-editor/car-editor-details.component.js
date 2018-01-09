import React from 'react';
import _ from 'lodash';
import {Table, Segment, Dimmer, Loader} from 'semantic-ui-react';

const getSpecsAsTable = (carDetailsResponse) => {
  const trims = carDetailsResponse.Trims;
  const trim = trims[trims.length - 1];
  const details = Object.keys(trim).map(specName => {
    const specValue = trim[specName];
    return (
      <Table.Row key={specName}>
        <Table.Cell>{specName}</Table.Cell>
        <Table.Cell>{specValue}</Table.Cell>
      </Table.Row>
    );
  });
  return details;
}

const LoadingScreen = () => (
  <Segment>
    <Dimmer active>
      <Loader>Loading</Loader>
    </Dimmer>
</Segment>
);

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
        {getSpecsAsTable(response)}
      </Table.Body>
    </Table>
  )
};

export default CarEditorDetails;
