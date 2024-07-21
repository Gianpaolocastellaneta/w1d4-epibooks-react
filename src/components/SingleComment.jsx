import { ListGroup, Button, Form, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Loading from './Loading';




function SingleComment({ comment, loadComments, setAlert }) {

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhlYzU5ODU0YWUyNDAwMTU1NmEwYjAiLCJpYXQiOjE3MjA2MzI3MjgsImV4cCI6MTcyMTg0MjMyOH0.C1TANmsg7fQOQ2taBrVWY8t3f6x3eHouvkCs27nBQBQ",
          'Content-Type': 'application/json'
        },
        method: "DELETE",
      })
      if (response.ok) {
        Loading()
        loadComments()
        setAlert({
          success: true,
          message: "Comment successfully deleted!"
        })

      } else {
        Loading()
        setAlert({
          success: false,
          message: "Unable to delete the comment!"
        })
      }
    }
    catch (error) {
      Loading()
      setAlert({
        success: false,
        message: "General Error! Try Later"
      })
    }
    setTimeout(() => {
      setAlert(null)
    }, 2000
    )
  };

  const [alertEdit, setAlertEdit] = useState(null)

  const [isEditing, setIsEditing] = useState(false)

  const initialFormEdit = {
    rate: comment.rate,
    comment: comment.comment,
    elementId: comment.elementId
  }

  const [formValue, setFormValue] = useState({})

  const editForm = () => {
    setIsEditing(!isEditing)
  }

  useEffect(() => {
    const initialFormValue = {
      rate: comment.rate,
      comment: comment.comment,
      elementId: comment.elementId
    }
    setFormValue(initialFormValue)
  }, [comment])


  const handleEdit = async () => {
    if (formValue.rate > 5 || formValue.rate < 1 || formValue.comment === "") {
      setAlertEdit({
        success: false,
        message: "Insert a number between 1 and 5; All fields are required."
      })
      setTimeout(() => {
        setAlertEdit(null)
      }, 2000
      )
      return
    }
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {

        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhlYzU5ODU0YWUyNDAwMTU1NmEwYjAiLCJpYXQiOjE3MjA2MzI3MjgsImV4cCI6MTcyMTg0MjMyOH0.C1TANmsg7fQOQ2taBrVWY8t3f6x3eHouvkCs27nBQBQ",
          "Content-Type": "application/json"
        },
        method: 'PUT',
        body: JSON.stringify(formValue)
      })
      if (response.ok) {
        Loading()
        setAlertEdit({
          success: true,
          message: "Comment successfully edited!"
        })
        setIsEditing(false)
        // setFormValue(initialFormEdit)
        loadComments()
      }
      else {
        Loading()
        setAlertEdit({
          success: false,
          message: "Unable to edit the comment! All fields are required."
        })
      }
    }
    catch (error) {
      // alert("General Error! Try Later")
      setAlertEdit({
        success: false,
        message: "General Error! Try Later"
      })
    }
    setTimeout(() => {
      setAlertEdit(null)
    }, 2000
    )
  }
  const handleChange = (ev => {
    setFormValue({ ...formValue, [ev.target.name]: ev.target.value })
  })
  return (
    <>
      {alertEdit && <Alert key={alert.success ? "success" : "danger"} variant={alertEdit.success ? "success" : "danger"} onClose={() => setAlertEdit(null)} dismissible>{alertEdit.message}</Alert>}
      <ListGroup className='mb-3 border border-2 border-dark' data-testid="comment">


        <ListGroup.Item><h5 className='text-truncate'>{comment.author} </h5> </ListGroup.Item>
        <ListGroup.Item><h5> {isEditing ? <Form.Control className='mb-3' type="number" min="1" max="5" name="rate" required onChange={handleChange} value={formValue.rate} /> : comment.rate}</h5> </ListGroup.Item>
        <ListGroup.Item><h5> {isEditing ? <Form.Control as="textarea" className='mb-3' aria-label="With textarea" name="comment" required onChange={handleChange} value={formValue.comment} /> : comment.comment}</h5></ListGroup.Item>
        <div className='d-flex justify-content-center mt-2 mb-3'>
          <Button type="button" className="btn btn-danger mb-2 me-3" onClick={handleDelete}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg></Button>
          <Button type="button" className="btn btn-warning mb-2 ms-3" onClick={() => { isEditing ? handleEdit() : editForm() }} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
          </svg></Button>

        </div>




      </ListGroup>
    </>
  )
}

export default SingleComment;