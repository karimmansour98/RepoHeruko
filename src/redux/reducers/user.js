 import { COUNT, GET ,COUNT_PAG} from "../constans/user"

const INITIAL_STATE = {
    count: 0 ,
    admins : [], 
    admin_pag : 0
}

const ordersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COUNT:
            return {
                ...state,
                count: action.payload
            }
        case GET:
            return {
                ...state,
                admins: action.payload
            }

        case COUNT_PAG:
            return {
                ...state,
                admin_pag: action.payload
            }
        // case SET_ORDERS:
        //     return {
        //         orders: [...state.orders, action.payload]
        //     }
        // case DELETE_ORDERS:
        //     const newOrder = state.orders.filter(o => o._id !== action.payload.id)
        //     return {
        //         orders: [...newOrder]
        //     }
        // case INCREASE_ORDERS: 
        //     const indexI = state.orders.findIndex(o => o._id == action.payload.id);
        //     state.orders[indexI]["quantity"] += 1

        //     return {
        //         orders: [...state.orders]
        //     }
        // case DECREASE_ORDERS:
        //     const indexD = state.orders.findIndex(o => o._id == action.payload.id);
        //     state.orders[indexD]["quantity"] -= 1

        //     return {
        //         orders: [...state.orders]
        //     }
        default: return state
    }
}

export default ordersReducer