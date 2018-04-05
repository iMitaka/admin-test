import httpClient from '../AJAX/ajax-service'
import * as actions from './property-action-creators'
import { DOMAIN_URL } from '../../shared/constants/UrlConstants'
import {
    HTTP_POST,
    HTTP_GET,
    HTTP_PUT
} from '../../shared/constants/HttpConstants'

const propertyUrl = DOMAIN_URL + '/api/Property'

export function addProperty(data) {
    return httpClient({
        method: HTTP_POST,
        url: propertyUrl,
        bodyData: data,
        dispatchFunction: actions.addProperty,
        isAuthorizeRequest: true
    })
}

export function getProperty(id) {
    return httpClient({
        method: HTTP_GET,
        url: propertyUrl + '/' + id,
        dispatchFunction: actions.getProperty,
        isAuthorizeRequest: true
    })
}

export function modifyProperty(data) {
    return httpClient({
        method: HTTP_PUT,
        url: propertyUrl,
        bodyData: data,
        dispatchFunction: actions.modifyProperty,
        isAuthorizeRequest: true
    })
}