import {combineReducers} from 'redux'
import LoadingReducer from './listReducers/LoadingReducer'
import QueryReducer from './listReducers/QueryReducer'
import RecordsReducer from './listReducers/RecordsReducer'



export const RootReducer = combineReducers({
    loading:LoadingReducer,
    records:RecordsReducer,
    query:QueryReducer,


})

