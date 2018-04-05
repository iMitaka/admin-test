import * as ajaxActions from './ajax-status-action-creators'
import handleErrors from '../../shared/hendlers/ajax-error-hendler'
import cookie from 'react-cookies'
import {
    AuthCookieName,
    AuthCookieTokenType
} from '../../shared/constants/CookieConstants'

const stringType = "string"
const errorSplitSymbol = ';'

export default function httpClient({ method, url, bodyData, dispatchFunction, onSuccessMessage, headers, isAuthorizeRequest }) {
    let data = null;
    if (bodyData && typeof bodyData === stringType) {
        data = bodyData;
    } else if (bodyData) {
        data = JSON.stringify(bodyData)
    }

    if (!headers) {
        headers = new Headers();
        headers.append('Content-Type', 'application/json')
    }

    if (isAuthorizeRequest) {
        headers.append('Authorization', AuthCookieTokenType + cookie.load(AuthCookieName))
    }

        console.log(data)
    return (dispatch) => {
        dispatch(ajaxActions.ajaxBegin())
        fetch(url, {
            method: method,
            body: data,
            headers: headers
        })
            .then(handleErrors)
            .then(res => res.json())
            .then(data => {
                dispatch(dispatchFunction(data))
                dispatch(ajaxActions.ajaxSuccess(onSuccessMessage))
            }).catch((error) => {
                let errors = String(error).split(errorSplitSymbol)
                dispatch(ajaxActions.ajaxError(errors))
            })
    }
}
