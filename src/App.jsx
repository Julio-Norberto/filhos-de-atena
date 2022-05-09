import './App.css';
import Rotas from './components/routes/Rotas';
import Home from './components/home/Home';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <Router> 
        <Home />
        <Rotas />
      </Router>
      
    </div>
  );
}

export default App;
