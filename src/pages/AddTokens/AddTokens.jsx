import "./addTokens.css"
import {Form} from "../../components/screens/Form/Form"
import {Header} from "../../components/screens/Header/Header"

export function AddTokens(){
    return(
        <div className="add-tokens">
            <Header shape={true}/>
            <img className="add-tokens-background" src="./assets/header.png" alt="" />
            <Form></Form>
        </div>
    )
}