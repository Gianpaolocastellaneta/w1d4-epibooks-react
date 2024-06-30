
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav.js';
import MyFooter from './components/MyFooter.js';
import Welcome from './components/Welcome.js';
import AllTheBooks from './components/AllTheBooks.js';

function App() {
  return (
  <>
  <MyNav />
  <Welcome />
  <AllTheBooks />
  <MyFooter />
  </>
    

  );
}

export default App;
