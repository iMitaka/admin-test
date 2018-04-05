import { DOMAIN_URL} from '../shared/constants/UrlConstants'
import { httpService, httpServiceWithData, httpServiceWithDataNoheader } from './http-service'
const GET = 'GET'
const POST = 'POST'
const DELETE = 'DELETE'
export const UPLOAD_PHOTO_URL = DOMAIN_URL + '/api/Photo'

export function getCountries() {
    return httpService('/Countries/GetAllCountries', GET)
}

export function postCountries(data) {
    return httpServiceWithData('/Countries/CreateCountry', POST, data)
}

export function deleteCountries(id) {
    return httpService('/Countries/DeleteCountry?id=' + id, GET)
}

//................................................................................

export function getTowns(countryId) {
    return httpService('/Towns/GetTownsByCountryId?countryId=' + countryId, GET)
}

export function postTown(data) {
    return httpServiceWithData('/Towns/CreateTown', POST, data)
}

export function deleteTown(id) {
    return httpServiceWithData('/Towns/DeleteTown?id=' + id, GET)
}

//...............................................

export function getNeighbourhood(townId) {
    return httpService('/Neighborhoods/GetNeighborhoodsByTownId?townId=' + townId, GET)
}

export function createNeighbourhood(data) {
    return httpServiceWithData('/Neighborhoods/CreateNeighborhood', POST, data)
}

export function deleteNeighbourhood(id) {
    return httpService('/Neighborhoods/DeleteNeighborhood?id=' + id, GET)
}

//..........................................................

export function getOfferType() {
    return httpService('/OfferTypes/GetOfferTypes', GET)
}

export function createOfferType(data) {
    return httpServiceWithData('/OfferTypes/CreateOfferType', POST, data)
}

export function deleteOfferType(id) {
    return httpService('/OfferTypes/DeleteOfferType?id=' + id, GET)
}

//..........................................................

export function getPropertyType() {
    return httpService('/PropertyTypes/GetPropertyTypes', GET)
}

export function createPropertyType(data) {
    return httpServiceWithData('/PropertyTypes/CreatePropertyType', POST, data)
}

export function deletePropertyType(id) {
    return httpService('/PropertyTypes/DeletePropertyType?id=' + id, GET)
}

//..........................................................

export function getCurency() {
    return httpService('/Curencies/GetCurencies', GET)
}

export function createCurency(data) {
    return httpServiceWithData('/Curencies/CreateCurency', POST, data)
}

export function deleteCurency(id) {
    return httpService('/Curencies/DeleteCurency?id=' + id, GET)
}

//..........................................................

export function getBuildingType() {
    return httpService('/BuildingTypes/GetBuildingTypes', GET)
}

export function createBuildingType(data) {
    return httpServiceWithData('/BuildingTypes/CreateBuildingType', POST, data)
}

export function deleteBuildingType(id) {
    return httpService('/BuildingTypes/DeleteBuldingType?id=' + id, GET)
}

//..........................................................

export function getPropertyStatus() {
    return httpService('/PropertyStatuses/GetPropertyStatuses', GET)
}

export function createPropertyStatus(data) {
    return httpServiceWithData('/PropertyStatuses/CreatePropertyStatus', POST, data)
}

export function deletePropertyStatus(id) {
    return httpService('/PropertyStatuses/DeletePropertyStatus?id=' + id, GET)
}

//..........................................................

export function getExtras() {
    return httpService('/Extras/GetAllExtras', GET)
}

export function createExtras(data) {
    return httpServiceWithData('/Extras/CreateExtra', POST, data)
}

export function deleteExtras(id) {
    return httpService('/Extras/DeleteExtra?id=' + id, GET)
}

//..........................................................

export function getApartamentType() {
    return httpService('/ApartamentTypes/GetApartamentTypes', GET)
}

export function createApartamentType(data) {
    return httpServiceWithData('/ApartamentTypes/CreateApartamentType', POST, data)
}

export function deleteApartamentType(id) {
    return httpService('/ApartamentTypes/DeleteApartamentType?id=' + id, GET)
}

//..........................................................

export function modifyPhotos(id, number) {
    return httpService('/Photo/ModifyPhoto?id=' + id + '&orderNumber=' + number, GET)
}

export function uploadPhoto(propertyId, data) {
    console.log(data)
    return httpServiceWithDataNoheader('/Photo/UploadPhoto?propertyId=' + propertyId, POST, data)
}

export function deletePhotos(id) {
    return httpService('/Photo/DeletePhoto?id=' + id, GET)
}

