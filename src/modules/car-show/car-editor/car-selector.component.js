import React from 'react';
import { Grid, Input } from 'semantic-ui-react';

const CarSelector = ({car, updateCar}) => {
  
  const _updateCar = (newValues) => {
    // Creates single object with combined props of car and of newValues
    updateCar({...car, ...newValues})
  }

  return (
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Input defaultValue={car.year} onChange={(e) => _updateCar({year: e.currentTarget.value})} placeholder="year" />
        </Grid.Column>
        <Grid.Column>
          <Input defaultValue={car.make} onChange={(e) => _updateCar({make: e.currentTarget.value})} placeholder="make" />
        </Grid.Column>
        <Grid.Column>
          <Input defaultValue={car.model} onChange={(e) => _updateCar({model: e.currentTarget.value})} placeholder="model" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default CarSelector;
