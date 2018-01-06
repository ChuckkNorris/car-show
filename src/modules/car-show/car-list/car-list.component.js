import React from 'react';
import {Card} from 'semantic-ui-react';
import {Col, Row, Grid} from 'react-bootstrap';

import CarCard from '../car-card/car-card.component';

const styles = {
  carColumn: {
    paddingTop: 20
  },
  carCard: {
    width: '100%'
  }
};

// Stateless Component
const CarList = ({cars, onCarSelected}) => {
  return (
    <Grid bsClass='container'>
      <Row>
        {cars ? cars.map(car =>
          <Col onClick={() => onCarSelected(car)} key={car.id} style={styles.carColumn} xs={12} sm={4} md={3} lg={2}>
            <CarCard car={car} />
          </Col>
        ): null}
      </Row>
    </Grid>
  );
}

export default CarList;
