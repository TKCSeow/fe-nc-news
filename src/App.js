import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="App">     
          <Header/>  
          <MainContainer/>
    </div>
  );
}

export default App;
