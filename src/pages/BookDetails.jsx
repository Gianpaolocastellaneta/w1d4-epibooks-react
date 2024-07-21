import { useParams } from 'react-router-dom'
import { Card, Container, Row, Col } from 'react-bootstrap';
import { books } from '../data/Books';
import CommentArea from '../components/CommentArea';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContextProvider';


function BookDetails() {
  const { theme } = useContext(ThemeContext)
  const { asin } = useParams();
  const selectedBook = books.find(book => book.asin === asin)

  return (
    <div className={theme === "light" ? "" : "bg-dark text-white pt-5 pb-5"} data-bs-theme={theme} >
      <Container>
        <h1 className='text-center mb-5'><span className='d-none'>{asin}</span> {selectedBook.title} </h1>
        <Row >
          <Col xs={12} md={5} lg={5} className='d-flex justify-content-center'>
            <Card style={{ width: '26rem', height: '45rem' }}>
              <Card.Img variant="top" src={selectedBook.img} />
              <Card.Body >

                <Card.Text className='text-center fw-bold'>{selectedBook.price}€</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={5} lg={5} >
            {asin && <CommentArea asin={asin} />}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BookDetails;