import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>

     <Routes>

      <Route path='/' element= {<Home />}></Route>
      <Route path='/dashboard' element= {<Dashboard />}></Route>

     </Routes>

    </Router>
    // <div className="App">
    //   <Home></Home>
    // </div>
  );
}

export default App;
