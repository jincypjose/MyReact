import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Link, Route } from 'react-router-dom';
import Form from '../form/Form';
import LoginForm from '../loginForm/LoginForm';
import Drawer from '../drawer/Drawer';
import SignUp from '../signUp/SignUp';
import Cards from '../cards/cards';
import UserList from '../userList/UsersList';
import UsersList from '../userList/UsersList';
import ClassComponent from '../classComponent/ClassComponent';
import StateInClass from '../stateInClass/stateInClass';
import CounterClass from '../stateInClass/counterClass';
import StateInFunction from '../stateInFunction/StateInFunction';
import FormState from '../formState/FormState';
import BmiCalculator from '../BMICalculator/BmiCalculator';
import ClassLifecycle from '../ClassLifecycle/ClassLifecycle';

function NavBar() {
  return(
    <div>
      <BrowserRouter>
      {/* <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">Offcanvas navbar</Link>
          <ul className="navbar me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/home'>
            Home
          </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/drawer'>
            Link
          </Link>
          </li>
          <li className="nav-item">
          <Link to='/login'>
            <button type="button" className="btn btn-primary register">
                Login
            </button>
          </Link>
          </li>
          </ul>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">Link</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{paddingLeft: '0px'}}>
            <Link className="navbar-brand" href="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/drawer'>Link</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="#">Action</Link></li>
                      <li><Link className="dropdown-item" href="#">Another action</Link></li>
                      <li><hr className="dropdown-divider"></hr></li>
                      <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link disabled">Disabled</Link>
                  </li>
                </ul>
                <Link to='/login'>
                  <button type="button" className="btn btn-primary register">
                      Login
                  </button>
                </Link>
              </div>
        </nav>
        <div className='row'>
          <Routes>
            <Route path='home' element={<Form/>}></Route>
            <Route path='login' element={<LoginForm/>}></Route>
            <Route path='drawer' element={<Drawer/>}>
              <Route path='' element={<Form/>}></Route>
              <Route path='pass' element={<LoginForm/>}></Route>
              <Route path='cards' element={<Cards/>}></Route>
              <Route path='userslist' element={<UsersList/>}></Route>
              <Route path='class' element={<ClassComponent value1="React" img='/Screenshot from 2023-07-21 10-46-37.png'/>  }></Route>
              <Route path='classClone' element={<ClassComponent value2="Next.js" value3="different"/>  }></Route>
              <Route path='stateInClass' element={<StateInClass/>}></Route>
              <Route path='counterClass' element={<CounterClass/>}></Route>
              <Route path='stateInFunction' element={<StateInFunction/>}></Route>
              <Route path='FormState' element={<FormState/>}></Route>
              <Route path='BmiCalculator' element={<BmiCalculator/>}></Route>
              <Route path='classLifecycle'element={<ClassLifecycle/>}></Route>
            </Route>
            <Route path='signUp' element={<SignUp/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
 );  
}

export default NavBar;