import SingleCard from "./SingleCard";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import CommentArea from "./CommentArea";
import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';
// import { books } from "../data/Books";



function AllTheBooks({ resultSearch }) {
    const { theme } = useContext(ThemeContext)
    const [select, setSelect] = useState(null)
    const handleClick = (asin) => {
        if (asin === select) {
            setSelect(null)
        } else {
            setSelect(asin)
        }

    }
    return (
        <main className={theme === "light" ? "mx-2" : "bg-dark px-3"} data-bs-theme={theme}>

            <Container fluid>
                <Row>
                    <Col xs={6} md={8} lg={9}>
                        <div className="d-flex flex-wrap justify-content-evenly pe-0 ">
                            {resultSearch.map((b) => (
                                <SingleCard key={b.asin} book={b} select={select} handleClick={handleClick} />
                            )
                            )}
                        </div>
                    </Col>
                    <Col xs={6} md={4} lg={3}>
                        {select && <CommentArea asin={select} />}
                    </Col>
                </Row>
            </Container>
        </main>
    )
}
export default AllTheBooks;