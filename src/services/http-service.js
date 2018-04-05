import { DOMAIN_URL} from '../shared/constants/UrlConstants'
import handleErrors from '../shared/hendlers/ajax-error-hendler'
import cookie from 'react-cookies'
import {
    AuthCookieName,
    AuthCookieTokenType
} from '../shared/constants/CookieConstants'

export function httpService(url, method) {
    let headers = new Headers();
    headers.append('Authorization', AuthCookieTokenType + cookie.load(AuthCookieName))
    return fetch(DOMAIN_URL + url, { method: method, headers: headers}).then(handleErrors)
}

export function httpServiceWithData(url, method, data) {
    let headers = new Headers();
    headers.append('Authorization', AuthCookieTokenType + cookie.load(AuthCookieName))
    headers.append('Content-Type', 'application/json')
    return fetch(DOMAIN_URL + url, { method: method, headers: headers, body: JSON.stringify(data) }).then(handleErrors)
}

export function httpServiceWithDataNoheader(url, method, data) {
    let headers = new Headers();
    headers.append('Authorization', AuthCookieTokenType + cookie.load(AuthCookieName))
    //headers.append('Content-Type', 'multipart/form-data')
    return fetch(DOMAIN_URL + url, { method: method, headers: headers, body: data }).then(handleErrors)
}