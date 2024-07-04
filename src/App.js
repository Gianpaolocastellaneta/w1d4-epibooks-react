
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

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
