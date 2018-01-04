import React from 'react';
import {Card} from 'semantic-ui-react';
import {Col, Row, Grid} from 'react-bootstrap';

import CarCard from '../car-card/car-card.component';

const cars = [
  { id: 1, year: 1991, 
    make: 'BMW', model: 'M3', 
    description: 'The winningest BMW ever made', horsepower: 190, 
    imageUrl: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/1000816_10200919966374232_277872527_n.jpg?oh=5ba15be1327a420cf9796e94b7f49639&oe=5ABC804A'},
  { id: 2, year: 1991, make: 'Yamaha', model: 'VMAX', description: 'The winningest BMW ever made', horsepower: 190, imageUrl: 'https://i.imgur.com/7Orsmp7.jpg'},
  { id: 3, year: 1991, make: 'Suzuki', model: 'Hayabusa', description: 'The winningest BMW ever made', horsepower: 190, imageUrl: 'https://i.imgur.com/Ryq49Ue.jpg'},
  { id: 4, year: 1991, make: 'Suzuki', model: 'Hayabusa', description: 'The winningest BMW ever made', horsepower: 190, imageUrl: 'https://i.imgur.com/PrqcRff.jpg'},
  { id: 5, year: 2004, make: 'BMW', model: 'M3', description: 'The best looking M3 ever made', horsepower: 333, imageUrl: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/556504_10201320706512485_1742207775_n.jpg?oh=5d139f8a08ad8b61433e052ce259d0d3&oe=5AF62D62'},
  { id: 6, year: 1991, make: 'Yamaha', model: 'FZ-09', description: 'Neat Bike!', horsepower: 110, imageUrl: 'https://i.imgur.com/ULeJbZ8.jpg'},
  { id: 7, year: 1991, make: 'Chevrolet', model: 'Camaro', description: 'Neat Car!', horsepower: 190, imageUrl: 'https://i.imgur.com/NzRrvXW.png'},
  { id: 8, year: 1991, make: 'Volkswagon', model: 'Golf GTI', description: 'Neat Car!', horsepower: 190, imageUrl: 'https://i.imgur.com/q0klba1.png'},
  { id: 9, year: 1991, make: 'Ford', model: 'Mustang GT', description: 'The winningest BMW ever made', horsepower: 190, imageUrl: 'https://i.imgur.com/h3MgsQr.jpg'},
  { id: 10, year: 1991, make: 'Nissan', model: 'Altima', description: 'The winningest BMW ever made', horsepower: 190, imageUrl: 'https://i.imgur.com/nveAO0Z.png'},
  { id: 11, year: 1991, make: 'Mercedes', model: 'E350', description: 'The', horsepower: 190, imageUrl: 'https://i.imgur.com/hTaccS9.png'},
  { id: 12, year: 1991, make: 'Toyota', model: 'Land Cruiser', description: 'The', horsepower: 190, imageUrl: 'https://i.imgur.com/Soqsfzl.png'},
  { id: 13, year: 1991, make: 'Infinity', model: 'G35', description: 'The', horsepower: 190, imageUrl: 'https://i.imgur.com/xOovBnZ.png'},
  { id: 13, year: 1991, make: 'Mazda', model: 'RX7', description: 'The', horsepower: 190, imageUrl: 'https://i.imgur.com/1hvOxar.png'},
  // https://i.imgur.com/hTaccS9.png
];

const styles = {
  carColumn: {
    paddingTop: 20
  },
  carCard: {
    width: '100%'
  }
};

// Stateless Component
const CarList = ({car}) => {
  return (
    <Grid bsClass='container'>
      <Row>
        {cars.map(car =>
          <Col key={car.id} style={styles.carColumn} xs={12} sm={4} md={3} lg={2}>
            <CarCard car={car} />
          </Col>
        )}
      </Row>
    </Grid>
  );
}

export default CarList;
