import { BrowserRouter,Routes,Link, Route } from 'react-router-dom';

function Drawer() {
  return (
    <>
      {/* <div class="position-sticky"> */}
      {/* <div className='row'> */}
        <div className='col-md-3'>
          <div class="list-group list-group-flush mx-3 mt-4">
            <Link href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
            <span>Main dashboard</span>
            </Link>
            <Link href="#" class="list-group-item list-group-item-action py-2 ripple active">
            <span>Webiste traffic</span>
            </Link>
            <Link href="#" class="list-group-item list-group-item-action py-2 ripple">
            <span>Password</span></Link>
            <Link href="#" class="list-group-item list-group-item-action py-2 ripple">
            <span>Analytics</span></Link>
            <Link href="#" class="list-group-item list-group-item-action py-2 ripple">
            <span>SEO</span>
            </Link>
            <Link href="#" class="list-group-item list-group-item-action py-2 ripple">
            <span>Orders</span></Link>
            <Link href="#" class="list-group-item list-group-item-action py-2 ripple">
            <span>International</span></Link>
            <Link href="#" class="list-group-item list-group-item-action py-2 ripple">
            <span>Partners</span></Link>
            <Link href="#" class="list-group-item list-group-item-action py-2 ripple">
            <span>Calendar</span></Link>
            <Link href="#" class="list-group-item list-group-item-action py-2 ripple">
            <span>Users</span></Link>
            <Link href="#" class="list-group-item list-group-item-action py-2 ripple">
            <span>Sales</span></Link>
          </div>
        </div>
        <div className='col-md-9'></div>
      {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default Drawer;