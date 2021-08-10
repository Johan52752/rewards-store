import {Header} from "../../components/screens/Header/Header"
import {Products} from "../../components/screens/Products/Products"

export function Home(){
    return(
        <div>
            <Header />
            <div style={{backgroundImage:"url(./assets/header.png)"}}className="header-info">
                <h1 className="header-info-tittle">Electronics</h1>
            </div>
            <Products />
        </div>
    )
}