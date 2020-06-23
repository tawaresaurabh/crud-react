import * as ACTIONS from '../../actionconstants/ListActionConstants'

export default function RecordsReducer(state = [], action) {

    switch (action.type) {

        case ACTIONS.RECORDS_REQUEST_SUCESS:
            return [...action.payLoad.data]

        case ACTIONS.DELETE_HANDLED:
            return [...action.payLoad.data]


        case ACTIONS.RECORDS_REQUEST_FAILED:
            return action.payLoad.error

        default:
            return state

    }





}