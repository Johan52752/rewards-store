import { endPoint,headers } from "../config/index";
import axios from "axios"
export const addPoints=async (amount)=>{
    const body={
        "amount":amount
    }
    try{   
      const peticion=await axios.post(endPoint+"/user/points",body,{headers});
      return peticion;
    }catch(error){
      return error
    }
  }