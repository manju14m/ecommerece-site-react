import React from 'react'
import {connect} from 'react-redux'

function Product({value,dispatch}){
    const {id,name,vendor,image_src,price,compare_at_price} = value;

    
    // console.log(cartids)

    const addToCart = ()=>(
        {
          type:"Add_to_cart",
        payload:{id,name,price,image_src,quantity:1}  
        }
        )
     
    return(
        <div className=" mx-auto my-3 text-center card">
                <div className=" d-flex flex-column">
                    <img src={image_src} style= {{"height":"400px","width":"300px"}} alt="phone" className="card-img-top" />
                    <button  className=" btn btn-primary addToBag" onClick = {()=>{dispatch(addToCart())}}> <i className="fa fa-shopping-bag" aria-hidden="true"></i> Add to Bag</button>
                    <p className=" m-0">{name}</p>
                    <p className=" mb-0"><em>({vendor})</em></p>
                </div>

                <div className="card-footer ">
                    {/* off percentage calculation */}
                {/* {console.log(100- parseInt(((Number(price)*100)/Number(compare_at_price))) )}  */}    
                <p className=" mb-0 text-danger"> <span style={{"color":"red" }}>${price} </span><del style={{"color":"gray"}}>${ compare_at_price} </del>{  100- parseInt(((Number(price)*100)/Number(compare_at_price)))}%OFF</p>
                </div>
        </div>
    )
}

const mapStateToProps = (state,dispatch) =>{
    // console.log(ownProps)
    return {state}
}

// const mapDispatchTOProps = ()=>{

// }

export default connect(mapStateToProps) (Product);