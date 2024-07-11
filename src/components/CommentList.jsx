 import SingleComment from "./SingleComment";



 function CommentList({comments, loadComments}) {

    if (!Array.isArray(comments) || comments.length === 0){
        return <p>No comments available yet</p>
    }

    return (

         <div className="w-75">

         
            {comments.map(c =>
                <SingleComment key={c._id} comment={c} loadComments={loadComments}  />)}

        </div>
            
    )
}

export default CommentList