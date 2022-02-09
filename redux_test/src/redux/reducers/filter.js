import { SHOW_ALL, SHOW_COMPELTE } from "../actions"

const initialState = "ALL"

export default function filter(previousState = initialState, action) {
    if (action.type === SHOW_COMPELTE) {
        return "COMPLETE"
    }

    if (action.type === SHOW_ALL) {
        return "ALL"
    }

    return previousState
}