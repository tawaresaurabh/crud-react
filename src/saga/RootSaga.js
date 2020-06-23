import { call, put, all, takeLatest } from 'redux-saga/effects'
//import {take,takeEvery,call,put, all,takeLatest} from 'redux-saga/effects'
import * as ACTIONCONSTANTS from '../actionconstants/ListActionConstants'
import { handleListActionRecordSucess,handleListActionRecordFailed,handleListActionLoaderShown,handleListActionLoaderRemoved, handleListActionSearch,handleListActionConfirmation,
    handleListActionDelete,handleListActionEdit} from '../actions/ListActions'

import { fetchData } from '../api/ListApi'


function* listDataActionWatcher() {
    yield takeLatest(ACTIONCONSTANTS.RECORDS_REQUESTED, getApiData)

}

function* getApiData(action) {
    console.log(action)
    try {
        const data = yield call(fetchData);
        console.log(data)
        yield put(handleListActionRecordSucess(data));
        yield put(handleListActionLoaderRemoved())
    } catch (e) {
        console.log(e);
        yield put(handleListActionRecordFailed(e.toString()));
    }
}


//register all watchers here.
export default function* RootSaga() {
    yield all([
        listDataActionWatcher(),
        getApiData()
    ])
}



