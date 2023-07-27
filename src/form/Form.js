import * as $ from 'jquery'
// $(document).ready(function() {
// alert('Please wait');
// })
function Form() {
    return(
        <div>
        <button type="button" className="btn btn-primary register">Register</button>
        <div className="container">
        <form method="POST" action="" name="register">
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <label>Company Name<span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input name="r1" id="r12" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p id="r11" className="onlySpaceChar"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Website URL<span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input name="r2" id="r22" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p id="r21" className="onlySpaceChar"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Office Phone Number<span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input name="r3" id="r32" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p id="r31" className="onlySpaceChar"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Password<span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input 
                                name="r213" 
                                id="r212" 
                                type="text" 
                                className="form-control" 
                                placeholder="Username" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1" 
                                // onClick={inputChange}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p id="r211" className="onlySpaceChar"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Contact Person Name<span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input name="r4" id="r42" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p id="r41" className="onlySpaceChar"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Contact Person Designation<span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input name="r5" id="r52" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p id="r51" className="onlySpaceChar"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Contact Person's e-mail ID<span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input name="r6" id="r62" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p id="r61" className="onlySpaceChar"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Contact Person's mobile Number<span style={{color: 'rgb(178, 175, 175)'}}>(10 Digits Only)</span><span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input name="r7" id="r72" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p id="r71" className="onlySpaceChar"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Company Address<span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input name="r8" id="r82" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p id="r81" className="onlySpaceChar"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Logo</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input name="r9" id="r92" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p id="r91" className="onlySpaceChar"></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <input name="candidate" id="r10" type="radio"></input><span>&nbsp;&nbsp;&nbsp;Trained Fresher</span>
                            <input name="candidate" id="r111" type="radio"></input><span>&nbsp;&nbsp;&nbsp;Experienced Candidate</span>
                        </div>
                    </div><br></br>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Number of openings<span style={{color: 'rgb(160, 157, 157)'}}>(Digits Only)</span><span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input name="r12" id="r121" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p id="r122" className="onlySpaceChar"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Brief Job description<span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p id="r132" className="onlySpaceChar"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3" style={{width: '120px', paddingRight: '6px'}}>
                            <label>Job Location<span style={{color: 'red'}}>*</span></label>
                        </div>
                        <div className="col-md-3" style={{width: '120px', paddingLeft: '0px', paddingRight: '6px'}}>
                            <input 
                                name="r14" 
                                id="r142" 
                                type="text" 
                                className="form-control" 
                                placeholder="City" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1" 
                            >
                            </input>
                        </div>
                        <div className="col-md-3" style={{width: '120px', paddingLeft: '0px', paddingRight: '6px'}}>
                            <input 
                                name="r15" 
                                id="r152" 
                                type="text" 
                                className="form-control" 
                                placeholder="State" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1" 
                            >
                            </input>
                        </div>
                        <div className="col-md-3" style={{width: '120px',paddingLeft: '0px', paddingRight: '6px'}}>
                            <input 
                                name="r16" 
                                id="r162" 
                                type="text" 
                                className="form-control" 
                                placeholder="Zip" 
                                aria-label="Username" 
                                aria-describedby="basic-addon1" 
                            >
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Package Details<span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input name="r17" id="r172" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p id="r171" className="onlySpaceChar"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Job Title<span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input name="r18" id="r182" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p id="r181" className="onlySpaceChar"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Additional requirements / Comments if any<span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p id="r191" className="onlySpaceChar"></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Your code is</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <span style={{backgroundColor: 'black', color: 'aliceblue' }}>78787</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    Enter code <span style={{color: 'red'}}>*</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <input name="r20" id="r202" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button type= "button" className="btn btn-primary" id="sub">Submit</button>
                            <button type="button" className="btn btn-primary">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..."></img>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
    </div>
    );
}

export default Form;