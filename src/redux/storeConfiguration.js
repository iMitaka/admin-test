import {
    createStore,
    applyMiddleware
} from 'redux'
import {
    reducers,
    reducersData
} from './reducerConfiguration'
import thunk from 'redux-thunk'

const store = createStore(reducers, reducersData, applyMiddleware(thunk));

export default store;