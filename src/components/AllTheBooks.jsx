// import  history  from "../data/history.json";
import { Row } from 'react-bootstrap';
import SingleCard from "./SingleCard";
import { books } from '../data/Books';
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


// import { useState } from 'react';

//passo la props searchQuery che viene fornita da App
function AllTheBooks({ searchQuery }) {

    const { theme } = useContext(ThemeContext);

    const backgroundStyle = {
      backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
      color: theme === 'light' ? '#000000' : '#ffffff',
      minHeight: '100vh'
    };


    // const [search, setSearch] = useState("");
    // const [resultSearch, setResultSearch] = useState(history);
    // const handleSearch = (event) => {
    //     setSearch(event.target.value)
    //     //filtriamo i libri con il titolo e devono includere la parola cercata nel value
    //     const resultTemp = history.filter((book) => {
    //         //ricerca per titolo oppure (||) per asin
    //         return book.title.toLowerCase().includes(event.target.value.toLowerCase()) || book.asin.includes(event.target.value)
    //     })
    //     //setResultSearch deve essere uguale a resultTemp
    //     setResultSearch(resultTemp)
    // }
    return (
        <div style={backgroundStyle}>
        <div className="container">
            
            {/* <div className="d-flex justify-content-center">
                <Form.Control onChange={handleSearch} type="text" placeholder="Cerca libro..." className="mb-5 bg-light w-75" />
            </div> */}


            <Row> {books
             // eseguo filer per campo di ricerca in base al titolo
             .filter((b) => b.title.toLowerCase().includes(searchQuery))
             // eseguo il mapping per le single card
             .map((b) => (<SingleCard key={b.asin} book={b} />

                )
                )}
            </Row>
        </div>
        </div>
      




    );
}
export default AllTheBooks;
