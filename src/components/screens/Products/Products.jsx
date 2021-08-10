import {Filter} from "../../commons/Filter/Filter"
import{useSelector,useDispatch} from "react-redux"
import { useEffect,useState } from "react"
import "./products.css"
import {Product} from "../../commons/Product/Product"
import {usePagination} from "../../../pagination/pagination"

export function Products(){
    const products=useSelector((state)=>state.filterProducts)
    const itemsPerPage=products.length>16?16:products.length;
    const {next, prev, jump, currentData, currentPage, maxPage}=usePagination(products,itemsPerPage)
    // const dispatch=useDispatch();
    // const [xd,setXd]=useState()
    // useEffect(()=>{
    //     if(xd){
    //         dispatch(lowestPrice())
    //     }
    // },[xd])
    return(
        <div className="products">
            <Filter totalLength={products.length} currentData={currentData()} next={next} prev={prev} currentPage={currentPage} maxPage={maxPage}/>
            <hr className="products-line"/>
            <div className="products-layout">
                {
                    currentData().map((product)=>{
                        return <Product 
                                    name={product.name} 
                                    key={product._id} 
                                    img={product.img.url} 
                                    category={product.category} 
                                    cost={product.cost}
                                    id={product._id}
                                    toBuy={true}
                                />
                    })
                }
            </div>
            <p className="products-pages">Pagina {currentPage} de {maxPage}</p>
            <hr className="products-line"/>
        </div>
    )
}