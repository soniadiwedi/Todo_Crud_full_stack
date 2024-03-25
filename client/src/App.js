import logo from './logo.svg';
import './App.css';
import Mainroutes from './Pages/Mainroutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Pages/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Navbars/>
          <Mainroutes />
          <ToastContainer />
    </div>
  );
}

export default App;
