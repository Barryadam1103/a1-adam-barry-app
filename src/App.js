import './App.css';
import HomePage from './pages/HomePage';
import AddMovie from './pages/AddMovie';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='addmovie' element={<AddMovie />} />            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
