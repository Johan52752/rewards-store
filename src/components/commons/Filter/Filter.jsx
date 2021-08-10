import "./filter.css"
import { useDispatch } from "react-redux"
import {mostRecent,lowestPrice,highestPrice,filterByCategorie} from "../../../actions/actions"
import {useState} from "react"

export function Filter({totalLength,currentData,next,prev,currentPage,maxPage}){
    const dispatch=useDispatch()
    const [selected,setSelected]= useState()
    return(
        <div className="filter">
            <div className="filter-sort-options">
                <p className="filter-sort-options-pages">Pagina {currentPage} de {maxPage}</p>
                <hr />
                <p className="filter-sort-options-type">Sort by:</p>
                <ul>
                    <select  className="filter-sort-options-categories"onChange={(e)=>{
                        dispatch(filterByCategorie(e.target.value))
                        setSelected("")
                        }} >
                        <option value="todos" hidden selected>Categories</option>
                        <option value="todos" >Todos</option>
                        <option value="Audio">Audio</option>
                        <option value="Cameras">Cameras</option>
                        <option value="Drones">Drones</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Laptops">Laptops</option>
                        <option value="Monitors & TV">Monitors & TV</option>
                        <option value="PC Accesories">PC Accesories</option>
                        <option value="Phones">Phones</option>
                        <option value="Phone Accessories">Phone Accessories</option>
                        <option value="Smart Home">Smart Home</option>
                        <option value="Tablets & E-readers">Tablets & E-readers</option>
                    </select>
                    <li className={`li ${selected==="Lowest Price"?"selected":""}`} onClick={()=>{
                        setSelected("Lowest Price")
                        dispatch(lowestPrice())
                    }}>
                        Lowest Price
                    </li>
                    <li className={`li ${selected==="Highest Price"?"selected":""}`} onClick={()=>{
                        setSelected("Highest Price")
                        dispatch(highestPrice())
                    }}>
                        Highest Price
                    </li>
                </ul>
            </div>
            <div className="filter-pages">
                <a className={`filter-pages-shape ${currentPage<2?"disabled":""}`}onClick={()=>{prev()}}><img src="./assets/Shape2.png" alt="" /></a>
                <a className={`filter-pages-shape ${currentPage===maxPage?"disabled":""}`} onClick={()=>{next()}}><img src="./assets/Shape.png" alt="" /></a>
            </div>
        </div>
    )
}