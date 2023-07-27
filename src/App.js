import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import NavBar from './navBar/NavBar';
import Form from './form/Form';
import Footer from './footer/Footer';
import 'jquery/dist/jquery.min.js';
// import LoginForm from './loginForm/LoginForm';

function App() {
  return (
    <div>
      <NavBar/>
      <Footer/>
    </div>
  );
}

export default App;
