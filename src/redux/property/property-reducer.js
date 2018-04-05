import * as types from './property-action-types'

export default function property(oldState = {
    createdProperty: {},
    property: {}
}, action) {
    switch (action.type) {
        case types.ADD_PROPERTY: {
            return {
                createdProperty: Object.assign(action.data)
            }
        }
        case types.GET_PROPERTY: {
            return {
                property: Object.assign(action.data)
            }
        }
        default: {
            return oldState
        }
    }
}
