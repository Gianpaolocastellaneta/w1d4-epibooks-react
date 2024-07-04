import history from "../data/history.json";
import {Form, Row,} from 'react-bootstrap';

import SingleCard from "./SingleCard";
import { useState } from 'react';


function AllTheBooks() {
    const [search, setSearch] = useState("");
    const [resultSearch, setResultSearch] = useState(history);
    const handleSearch = (event) => {
        setSearch(event.target.value)
        //filtriamo i libri con il titolo e devono includere la parola cercata nel value
        const resultTemp = history.filter((book) => {
            //ricerca per titolo oppure (||) per asin
            return book.title.toLowerCase().includes(event.target.value.toLowerCase()) || book.asin.includes(event.target.value)
        })
        //setResultSearch deve essere uguale a resultTemp
        setResultSearch(resultTemp)
    }
    return (
        
        <div className="container">
            <div className="d-flex justify-content-center">
                <Form.Control onChange={handleSearch} type="text" placeholder="Cerca libro..." className="mb-5 bg-light w-75" />
            </div>
            <Row>
                {resultSearch.map((book) => (
                    <SingleCard
                        key={book.asin}
                        asin={book.asin}
                        title={book.title}
                        img={book.img}
                        price={book.price}
                        category={book.category}
                    />


                ))}
            </Row>
        </div>
      




    );
}
export default AllTheBooks;
