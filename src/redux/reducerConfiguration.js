import {combineReducers } from 'redux'
import ajaxStatus from './AJAX/ajax-status-reducer'
import auth from './auth/auth-reducer'
import property from './property/property-reducer'

export const reducers = combineReducers({
    ajaxStatus,
    auth,
    property
})

export const reducersData  = {
    //auth: true
}