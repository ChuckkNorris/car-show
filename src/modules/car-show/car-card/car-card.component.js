import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';
import './car-card.component.css';

const styles = {
  carColumn: {
    paddingTop: 20
  },
  carCard: {
    width: '100%',
    height: '300px'
  }
};

// Stateless Component
const CarCard = ({car}) => {

  const imageStyle = {
    background: `url(${car.imageUrl}) no-repeat left center`,
    backgroundSize: '100%',
    height: 300 // px is default
  };
  
  return (
    <Card style={styles.carCard}>
      <div style={imageStyle}></div>
      {/* <img style={background}
      <Image src={car.imageUrl} /> */}
      <Card.Content>
        <Card.Header>
          {car.make} {car.model}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
          {car.year}
          </span>
        </Card.Meta>
        <Card.Description>
          {car.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='bomb' />
          {car.horsepower} hp
        </a>
      </Card.Content>
    </Card>
  );
};

export default CarCard;
