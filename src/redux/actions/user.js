
import { COUNT , COUNT_PAG, FORGOT, GET, LOGIN } from "../constans/user"
import { SHOW_ERROR_MESSAGE, SHOW_SUCCESS_MESSAGE, CLEAR_MESSAGE } from "../constans/message"
import { START_LOADING, STOP_LOADING } from "../constans/loading"
import { Count , List } from "../../services/user"
import { ForgotAuth, LoginAuth } from "../../services/auth"
import { setAuthentication } from "../../shared/auth"


const get_user_Count_pag = (filter , con) => async dispatch => {
    dispatch({ type: START_LOADING })
    Count(filter , con).then(({ data }) => {

            dispatch({ type: STOP_LOADING })
            dispatch({
                type: COUNT_PAG , payload : data.msg
            })
            dispatch({ type: CLEAR_MESSAGE })


    }).catch(err => {
        console.log("get orders api err ", err);
        dispatch({ type: STOP_LOADING })

    })
}


const get_user_Count = (filter , con) => async dispatch => {
    dispatch({ type: START_LOADING })
    Count(filter , con).then(({ data }) => {

            dispatch({ type: STOP_LOADING })
            dispatch({
                type: COUNT , payload : data.msg
            })
            dispatch({ type: CLEAR_MESSAGE })

    }).catch(err => {
        console.log("get orders api err ", err);
        dispatch({ type: STOP_LOADING })

    })
}


const get_admins = (filter , con) => async dispatch => {
    dispatch({ type: START_LOADING })
    List(filter , con).then(({ data }) => {

            dispatch({ type: STOP_LOADING })
            dispatch({
                type: GET , payload : data.msg
            })
            dispatch({ type: CLEAR_MESSAGE })


    }).catch(err => {
        console.log("get orders api err ", err);
        dispatch({ type: STOP_LOADING })
        dispatch({ type: SHOW_ERROR_MESSAGE, payload: "something went wrong please try again" })


    })
}


const LoginAuths = (values) => async dispatch => {
    dispatch({ type: START_LOADING })

    LoginAuth(values).then(({ data }) => {

        if (!data.err) {
            dispatch({ type: STOP_LOADING })
            dispatch({
                type: LOGIN
            })
            dispatch({ type: CLEAR_MESSAGE})
            dispatch({ type: SHOW_SUCCESS_MESSAGE, payload : "okey" })
        } else {
            
            dispatch({ type: STOP_LOADING })
            dispatch({ type: SHOW_ERROR_MESSAGE, payload: data.msg })
        }

       setAuthentication(data.msg.TOKEN , data.msg.USER)

    }).catch(err => {
        console.log("get orders api err ", err);
        dispatch({ type: STOP_LOADING })
        dispatch({ type: SHOW_ERROR_MESSAGE, payload: "something went wrong please try again" })

    })
}


const ForgotAuths = (values) => async dispatch => {
    dispatch({ type: START_LOADING })

    ForgotAuth(values).then(({ data }) => {
        if (!data.err) {
            dispatch({ type: STOP_LOADING })
            dispatch({
                type: FORGOT
            })
            dispatch({ type: CLEAR_MESSAGE})
            dispatch({ type: SHOW_SUCCESS_MESSAGE, payload : "forgot" })

        } else {
            
            dispatch({ type: STOP_LOADING })
            dispatch({ type: SHOW_ERROR_MESSAGE, payload: data.msg })
        }

    }).catch(err => {
        console.log("get orders api err ", err);
        dispatch({ type: STOP_LOADING })
        dispatch({ type: SHOW_ERROR_MESSAGE, payload: "something went wrong please try again" })
    })
}


// const EditAccounts = (userId , values , authorization) => async dispatch => {
//     dispatch({ type: START_LOADING })

//     EditAccount(userId , values , authorization).then(({ data }) => {

//         if (!data.err) {
//             dispatch({ type: STOP_LOADING })
//             dispatch({
//                 type: PROFILE
//             })
//             dispatch({ type: CLEAR_MESSAGE})
//             dispatch({ type: SHOW_SUCCESS_MESSAGE, payload : "edited" })
            

//             setLocalStorage("user" , {...getLocalStorage("user") , ...values})

//         } else {
            
//             dispatch({ type: STOP_LOADING })
//             dispatch({ type: SHOW_ERROR_MESSAGE, payload: data.msg })
//         }

//        // console.log(data);

//     }).catch(err => {
//         console.log("get orders api err ", err);
//         dispatch({ type: STOP_LOADING })
//         dispatch({ type: SHOW_ERROR_MESSAGE, payload: "something went wrong please try again" })

//     })
// }


// const updateImageProfile = (userId , values , authorization) => async dispatch => {
//     dispatch({ type: START_LOADING })

//     Image(userId , values , authorization).then(({ data }) => {

//         if (!data.err) {
//             dispatch({ type: STOP_LOADING })
//             dispatch({
//                 type: ADDRESS
//             })
//             dispatch({ type: CLEAR_MESSAGE})
//             console.log(data.msg);
//             setLocalStorage("user" ,{...getLocalStorage("user") , image : data.msg })
//             dispatch({ type: SHOW_SUCCESS_MESSAGE, payload : "updated" })

//         } else {
            
//             dispatch({ type: STOP_LOADING })
//             dispatch({ type: SHOW_ERROR_MESSAGE, payload: data.msg })
//         }

//      //   console.log(data);

//     }).catch(err => {
//         console.log("get orders api err ", err);
//         dispatch({ type: STOP_LOADING })
//         dispatch({ type: SHOW_ERROR_MESSAGE, payload: "something went wrong please try again" })

//     })
// }

export {
    get_user_Count ,get_user_Count_pag , get_admins , LoginAuths , ForgotAuths
}

