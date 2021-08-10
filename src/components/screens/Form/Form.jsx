import "./form.css"
import { useState } from "react"
import { useDispatch } from "react-redux";
import {addPoints} from "../../../services/pointsService"
import {updateUser} from "../../../actions/actions"
import { getUsers } from "../../../services/userService";
import { notification } from "../../commons/Notification/notification";
import { useHistory } from "react-router";
export function Form(){
    const [select,setSelect]=useState();
    const dispatch=useDispatch()
    
    return (
        <div className="form">
            <div className="form-div">
                <h1 className="form-tittle">Add tokens</h1>
                <img src="./assets/coin.svg" alt="" />
            </div>
            <select className="form-select"value={select} onChange={(e)=>setSelect(e.target.value)}name="" id="">
                <option selected hidden value="">Select the amount of tokens</option>
                {/* <option value={2000}>2000</option> */}
                <option  value={1000}>1000</option>
                <option value={5000}>5000</option>
                <option value={7500}>7500</option>
            </select>
            <input className="form-input"type="submit" value="Submit" onClick={async ()=>{
                if(select){
                        const points=await addPoints(parseInt(select));
                        dispatch(updateUser(await getUsers()))
                        notification(points.status,`Add ${select} points`)
                        // window.location.href="/"
                }
            }}/>
        </div>
    
    )
}