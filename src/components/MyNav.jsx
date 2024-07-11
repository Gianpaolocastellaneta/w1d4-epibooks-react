import {Container, Form, Nav, Navbar, Button} from 'react-bootstrap';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';




function MyNav({ searchQuery, setSearchQuery }) {


  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#" className='me-5'>EPIBOOKS REACT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
          <Button className='me-3' variant="secondary" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
            <Form.Group>
              {/* inserisco il campo di ricerca */}
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                // prende come value il valore di searchQuery e lo setto con setSearchQuery
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;