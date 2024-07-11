import {Button, Card, Col} from 'react-bootstrap';
import './SingleCard.css'
import { useState } from 'react';
import CommentArea from './CommentArea';



function SingleCard({book}) {
  //creo uno Stato per selezionare che ha come valore iniziale false
  const [selected, setSelected] = useState(false);

  // creo una funzione per cambiare lo stato di selected da falso a vero
  const handleClick = () => {
    setSelected(!selected);
  };

  // className={selected ? 'selected my-card' : 'my-card'}

  
  
  return (
    //aggiungo onClick={handleClick} se selected è vero aggiungo la classe se falso la rimuovo usando il ternario
    <>
    <Col xs={6} lg={3} style={{margin: '10px 0 20px 0' }}>
    <Card className={selected ? " redBorder " : "selected"}  >
      <Card.Img variant="top" src={book.img} onClick={handleClick} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className='text-center'>{book.title}</Card.Title>
        <Card.Text className='text-center mt-2 h5 text-primary'>
            Price €{book.price}
        </Card.Text>
        <Button className="mt-auto" variant="dark" onClick={handleClick}>Reviews</Button>

      </Card.Body>
      
      
    </Card>
    {/* inserisco che se selected è true visualizzo CommentArea sotto la Card */}
    {selected && <CommentArea asin={book.asin} />}
   
    </Col>
       
       </>
  )
}

export default SingleCard;