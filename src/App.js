import { Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Registration from './components/Registration';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = 'Registration' element={<Registration/>}></Route>
      <Route path = 'Dashboard' element={<Dashboard/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
