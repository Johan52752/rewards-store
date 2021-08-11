import {Link} from "react-router-dom"
import { useState } from "react"
import "./navbar.css"

export function Navbar(){
    return(
        <div className="navbar">
            <ul className={`navbar-ul`}>
                <Link to="/rewards-store" className="navbar-li"><li>HOME</li></Link>
                <Link to="/rewards-store/add-tokens" className="navbar-li"><li>ADD TOKENS</li></Link>
                <Link to="/rewards/store/redeem-history" className="navbar-li"><li>REDEEM HISTORY</li></Link>
            </ul>
        </div>
    )
}