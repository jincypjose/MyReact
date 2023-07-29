import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import NavBar from './components/navBar/NavBar';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
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
