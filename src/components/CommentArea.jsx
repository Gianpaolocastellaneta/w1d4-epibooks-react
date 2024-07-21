import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading"


function CommentArea({ asin }) {
    const [comments, setComments] = useState([])

    //statto per spinner di caricamento al click della card
    const [isLoading, setIsLoading] = useState(false)
    const loadComments = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhlYzU5ODU0YWUyNDAwMTU1NmEwYjAiLCJpYXQiOjE3MjA2MzI3MjgsImV4cCI6MTcyMTg0MjMyOH0.C1TANmsg7fQOQ2taBrVWY8t3f6x3eHouvkCs27nBQBQ"
                }
            })
            if (response.ok) {
                const data = await response.json()
                setComments(data)
                setIsLoading(false)
            }
            else {
                console.error('Failed to fetch comments')
                setIsLoading(false)
            }
        } catch (error) {
            console.error("Error fetching comments:", error)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        loadComments()
    }, [asin]);

    // const handleDeleteComment = (updateComments) => {
    //     setComments(updateComments)
    // }

    // const handleAddedComment = async () => {
    //     loadComments()
    // }
    return (
        <>
            <div className="text-center">
                {isLoading && <Loading />}
            </div>
            <div className=" border border-dark mb-5 mt-3">
                <AddComment asin={asin} loadComments={loadComments} />
            </div>
            <div>
                <CommentList comments={comments} loadComments={loadComments} />
            </div>
        </>
    )
}

export default CommentArea;