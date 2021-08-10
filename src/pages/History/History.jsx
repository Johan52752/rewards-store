import { useState,useEffect } from "react"
import {getHistory} from "../../services/historyService"
import {Product} from "../../components/commons/Product/Product"
import {Header} from "../../components/screens/Header/Header"
import { usePagination } from "../../pagination/pagination"
import { useSelector } from "react-redux"
import "./history.css"

export function History(){
    const history=useSelector((state)=>state.user.redeemHistory)
    const itemsPerPage=history.length>16?16:history.length;
    const {next, prev, jump, currentData, currentPage, maxPage}=usePagination(history,itemsPerPage)
    console.log(history)
    return(
        <div className="history">
            <Header />
            <div className="history-layout">
                <div className="history-information">
                    <p className="history-information-pages">Pagina {currentPage} de {maxPage}</p>
                    <div className="history-pages">
                        <a className={`history-pages-shape ${currentPage<2?"disabled":""}`}onClick={()=>{prev()}}><img src="./assets/Shape2.png" alt="" /></a>
                        <a className={`history-pages-shape ${currentPage===maxPage?"disabled":""}`} onClick={()=>{next()}}><img src="./assets/Shape.png" alt="" /></a>
                    </div>
                </div>
                <hr className="history-line"/>
                <div className="history-products">
                {
                    currentData().map((product)=>{
                        return(
                            <Product 
                            name={product.name} 
                            key={product.createDate} 
                            img={product.img.url} 
                            category={product.category} 
                            cost={product.cost}
                            id={product.productId}
                            toBuy={false}
                            />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}