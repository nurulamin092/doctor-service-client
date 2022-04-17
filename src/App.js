import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import './App.css';
import PageNotFount from './Pages/PageNotFount/PageNotFount';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/register' element={<Register></Register>}>Register</Route>
        <Route path='*' element={<PageNotFount></PageNotFount>}></Route>

      </Routes>
    </div>
  );
}

export default App;
