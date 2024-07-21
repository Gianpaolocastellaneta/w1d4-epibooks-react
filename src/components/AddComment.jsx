import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';


function AddComment({ asin, loadComments }) {
  const initialFormState = {
    rate: "",
    comment: "",
    elementId: asin
  };

  const [formValue, setFormValue] = useState(initialFormState);
  const [alert, setAlert] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  const handleSaveComment = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhlYzU5ODU0YWUyNDAwMTU1NmEwYjAiLCJpYXQiOjE3MjA2MzI3MjgsImV4cCI6MTcyMTg0MjMyOH0.C1TANmsg7fQOQ2taBrVWY8t3f6x3eHouvkCs27nBQBQ"
        },
        method: "POST",
        body: JSON.stringify(formValue)
      }
      )
      if (response.ok) {

        loadComments();
        setFormValue(initialFormState)
        setAlert({
          success: true,
          message: "Comment added successfully!"
        })
      } else {
        setAlert({
          success: false,
          message: "Error, all fields must be correct"
        })
      }
    }
    catch (error) {
      setAlert({
        success: false,
        message: "Error! Try Later Thanks"
      })
    }
    setTimeout(() => {
      setAlert(null)
    }, 3000
    )
  };
  return (
    <>


      <Form className='border border-dark '>
        <Form.Group className="mb-3" controlId="rate">
          <Form.Label className='mx-5 mt-4'><h5>Rate 1 to 5</h5></Form.Label>
          <Form.Control className='w-75 mx-4 mb-5' type="number" placeholder="Rate" min="1" max="5" name='rate' value={formValue.rate} required onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="comment">
          <Form.Label className='mx-5'><h5>Comment</h5></Form.Label>
          <Form.Control className='w-75 mx-4' as="textarea" placeholder="Write comment..." rows={3} name="comment" value={formValue.comment} required onChange={handleChange} />

        </Form.Group>
        <div className='d-flex justify-content-center'>
          <Button className='mb-4 mt-4' variant="success" onClick={handleSaveComment}>Add Comment</Button>
        </div>
      </Form>
      {alert && <Alert key={alert.success ? "success" : "danger"} variant={alert.success ? "success" : "danger"} onClose={() => setAlert(null)} dismissible>{alert.message}</Alert>}

    </>
  );
}

export default AddComment;