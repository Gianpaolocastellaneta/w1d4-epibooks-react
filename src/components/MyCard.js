import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MyCard.css'


function MyCard(book) {
  return (
    <Card className='my-card' style={{ width: '18rem', margin: '15px', cursor: 'pointer' }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className='text-center text-ellipsis'>{book.title}</Card.Title>
        <Card.Text className='text-center mt-2 h5 text-primary'>
            Price €{book.price}
        </Card.Text>
        <Button className="mt-auto" variant="dark">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;