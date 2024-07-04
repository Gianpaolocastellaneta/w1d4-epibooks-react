import {Button, Card, Col} from 'react-bootstrap';
import './SingleCard.css'
import { useState } from 'react';


function SingleCard(book) {
  //creo uno Stato per selezionare che ha come valore iniziale false
  const [selected, setSelected] = useState(false);

  //creo una funzione per cambiare lo stato di selected da falso a vero
  const handleClick = () => {
    setSelected(!selected);
  };

  
  
  return (
    //aggiungo onClick={handleClick} se selected è vero aggiungo la classe se falso la rimuovo usando il ternario
    <Col xs={6} lg={3} style={{margin: '10px 0 20px 0' }}>
    <Card onClick={handleClick} className={selected ? 'selected my-card' : 'my-card'} style={{ width: '230px', cursor: 'pointer', height: '100%' }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className='text-center'>{book.title}</Card.Title>
        <Card.Text className='text-center mt-2 h5 text-primary'>
            Price €{book.price}
        </Card.Text>
        <Button className="mt-auto" variant="dark">Details</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default SingleCard;