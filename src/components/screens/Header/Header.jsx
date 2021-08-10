import {Token} from "../../commons/tokens/Tokens/Token"
import "./header.css"
import {useSelector} from "react-redux"
import {Navbar} from "../../commons/Navbar/Navbar"

export function Header ({shape}){
    const points=useSelector((state)=>state.user.points)
    const user=useSelector((state)=>state.user.name)
    return(
        <div className="head">
            <div className="header">
                <div className="header-shape">
                    <img className="header-logo" src="./assets/logo.svg" alt="logo" />
                </div>
                <Navbar />
                <div className="header-user-info">
                    <p className="header-user-info-name">{user}</p>
                    <Token infoTokens={points} color="#EDEDED"/>  
                </div>
            </div>
            
        </div>
    )
}