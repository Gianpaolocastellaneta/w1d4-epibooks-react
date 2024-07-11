
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
// import { books } from './data/Books';

function App() {
  //creo uno state per il campo di ricerca
  const [searchQuery, setSearchQuery] = useState('')

  // const [search, setSearch] = useState("");
  //   const [resultSearch, setResultSearch] = useState(books)
  //   const handleSearch = (event) => {
  //       setSearch(event.target.value);
  //       const resultSearchTemp = books.filter((b) => {
  //         return b.title.toLowerCase().includes(event.target.value.toLowerCase());
  //       })
  //       setResultSearch(resultSearchTemp)
  //   }
  return (
    <div>
          <ThemeProvider>

      {/* passo la props searchQuery e setSearchQuery che viene fornita da App a MyNav */}
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Welcome />
      {/* passo la props searchQuery che viene fornita da App a AllTheBooks */}
      <AllTheBooks searchQuery={searchQuery} />
      <MyFooter />
      </ThemeProvider>

    </div>
  );
}

export default App;
