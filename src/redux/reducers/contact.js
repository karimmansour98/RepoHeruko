import { COUNT, GET_CONTACTS, COUNT_NAV, VIEW, DELETE, COUNT_PAG, GET_ALl_CONTACTS } from "../constans/contact"

const INITIAL_STATE = {
    count: 0,
    count_nav: 0,
    count_pag: 0,
    contacts: [],
    all_contacts: [],
}

const contactReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COUNT:
            return {
                ...state,
                count: action.payload
            }
        case COUNT_NAV:
            return {
                ...state,
                count_nav: action.payload
            }
        case GET_CONTACTS:

            return {
                ...state,
                contacts: action.payload
            }
        case GET_ALl_CONTACTS:

            return {
                ...state,
                all_contacts: action.payload
            }

        case COUNT_PAG:

            return {
                ...state,
                count_pag: action.payload
            }
        case VIEW:
            const index = state.contacts.findIndex(c => c._id === action.payload)
            state.contacts[index].viewed = true

            return {
                ...state,
                contacts: state.contacts
            }

        case DELETE:
            const indexD = state.contacts.findIndex(c => c._id === action.payload)
            const newContacts = state.contacts.slice(indexD, 1)

            return {
                ...state,
                contacts: state.contacts
            }
        default: return state
    }
}

export default contactReducer