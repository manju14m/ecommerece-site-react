import React from 'react'

export default function LogIn(){
    return(
        <div className="login  rounded ">
            <form className="mx-4 py-3 margintop" >
                <div className="form-group ">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name..." />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name..." />
                </div>
                <div className="form-group">
                <label>E-Mail</label>
                    <input type="email" className="form-control" placeholder="E-Mail..." />
                </div>
                <div className="form-group">
                <label>Enter password</label>
                    <input type="password" className="form-control" placeholder="Password..." />
                </div>
                <div className="form-group">
                <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password..." />
                </div>
                <button type="button" className="btn btn-primary ">Sign Up</button>
            </form>
        </div>
    )
}