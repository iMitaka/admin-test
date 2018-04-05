import * as types from './auth-action-types'
import cookie from 'react-cookies'
import { cookieExpireAfter } from '../../shared/services/cookie-service'
import {
    AuthCookieName,
    AuthCookieExpireMinutes
} from '../../shared/constants/CookieConstants'

export default function auth(oldState = {
    isLoggedSuccess: false,
    isLogged: cookie.load(AuthCookieName) ? true : false,
    username: ''
}, action) {
    switch (action.type) {
        case types.AUTH_LOGIN: {
            cookie.save(AuthCookieName, action.data.access_token, { expires: cookieExpireAfter(AuthCookieExpireMinutes) })
            return Object.assign({
                isLogged: true,
                isLoggedSuccess: true,
                username: action.data.userName
            })
        }
        case types.AUTH_LOGOUT: {
            if (cookie.load(AuthCookieName)) {
                cookie.remove(AuthCookieName)
            }
            return Object.assign({
                isLogged: false,
                username: null
            })
        }
        default: {
            return oldState
        }
    }
}
