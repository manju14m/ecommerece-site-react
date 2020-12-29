import {createStore} from 'redux'
import Reducer from '../Reducer'
import Products from '../Data/ProductData'


const initialState={
    cart : [],
    totalItems :0,
    filteredData : Products
    // user : "Guest"
}

const store = createStore(Reducer,initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;