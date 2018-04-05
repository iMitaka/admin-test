import { DOMAIN_URL } from '../shared/constants/UrlConstants'
import { httpService, httpServiceWithData } from './http-service'
const GET = 'GET'
const POST = 'POST'

export function createProperty(title) {
    return httpService('/Properties/CreateProperty?title=' + title, GET)
}

export function getProperty(id) {
    return httpService('/Properties/GetPropertyForEdit?id=' + id, GET)
}

export function updateProperty(data, id) {
    return httpServiceWithData('/Properties/EditProperty?id=' + id, POST, data)
}





export function deleteProperty(id) {
    return httpService('/Properties/DeleteProperty?id=' + id, "GET")
}

export function getAllProperties() {
    return httpService('/Properties/GetProperties', "GET")
}

export function getAllPropertiesByFilter(filter, page) {
    return httpServiceWithData('/Properties/GetProperties?page=' + page + '&totalCount=10&type=admin', "POST", filter)
}

export function register(data) {
    return httpServiceWithData('/Account/Register', "POST", data)
}

export function login(data) {
    return httpServiceWithData('/Account/Login', "POST", data)
}