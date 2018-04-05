import * as types from './auth-action-types'

export function login(data) {
    return {
        type: types.AUTH_LOGIN,
        data: data
    }
}

export function logout() {
    return {
        type: types.AUTH_LOGOUT,
    }
}