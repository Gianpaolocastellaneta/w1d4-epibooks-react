import './SingleCard.css'
import { ThemeContext } from '../context/ThemeContextProvider';
// import CommentArea from './CommentArea';

import { Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { Link } from 'react-router-dom';






function SingleCard({ book, select, handleClick }) {

  const { theme } = useContext(ThemeContext)



  return (
    <>
      <Card className={theme === 'light' ? 'myCard' : 'myCard bg-dark '} style={{ width: '18rem' }} data-bs-theme={theme}>
        <Card.Img data-testid="card-image" variant="top" className={select === book.asin ? "imgBook redBorder" : "imgBook"} src={book.img} onClick={() => handleClick(book.asin)} />
        <Card.Body >
          <Card.Title>{book.title}</Card.Title>
          <Card.Text className='text-center fw-bold '>{book.price}€</Card.Text>
        </Card.Body>
        <Button as={Link} to={`/bookdetails/${book.asin}`} variant="secondary" className='mx-4 my-4' >Details</Button>

      </Card>

    </>
  )
}

export default SingleCard;