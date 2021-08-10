import { endPoint,headers } from "../config/index";
import axios from "axios"
export const getHistory=async ()=>{
    try{   
      const peticion=await axios.get(endPoint+"/user/history",{headers});
      return peticion.data;
    }catch(error){
      console.log(error)
    }
  }