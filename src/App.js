import logo from './logo.svg';
import './App.css';
import {Link,Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route exact index path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/#' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
