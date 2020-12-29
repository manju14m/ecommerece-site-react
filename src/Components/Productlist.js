import React from 'react'
import {connect} from 'react-redux'
// import {productContext} from './context'
// import Products from '../Data/ProductData'
// import { tempProducts } from './FilteredProducts'
// import {FilteredProducts} from './Filteredproducts'
import Product from './Product'

function ProductList({filteredData}){
    // const [tempProducts, setTempProducts] = useState(Products)
    // var tempProducts= [];
    // useEffect( async ()=>{
    //    const response = await  fetch("https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json")
    //    const  json = await response.json()
    //    setProducts(json)
    // },[])
    // function FilteredProducts(value){
    //     // setTempProducts(Products)
    //     // Products.filter((item)=> item.tag === value )
    //     if(value === "All"){
    //         setTempProducts(Products) 
    //     }
    //     else{
    //         setTempProducts(Products.filter((item)=> item.tag === value ))
    //     }
    //     // console.log(Products.filter((item)=> item.tag === value ))
    //     console.log(value)
    // }


    return(
        <div className="text-center margintop">

            {/* <div className="dropdown">
                <h6 className="dropdownbtn text-dark">Filter <i className="fa fa-sort-desc" aria-hidden="true"></i></h6> */}
                {/* <button className="btn btn-primary dropdown-toggle mybtn" data-toggle="dropdown" >Filter</button> */}
                {/* <div className="dropdown-content text-center">
                    <p onClick={()=>{FilteredProducts("All")}}>All</p>
                    <p onClick={()=>{FilteredProducts("T-shirt")}}>T-shirt</p>
                    <p onClick={()=>{FilteredProducts("Denim")}}>Denim</p>
                    <p onClick={()=>{FilteredProducts("shirt")}}>shirt</p>
                    <p onClick={()=>{FilteredProducts("jacket")}}>jacket</p>
                </div>
            </div> */}


            
        <h1 className="text-center products mb-0 pb-0" ><em>Our products </em></h1>
        <h4 className="text-info mt-0">{`${filteredData[0].tag === "T-shirt" && filteredData[1].tag === "Denim"? "" : "("+ filteredData[0].tag+"s)" }`}</h4>
            <div className="col-12  d-flex flex-wrap">
                {/* <h1 >Our products</h1><br/> */}
                {
                filteredData.map(value =>(
                    <Product key={value.id} value={value}/>
                ))}
             </div>
            {/* Hello{console.log(Products)}
             {products[0]} hello */}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        filteredData : state.filteredData
}

}

export default connect(mapStateToProps) (ProductList);