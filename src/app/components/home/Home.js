import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { ROUTE_ADD_PROPERTY, ROUTE_MODIFY_PROPERTY } from '../../../shared/constants/RouteConstants'
import { getAllProperties, getAllPropertiesByFilter } from '../../../services/property-service'
import PropertyCard from '../../../shared/components/card/PropertyCard'
import Serach from '../serach'
import Pagination from "react-js-pagination";
import { DOMAIN_URL } from '../../../shared/constants/UrlConstants'

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      properties: [],
      activePage: 1,
      filter: {}
    }

    this.editProperty = this.editProperty.bind(this)
    this.search = this.search.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    getAllPropertiesByFilter(this.state.filter, pageNumber)
      .then(res => res.json())
      .then((result) => this.setState({ properties: result }))
      .catch((err) => console.log(err))
  }

  componentDidMount() {
    // getAllPropertiesByFilter(null, this.state.activePage)
    //   .then(res => res.json())
    //   .then((result) => this.setState({ properties: result }))
    //   .catch((err) => console.log(err))

    getAllPropertiesByFilter(this.state.filter, 1)
      .then(res => res.json())
      .then((result) => {
        console.log(result)
        this.setState({ properties: result })
      })
      .catch((err) => console.log(err))
  }

  search(filter) {
    console.log(filter)
    this.setState({ filter: filter });
    getAllPropertiesByFilter(filter, this.state.activePage)
      .then(res => res.json())
      .then((result) => this.setState({ properties: result }))
      .catch((err) => console.log(err))
  }

  editProperty(id) {
    this.props.history.push(ROUTE_MODIFY_PROPERTY + '/' + id)
  }

  render() {

    console.log(this.state.properties)
    let properties = this.state.properties.map((property, index) => {

      let rowClass = ''
      if ((index + 1) % 4 === 0) {
        rowClass = "row"
      }

      return (
        <div key={index} className={rowClass}>
          <div  onClick={() => this.editProperty(property.id)} className="col-lg-3">
            <PropertyCard img={DOMAIN_URL + '/' + property.id + '/' + (property.photos.length >= 1 ? property.photos[0].path : '')}
              price={property.price + ' ' + property.curency}
              title={property.title}
              address={property.neighborhood + ', ' + property.town + ', ' + property.country}
              properyType={property.propertyType}
              properyArea={property.area}
              properyBedroom={property.bedroomsCount}
              properyBathroom={property.bathroomsCount}
              status={property.offerType}
              isVip={property.isVIP} />
          </div>
        </div>
      )
    })

    return (
      <div>
        <div className="row">
          <div className="col-md-2">
            <Link className="btn btn-info" to={'/country'}>+ Добави държава</Link>
          </div>
          <div className="col-md-2">
            <Link className="btn btn-info" to={'/town'}>+ Добави град</Link>
          </div>
          <div className="col-md-2">
            <Link className="btn btn-info" to={'/neighborhood'}>+ Добави квартал/район</Link>
          </div>
          <div className="col-md-2">
            <Link className="btn btn-info" to={'/offer-type'}>+ Добави тип оферта</Link>
          </div>
          <div className="col-md-2">
            <Link className="btn btn-info" to={'/property-type'}>+ Добави тип имот</Link>
          </div>
          <div className="col-md-2">
            <Link className="btn btn-info" to={'/curency'}>+ Добави валута</Link>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2">
            <Link className="btn btn-info" to={'/building-type'}>+ Добави тип строителство</Link>
          </div>
          <div className="col-md-2">
            <Link className="btn btn-info" to={'/property-status'}>+ Добави статус на имот</Link>
          </div>
          <div className="col-md-2">
            <Link className="btn btn-info" to={'/extras'}>+ Добави екстри на имот</Link>
          </div>
          <div className="col-md-2">
            <Link className="btn btn-info" to={'/apartament-type'}>+ Добави тип апартамент</Link>
          </div>
        </div>
        <br />
        <hr />
        <Link className="btn btn-info" to={ROUTE_ADD_PROPERTY}>+ Добави обавя</Link>
        <Serach search={this.search} />
        <div className="row">
          {properties}
        </div>
        <hr />
        <div className="text-center">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={12}
            totalItemsCount={this.state.properties.length >= 1 ? this.state.properties[0].totalCount : 0}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Home;
