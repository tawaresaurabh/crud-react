import * as ACTIONS from '../actionconstants/ListActionConstants'



export const handleListActionRecordRequest = ()=>({
    type:ACTIONS.RECORDS_REQUESTED,
    payLoad:{
        url:'http://localhost:8080/api/activeBookings'
    }
    
})


export const handleListActionRecordSucess = (data)=>({
    type:ACTIONS.RECORDS_REQUEST_SUCESS,
    payLoad:{
        data
    }
    
})



export const handleListActionRecordFailed = (error)=>({
    type:ACTIONS.RECORDS_REQUEST_FAILED,
    payLoad:{
        error
    }
    
})

export const handleListActionLoaderShown = () =>({
    type:ACTIONS.LOADER_SHOWN,
    payLoad:{
        loading:true
    }
})


export const handleListActionLoaderRemoved = () =>({
    type:ACTIONS.LOADER_REMOVED,
    payLoad:{
        loading:false
    }
})



export const handleListActionSearch = (query) =>({
    type:ACTIONS.QUERY_SEARCHED,
    payLoad:{
        query
    }
})


export const handleListActionConfirmation = (id,status) =>({
    type:ACTIONS.CONFIRMATION_HANDLED,
    payLoad:{
        id,
        status
    }
})

export const handleListActionDelete = (id) =>({
    type:ACTIONS.DELETE_HANDLED,
    payLoad:{
        id
    }
})

export const handleListActionEdit = (record) =>({
    type:ACTIONS.EDIT_HANDLED,
    payLoad:{
        record
    }
})


