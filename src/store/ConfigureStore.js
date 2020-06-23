import { createStore, applyMiddleware,compose } from 'redux'
import {RootReducer} from '../reducers/RootReducer'
import createSagaMiddleware from 'redux-saga'
import RootSaga from '../saga/RootSaga'


const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {


    const store = createStore(RootReducer,
        compose(applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))                 
        sagaMiddleware.run(RootSaga)      
        return store

}

export default configureStore;