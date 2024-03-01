import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import First from './components/First';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
 

  return (
    <div>
    <BrowserRouter>
    
    <Navbar></Navbar>
   

   <Routes>
   <Route exact={true} path='/' element={<First></First>}></Route>
   <Route exact={true} path='/cart' element={<Cart></Cart>}></Route>
   
   </Routes>
   <Footer></Footer>
    
    </BrowserRouter>
     
    </div>
  )
}

export default App
