import React from 'react';
import {Card} from 'semantic-ui-react';
import {Col, Row, Grid} from 'react-bootstrap';

import CarCard from '../car-card/car-card.component';

const cars = [
  { id: 1, year: 1991, make: 'BMW', model: 'M3', description: 'The winningest BMW ever made in a thousand billison gajillion trajillion fibokulion', horsepower: 190, imageUrl: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/1000816_10200919966374232_277872527_n.jpg?oh=5ba15be1327a420cf9796e94b7f49639&oe=5ABC804A'},
  { id: 2, year: 1991, make: 'Yamaha', model: 'VMAX', description: 'The winningest BMW ever made', horsepower: 190, imageUrl: 'https://i.imgur.com/7Orsmp7.jpg'},
  { id: 3, year: 1991, make: 'Suzuki', model: 'Hayabusa', description: 'The winningest BMW ever made', horsepower: 190, imageUrl: 'https://i.imgur.com/Ryq49Ue.jpg'},
  { id: 4, year: 1991, make: 'Suzuki', model: 'Hayabusa', description: 'The winningest BMW ever made', horsepower: 190, imageUrl: 'https://i.imgur.com/PrqcRff.jpg'},
  { id: 5, year: 1991, make: 'BMW', model: 'M3', description: 'The winningest BMW ever made', horsepower: 190, imageUrl: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/1000816_10200919966374232_277872527_n.jpg?oh=5ba15be1327a420cf9796e94b7f49639&oe=5ABC804A'},
  { id: 6, year: 1991, make: 'BMW', model: 'M3', description: 'The winningest BMW ever made', horsepower: 190, imageUrl: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/1000816_10200919966374232_277872527_n.jpg?oh=5ba15be1327a420cf9796e94b7f49639&oe=5ABC804A'},
  { id: 7, year: 1991, make: 'BMW', model: 'M3', description: 'The winningest BMW ever made', horsepower: 190, imageUrl: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/1000816_10200919966374232_277872527_n.jpg?oh=5ba15be1327a420cf9796e94b7f49639&oe=5ABC804A'},
  { id: 8, year: 1991, make: 'BMW', model: 'M3', description: 'The winningest BMW ever made', horsepower: 190, imageUrl: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/1000816_10200919966374232_277872527_n.jpg?oh=5ba15be1327a420cf9796e94b7f49639&oe=5ABC804A'},
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
          <Col style={styles.carColumn} xs={12} sm={4} md={3} lg={2}>
            <CarCard  key={car.id} car={car} />
          </Col>
        )}
      </Row>
    </Grid>
  );
}

export default CarList;
