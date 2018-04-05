import * as types from './property-action-types'

export function addProperty(data) {
    return {
        type: types.ADD_PROPERTY,
        data: data
    }
}

export function modifyProperty(data) {
    return {
        type: types.MODIFY_PROPERTY,
        data: data
    }
}

export function getProperty(data) {
    return {
        type: types.GET_PROPERTY,
        data: data
    }
}