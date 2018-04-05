import httpClient from '../AJAX/ajax-service'
import * as actions from './auth-action-creators'
import { DOMAIN_URL } from '../../shared/constants/UrlConstants'
import { HTTP_POST } from '../../shared/constants/HttpConstants'

export function login(data) {
    const loginUrl = DOMAIN_URL + '/Token';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    let webApiTokenLoginBody = 'grant_type=password&username=' + data.username + '&password=' + data.password
    return httpClient({
        method: HTTP_POST,
        url: loginUrl,
        bodyData: webApiTokenLoginBody,
        dispatchFunction: actions.login,
        headers: headers,
        isAuthorizeRequest: false
    })
}