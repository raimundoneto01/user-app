
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Table } from './components/Table';
import { Outlet } from 'react-router-dom';

function App() {
  

  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default App
