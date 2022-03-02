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
        
        default: return state
    }
}

export default ordersReducer