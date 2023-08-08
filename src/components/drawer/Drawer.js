import { BrowserRouter,Routes,Link, Route,Outlet } from 'react-router-dom';

function Drawer() {
  return (
    <>
      {/* <div className="position-sticky"> */}
      {/* <div className='row'> */}
        <div className='col-md-3'>
          <div className="list-group list-group-flush mx-3 mt-4">
            <Link href="#" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
            <span>Main dashboard</span>
            </Link>
            <Link to="/drawer" className="list-group-item list-group-item-action py-2 ripple active">
            <span>View User</span>
            </Link>
            <Link to="/drawer/pass" className="list-group-item list-group-item-action py-2 ripple">
            <span>Login Page</span></Link>
            <Link to="/drawer/cards" className="list-group-item list-group-item-action py-2 ripple">
            <span>Cards</span></Link>
            <Link to="/drawer/userslist" className="list-group-item list-group-item-action py-2 ripple">
            <span>Users List</span>
            </Link>
            <Link to="/drawer/class" className="list-group-item list-group-item-action py-2 ripple">
            <span>Class Component</span></Link>
            <Link to="/drawer/classClone" className="list-group-item list-group-item-action py-2 ripple">
            <span>Class Component Clone</span></Link>
            <Link to="/drawer/stateInClass" className="list-group-item list-group-item-action py-2 ripple">
            <span>State In Class</span></Link>
            <Link to="/drawer/counterClass" className="list-group-item list-group-item-action py-2 ripple">
            <span>Class Counter</span></Link>
            <Link to="/drawer/stateInFunction" className="list-group-item list-group-item-action py-2 ripple">
            <span>State In Function</span></Link>
            <Link to="/drawer/FormState" className="list-group-item list-group-item-action py-2 ripple">
            <span>Form State</span></Link>
            <Link to="/drawer/BmiCalculator" className="list-group-item list-group-item-action py-2 ripple">
            <span>BMI Calculator</span></Link>
            <Link to="/drawer/classLifecycle" className="list-group-item list-group-item-action py-2 ripple">
            <span>Class Lifecycle</span></Link>
            <Link to="/drawer/axios" className="list-group-item list-group-item-action py-2 ripple">
            <span>axios</span></Link>
          </div>
        </div>
        <div className='col-md-9'>
          <Outlet/>
        </div>
      {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default Drawer;