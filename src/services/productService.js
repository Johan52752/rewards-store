import { endPoint,headers } from "../config/index";
import axios from "axios"
export const getProducts=async ()=>{
    try{   
      const peticion=await axios.get(endPoint+"/products",{headers});
      return peticion.data;
    }catch(error){
      console.log(error)
    }
  }