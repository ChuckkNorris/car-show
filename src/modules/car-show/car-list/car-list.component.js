import React from 'react';
import {Card, Grid} from 'semantic-ui-react';
// import {Col, Row, Grid} from 'react-bootstrap';

import CarCard from '../car-card/car-card.component';
import GridColumn from 'semantic-ui-react/dist/commonjs/collections/Grid/GridColumn';

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
    <Grid>
      <Grid.Row columns={6}>
        {cars ? cars.map(car =>
          <Grid.Column key={car.id} style={styles.carColumn} onClick={() => onCarSelected(car)}>
            <CarCard car={car} />
          </Grid.Column>
        ): null}
      </Grid.Row>
    </Grid>
    // <Grid bsClass='container'>
    //   <Row>
    //     {cars ? cars.map(car =>
    //       <Col onClick={() => onCarSelected(car)} key={car.id} style={styles.carColumn} xs={12} sm={4} md={3} lg={2}>
    //         <CarCard car={car} />
    //       </Col>
    //     ): null}
    //   </Row>
    // </Grid>
  );
}

export default CarList;
