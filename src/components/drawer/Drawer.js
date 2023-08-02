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
            <span>Orders</span></Link>
            <Link href="#" className="list-group-item list-group-item-action py-2 ripple">
            <span>International</span></Link>
            <Link href="#" className="list-group-item list-group-item-action py-2 ripple">
            <span>Partners</span></Link>
            <Link href="#" className="list-group-item list-group-item-action py-2 ripple">
            <span>Calendar</span></Link>
            <Link href="#" className="list-group-item list-group-item-action py-2 ripple">
            <span>Users</span></Link>
            <Link href="#" className="list-group-item list-group-item-action py-2 ripple">
            <span>Sales</span></Link>
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