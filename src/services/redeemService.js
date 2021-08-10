import { endPoint,headers } from "../config/index";
import axios from "axios"
export const redeemProduct=async (id)=>{
    const body={
        "productId":id
    }
    try{   
      const peticion=await axios.post(endPoint+"/redeem",body,{headers});
      return peticion;
    }catch(error){
      return error
    }
  }