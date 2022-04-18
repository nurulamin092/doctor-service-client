import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import './App.css';
import PageNotFount from './Pages/Shared/PageNotFount/PageNotFount';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Login/Register/Register';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import Checkout from './Pages/Home/Checkout/Checkout';
import Blogs from './Pages/Home/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<PageNotFount></PageNotFount>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
