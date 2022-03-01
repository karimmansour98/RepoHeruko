import axios from "axios"
import {Host , ApiEndpoints} from "../common/apiEndPoints"

const config = {
    headers : {
       "Content-Type" : "application/json" 
    }  
}

// const EditAccount = async (id , data , con) => {
//     return  await  axios.put(`${Host.BACKEND}${ApiEndpoints.AuthEndpoints.route}${ApiEndpoints.AuthEndpoints.edit}/${id}`, data , { headers : {...config.headers , ...con} } )
// }


const List = async (filter , con) => {
    return  await  axios.get(`${Host.BACKEND}${ApiEndpoints.UserEndpoints.route}${ApiEndpoints.UserEndpoints.list}` , { headers : {...config.headers , ...con } , params : {...filter} } )
}

const Count = async ( filter , con ) => {
    return  await  axios.get(`${Host.BACKEND}${ApiEndpoints.UserEndpoints.route}${ApiEndpoints.UserEndpoints.count}`, { headers : {...config.headers , ...con } , params : {...filter} } )
}

const Image = async (id , data , con) => {
    return  await  axios.put(`${Host.BACKEND}${ApiEndpoints.UserEndpoints.route}${ApiEndpoints.UserEndpoints.image}/${id}`, data , { headers : {...config.headers , ...con} } )
}

  
export {
    Count , List 
}