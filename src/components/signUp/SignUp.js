import { Link } from "react-router-dom";

function SignUp (){
    return (
        <div>
        <div className="container-fluid ">
        <div 
            className="container" 
            style={{display: "flex",
            justifyContent: "center",
            height: "100%",}}
        >
            <form method="POST" action="" encType="" name="">
                <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <label>Sign up Name</label>
                                <input 
                                    name="r1" 
                                    id="r12" 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Username" 
                                    aria-label="Username" 
                                    aria-describedby="basic-addon1"
                                >
                                </input>
                                <label>Sign up Password</label>
                                <input 
                                    name="r1" 
                                    id="r12" 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Username" 
                                    aria-label="Username" 
                                    aria-describedby="basic-addon1"
                                >
                                </input>
                                <Link to='/login'>Sign In?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}

export default SignUp;