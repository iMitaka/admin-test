import * as types from './ajax-status-action-types';
import toastr from 'toastr'

export default function (oldState = 0, action) {
    switch(action.type) {
        case types.AJAX_BEGIN: {
            return oldState + 1
        }
        case types.AJAX_ERROR: {
            action.data.map((error) => {
                return toastr.error(error)
            })

            return oldState - 1
        }
        case types.AJAX_SUCCESS: {
            if (action.data) {
                toastr.success(action.data)
            }
            return oldState - 1
        }
        default: {
            return oldState
        }
    }
}