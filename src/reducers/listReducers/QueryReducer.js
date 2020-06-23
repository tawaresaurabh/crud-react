import * as ACTIONS from '../../actionconstants/ListActionConstants'

export default function QueryReducer(query = '', action) {

    switch (action.type) {
        case ACTIONS.QUERY_SEARCHED:
            return {query:action.payLoad.query}
        default:
            return query
    }

}