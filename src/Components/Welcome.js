import React, {useRef, useEffect} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import logo from '../Img/logo.png'

function Welcome({dispatch}){


    const updateuser = (e)=>{
        e.preventDefault();
        var  user = inputRef.current.value
        
        localStorage.setItem("name",user)
        // return {
        //         type:"UPDATE_USER",
        //         payload: {user}
        //         }
       
    }



    const inputRef = useRef();

    useEffect(()=>{
        
        inputRef.current.focus();
    },[])


    return(
        <div className=" welcome">
            {/* <div className="d-flex flex-column justify-content-center align-item-center"> */}
            <img src={logo} height="200px" width="200px" alt="logo" className="rounded mb-5"  />
                <h2>Welcome !</h2>
                <form className="mx-4 py-3 "  > 
                    <div className="form-group d-flex  ">
                        <input ref={inputRef} type="text" id="mytext" className="form-control" maxLength="10"  placeholder="Enter Your Name..." required />
                        
                        <button className="btn btn-primary ml-2 "  onClick={(e)=>{updateuser(e)}}><NavLink to="/main" className= "nav-link text-white">Enter</NavLink></button>
                        {/* <i class="fa fa-arrow-circle-right align-middle" aria-hidden="true"></i> */}
                    </div>
                    
                </form>
            {/* </div> */}
            {/* <h2>Welcome to Shopify</h2>
            <form className="mx-4 py-3 "  > 
                <div className="form-group ">
                    <input type="text" id="mytext" className="form-control" maxLength="10"  placeholder="Enter Your Name..." />
                </div>
                <button className="btn btn-primary"  onClick={(e)=>{dispatch(updateuser(e))}}>Enter</button>
            </form> */}
                
        </div>
    )
}

const mapStateToProps = (state,dispatch) =>{
    return{
        state
    }
    
}

export default connect(mapStateToProps) (Welcome);