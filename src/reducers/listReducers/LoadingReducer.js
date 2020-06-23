import * as ACTIONS from '../../actionconstants/ListActionConstants'

export default function LoadingReducer(state = true, action) {

    switch (action.type) {
        case ACTIONS.LOADER_SHOWN:
            return true

        case ACTIONS.LOADER_REMOVED:
            return false

        default:
            return state


    }





}