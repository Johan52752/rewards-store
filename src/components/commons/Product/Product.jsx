import "./product.css"
import {useSelector,useDispatch} from "react-redux"
import {buyProduct} from "../../../actions/actions"
import {updateUser} from "../../../actions/actions"
import {redeemProduct} from "../../../services/redeemService"
import {getUsers} from "../../../services/userService"
import {Token} from "../tokens/Tokens/Token"
import {useState, useEffect} from "react"
import { notification } from "../Notification/notification"
import { useHistory } from "react-router"

export function Product({name,img,category,cost,id,toBuy}){
    const points=useSelector((state)=>state.user.points)
    const [showRedeem, setShowRedeem]=useState(false)
    const dispatch=useDispatch()
    const history=useHistory();
    return(
        <div className="product" onMouseEnter={()=>setShowRedeem(true)} onMouseLeave={()=>setShowRedeem(false)}>
            {
                toBuy?
                <div className={`product-hover ${showRedeem?"":"hidden"}`}>
                    <Token infoTokens={cost} color="linear-gradient(180deg, rgba(10, 212, 250, 0.86) 0%, rgba(37, 187, 241, 0.86) 100%);"/>
                    {points<cost?<a onClick={(e)=>{
                        e.preventDefault();
                        history.push("/add-tokens");
                    }}>Add tokens</a>
                    :<a onClick={async ()=>{
                        dispatch(buyProduct(cost))
                        const redeem= await redeemProduct(id);
                        dispatch(updateUser(await getUsers()))
                        notification(redeem.status,"Redeem product")
                    }} >Redeem now</a>
                         
                }
                </div>
                :""
            }
            <img className="product-img" src={img} alt="" />
            {
                toBuy?
                <div className="product-buy">
                {points<cost?<Token infoTokens={`You need ${cost-points}`} color="#616161"/>  
                    :<img 
                    className={`product-redeem-img`}
                    src={`./assets/${showRedeem?"buy-white":"buy-blue"}.svg`}
                    />}
                </div>
                :""
            }
            <div className="product-information">
                <p>{category}</p>
                <h3>{name}</h3>
                <p>{cost} $</p>
            </div>
        </div>
    )
}