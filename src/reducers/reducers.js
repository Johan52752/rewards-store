export const reducers=(state, action)=>{
    switch(action.type){
        case "MOST_RECENT":
            return{
                ...state,
                filterProducts:state.filterProducts.filter((product)=>product.category==="Laptops")
            }
        case "LOWEST_PRICE":
            const newArr=state.filterProducts
            newArr.sort(function (a, b) {
                if (a.cost > b.cost) {
                    return 1;
                }
                if (a.cost < b.cost) {
                    return -1;
                }
                  
                  return 0;
                });
              
            return{
                ...state,
                filterProducts:newArr
            }
        case "HIGHEST_PRICE":
            const newArr2=state.filterProducts
            newArr2.sort(function (a, b) {
                if (a.cost > b.cost) {
                    return -1;
                }
                if (a.cost < b.cost) {
                    return 1;
                }
                  
                  return 0;
                });
            return{
                ...state,
                filterProducts:newArr2
            }
        case "FILTER_BY_CATEGORIE":
            return{
                ...state,
                filterProducts:state.products.filter((product)=>{
                    return action.payload==="todos"?true:product.category===action.payload
                })
            }
        case "BUY_PRODUCT":
            return{
                ...state,
                user:{...state.user, points:state.user.points - action.payload}
            }
        case "UPDATE_USER":
            return{
                ...state,
                user:action.payload
            }
        
        default:
            return state
    }
}