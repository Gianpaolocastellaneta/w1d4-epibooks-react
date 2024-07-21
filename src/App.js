
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import { useState } from 'react';
import { books } from "./data/Books";

import ThemeContextProvider from "./context/ThemeContextProvider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import BookDetails from "./pages/BookDetails";

function App() {
  const [search, setSearch] = useState("");
    const [resultSearch, setResultSearch] = useState(books)
    const handleSearch = (event) => {
        setSearch(event.target.value);
        const resultSearchTemp = books.filter((b) => {
          return b.title.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setResultSearch(resultSearchTemp)
    }
  return (
    <BrowserRouter>
    <ThemeContextProvider>
      <div>
        <MyNav handleSearch={handleSearch} />
        <Welcome />
         <Routes>  
         <Route path="/" element={<AllTheBooks resultSearch={resultSearch} />}/>
        <Route path="/bookdetails/:asin" element={<BookDetails />}/>
        <Route path="/404" element={<NotFound/>}/>
        <Route path="/*" element={<Navigate to="/404" />} />
        </Routes>
        <MyFooter />
      </div>
    </ThemeContextProvider>
    </BrowserRouter>
    
  );
}
export default App;
