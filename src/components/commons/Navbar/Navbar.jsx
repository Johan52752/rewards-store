import {Link} from "react-router-dom"
import { useState } from "react"
import "./navbar.css"

export function Navbar(){
    return(
        <div className="navbar">
            <ul className={`navbar-ul`}>
                <Link to="/" className="navbar-li"><li>HOME</li></Link>
                <Link to="/add-tokens" className="navbar-li"><li>ADD TOKENS</li></Link>
                <Link to="/redeem-history" className="navbar-li"><li>REDEEM HISTORY</li></Link>
            </ul>
        </div>
    )
}