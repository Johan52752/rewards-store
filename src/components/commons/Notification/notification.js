import swal from "sweetalert"
export const notification=(status,type)=>{
    if(status){
        swal({
            title:"Success",
            text:`Everything is working, ${type} with exit`,
            icon:"success",
            button:"Aceptar"
        })
    }else{
        swal({
            title:"Error",
            text:`Something went wrong, with ${type}`,
            icon:"error",
            button:"Try again"
        })
    }
}