import { BrowserRouter,Routes,Link, Route,Outlet } from 'react-router-dom';

export default function Cards() {
    return (
        <div className="row">
            <div className="col-md-3">
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p className="card-text" style={{color: 'black'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="#" className="card-link">Card link</Link>
                        <Link href="#" className="card-link">Another link</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p className="card-text" style={{color: 'black'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="#" className="card-link">Card link</Link>
                        <Link href="#" className="card-link">Another link</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p className="card-text" style={{color: 'black'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="#" className="card-link">Card link</Link>
                        <Link href="#" className="card-link">Another link</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p className="card-text"style={{color: 'black'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="#" className="card-link">Card link</Link>
                        <Link href="#" className="card-link">Another link</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}