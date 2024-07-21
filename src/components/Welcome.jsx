import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


function Welcome() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="secondary" className='m-2'>
        <div className='d-flex justify-content-center video'>
          <h2 className='mx-5 my-5 p-5 w-75'>Welcome to EpicBooks</h2>
          <video width="100%" height="300" autoPlay muted>
            <source src="/books.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="outline-danger">
            Close
          </Button>
        </div>
      </Alert>
      <div className='d-flex justify-content-center m-4'>

        {!show && <Button variant='success' onClick={() => setShow(true)}>Show Alert</Button>}

      </div>
    </>
  );
}

export default Welcome;