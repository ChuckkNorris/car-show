import React from 'react';
import {Card, Grid} from 'semantic-ui-react';
// import {Col, Row, Grid} from 'react-bootstrap';

import CarCard from '../car-card/car-card.component';
import GridColumn from 'semantic-ui-react/dist/commonjs/collections/Grid/GridColumn';

const styles = {
  carColumn: {
    paddingTop: 20,
    minWidth: 250
  },
  carCard: {
    width: '100%'
  },
  grid: {
    marginLeft: 20
  }
};

// Stateless Component
const CarList = ({cars, onCarSelected}) => {
  return (
    <Grid style={styles.grid}>
        {cars ? cars.map(car =>
          <Grid.Column
            mobile={8} tablet={4} computer={3}
            key={car.id}
            style={styles.carColumn}
            onClick={() => onCarSelected(car)}>
            <CarCard car={car} />
          </Grid.Column>
        ): null}
    </Grid>
  );
}

export default CarList;
