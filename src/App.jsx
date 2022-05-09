import './App.css';
import Rotas from './components/routes/Rotas';

import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <Router> 
        <Rotas />
      </Router>
      
    </div>
  );
}

export default App;
