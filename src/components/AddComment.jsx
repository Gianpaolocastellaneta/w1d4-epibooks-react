import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function AddComment({ asin, loadComments }) {
    const initialFormState = {
        rate: "",
        comment: "",
        elementId: asin
    };

    const [formValue, setFormValue] = useState(initialFormState);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValue({
            ...formValue,
            [name]:value,
        });
    }

    const handleSaveComment = async () => {
        try {
            const response = await  fetch("https://striveschool-api.herokuapp.com/api/comments/",{
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhlYzU5ODU0YWUyNDAwMTU1NmEwYjAiLCJpYXQiOjE3MjA2MzI3MjgsImV4cCI6MTcyMTg0MjMyOH0.C1TANmsg7fQOQ2taBrVWY8t3f6x3eHouvkCs27nBQBQ"
                    },
                method: "POST",
                body: JSON.stringify(formValue)
                }
              )
              if(response.ok){
                
                loadComments();
                setFormValue(initialFormState)
                alert("Comment successfully added!")
              }else{
                alert("Unable to add the comment! All fields are required.")
              }
              }
              catch(error){
                alert("Generic Error! Try Later.")
              }
            
            };
    return (

        // <div className="my-3">
        //     <Form className='w-75'>

        //         <Form.Group className="mb-5" controlId="rate">
        //             <Form.Label className='mx-5'><h6>Rate 1 to 5</h6></Form.Label>
        //             <Form.Control  type="number" placeholder="Rate" min="1" max="5" name='rate' value={formValue.rate} required onChange={handleChange}/>
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="comment">
        //             <Form.Label><h6 className='mx-5'>Your comment</h6></Form.Label>
        //             <Form.Control as="textarea" rows={3} name="comment" value={formValue.comment} required onChange={handleChange}/>
        //         </Form.Group>
        //         <Button className='mx-5' variant="success" onClick={handleSaveComment}>Send Comment</Button>
        //     </Form>
        // </div>
<Form>
        <Form.Group className="mb-3" controlId="rate">
        <Form.Label>Rate from 1 to 5</Form.Label>
        <Form.Control type="number" placeholder="Rate" min="1" max="5" name='rate' value={formValue.rate} required onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>Your Comment</Form.Label>
        <Form.Control as="textarea" rows={3} name="comment" value={formValue.comment} required onChange={handleChange} />
      </Form.Group>
      <Button className='mb-2' variant="primary" onClick={handleSaveComment}>Add Comment</Button>
    </Form>
    );
}

export default AddComment;