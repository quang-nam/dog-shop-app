import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import NavBar from './NavBar/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DogsPage from './components/Dogs/DogsPage';
import {CartContext} from './Context/CartContext';
import SignUpForm from './components/SignUpForm/SignUpForm';
function App() {
  // lay data 
  const [allDogs, setAllDogs]= useState([]);// dog
  const [myCart, addToCart]= useState([{}]);// cart
  const [total, setTotal]=useState(0);// total 
  useEffect(()=>{
     async function getData(){
        const res= await axios.get("/v1/dogs")
        return res;
      }
      getData()
      .then((res)=> setAllDogs(res.data));// truyen all dogs từ phía server 
      getData().catch((err)=> console.error(err));
  },[])
  // truyen len url 
  return (
   
    <CartContext.Provider value={{myCart, addToCart,total,setTotal}}>
     <Router>
      <NavBar/>
        <div className='page-container'>
          <Routes>
            <Route path='/login' element={<SignUpForm/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/dogs' element={<DogsPage allDogs={allDogs}/>}/>
            <Route path='/checkout'element={<Cart/>}/>
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
    
  );
}

export default App;
