import {getProducts as fetchProducts} from "../services/productService"
import {getUsers as fetchUsers} from "../services/userService"
export const mostRecent=(payload)=>{
    return{
        type:"MOST_RECENT",
        payload
    }
}
export const lowestPrice=(payload)=>{
    return{
        type:"LOWEST_PRICE",
        payload
    }
}
export const highestPrice=(payload)=>{
    return{
        type:"HIGHEST_PRICE",
        payload
    }
}
export const filterByCategorie=(payload)=>{
    return{
        type:"FILTER_BY_CATEGORIE",
        payload
    }
}
export const buyProduct=(payload)=>{
    return{
        type:"BUY_PRODUCT",
        payload
    }
}
export const updateUser=(payload)=>{
    return{
        type:"UPDATE_USER",
        payload
    }
}
export const getUsers=()=>{
    return async (dispatch)=>{
        try{
            const users= await fetchUsers()
            dispatch({
                type:"GET_USERS",
                payload:users
            })
        }catch(error){
            console.log(error)
        }
    }
}
export const getProducts=()=>{
    return async (dispatch)=>{
        try{
            const products= await fetchProducts()
            dispatch({
                type:"GET_PRODUCTS",
                payload:products
            })
        }catch(error){
            console.log(error)
        }
    }
}