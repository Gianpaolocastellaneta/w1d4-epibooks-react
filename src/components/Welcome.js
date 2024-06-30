import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Welcome() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="primary">
        <Alert.Heading className='text-center p-2'>History Category
        </Alert.Heading>
        <p className='p-2'>
        Welcome to our History Books section, where you'll discover a curated selection of compelling reads that delve into the rich 
        tapestry of our past. Explore captivating stories and gain insights into the events and figures that have shaped our world.
        </p>
        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="outline-danger">
            Close
          </Button>
        </div>
      </Alert>
      <div className='d-flex justify-content-center m-5'>

      {!show && <Button variant='success' onClick={() => setShow(true)}>Show Alert</Button>}

      </div>
    </>
  );
}

export default Welcome;