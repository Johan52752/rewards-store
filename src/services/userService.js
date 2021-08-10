import { endPoint,headers } from "../config/index";
import axios from "axios"
export const getUsers=async ()=>{
    try{   
      const peticion=await axios.get(endPoint+"/user/me",{headers});
      return peticion.data;
    }catch(error){
      console.log(error)
    }
  }