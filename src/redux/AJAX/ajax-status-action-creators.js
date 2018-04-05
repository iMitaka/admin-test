import * as types from './ajax-status-action-types'

export function ajaxBegin() {
    return {
        type: types.AJAX_BEGIN
    }
}

export function ajaxError(errorMessage) {
    return {
        type: types.AJAX_ERROR,
        data: errorMessage
    }
}

export function ajaxSuccess(successMessage) {
    return {
        type: types.AJAX_SUCCESS,
        data: successMessage
    }
}