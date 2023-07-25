import React from 'react'; import { Pagination } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Film = ({titre , description ,affiche}) => {
    return <Card className='col-3 mt-5 mb-5' >
        <Card.Img variant="top" src={affiche} />
        <Card.Body>
          <Card.Title>{titre}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary">voir plus</Button>
        </Card.Body>
      </Card>
      
};

export default Film;