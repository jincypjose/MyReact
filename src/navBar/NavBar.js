import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Link, Route } from 'react-router-dom';
import Form from '../form/Form';
import LoginForm from '../loginForm/LoginForm';

function NavBar() {
  return(
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
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
                    <Link className="nav-link" href="#">Link</Link>
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
          </div>
        </nav>
        <div className='row'>
          <Routes>
            <Route path='home' element={<Form/>}></Route>
            <Route path='login' element={<LoginForm/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
 );  
}

export default NavBar;