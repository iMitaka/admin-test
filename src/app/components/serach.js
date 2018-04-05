import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { ROUTE_ADD_PROPERTY, ROUTE_MODIFY_PROPERTY } from '../../shared/constants/RouteConstants'
import ProperyPurpose from './property/modify-property/components/properyPurpose'
import PropertyType from './property/modify-property/components/propertyType'
import Currency from './property/modify-property/components/currency'
import Town from './property/modify-property/components/towns'
import Country from './property/modify-property/components/countries'
import Neighbourhood from './property/modify-property/components/neighbourhood'
import './search.css'

class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            PropertyTypeId: 0,
            OfferTypeId: 0,
            PriceFrom: 0,
            PriceTo: 0,
            BedroomsFrom: 0,
            BedroomsTo: 0,
            AreaFrom: 0,
            AreaTo: 0,
            CurrencyId: 0,
            TownId: 0,
            NeighbourhoodId: 0,
            CountryId: 0
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.serach = this.serach.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (name === "CountryId") {
            this.setState({
                TownId: 0,
                NeighbourhoodId: 0
            })
        }

        this.setState({
            [name]: value
        });
    }

    serach() {
        this.props.search(this.state)
    }


    render() {
        return (
            <div className="search-bar">
                <hr />
                <div className="row">
                    <div className="col-md-2">
                        <Country name="CountryId" value={this.state.CountryId} onChange={this.handleInputChange} disableEmpty={false} empltyLabel={'Всички'} />
                    </div>
                    <div className="col-md-2">
                        <Town name="TownId" countryId={this.state.CountryId} value={this.state.TownId} onChange={this.handleInputChange} disableEmpty={false} empltyLabel={'Всички'} />
                    </div>
                    <div className="col-md-2">
                        <Neighbourhood name="NeighbourhoodId" townId={this.state.TownId} value={this.state.NeighbourhoodId} onChange={this.handleInputChange} disableEmpty={false} empltyLabel={'Всички'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <ProperyPurpose name="OfferTypeId" value={this.state.OfferTypeId} onChange={this.handleInputChange} disableEmpty={false} empltyLabel={'Всички'} />
                    </div>
                    <div className="col-md-2">
                        <PropertyType name="PropertyTypeId" value={this.state.PropertyTypeId} onChange={this.handleInputChange} disableEmpty={false} empltyLabel={'Всички'} />
                    </div>
                    <div className="col-md-2">
                        <div className="row">
                            <div className="row">
                                <div className="col-lg-6">
                                    <strong>Цена от</strong>
                                    <input type="number" className="form-control" name="PriceFrom" value={this.state.PriceFrom} onChange={this.handleInputChange} />
                                </div>
                                <div className="col-lg-6">
                                    <strong>Цена до</strong>
                                    <input type="number" className="form-control" name="PriceTo" value={this.state.PriceTo} onChange={this.handleInputChange} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row">
                            <div className="row">
                                <div className="col-lg-6">
                                    <strong>Спални от</strong>
                                    <input type="number" className="form-control" name="BedroomsFrom" value={this.state.BedroomsFrom} onChange={this.handleInputChange} />
                                </div>
                                <div className="col-lg-6">
                                    <strong>Спални до</strong>
                                    <input type="number" className="form-control" name="BedroomsTo" value={this.state.BedroomsTo} onChange={this.handleInputChange} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <Currency name="CurrencyId" value={this.state.CurrencyId} onChange={this.handleInputChange} disableEmpty={false} empltyLabel={'Всички'} />
                    </div>
                    <div className="col-md-2">
                        <div className="row">
                            <div className="row">
                                <div className="col-lg-6">
                                    <strong>Площ от</strong>
                                    <input type="number" className="form-control" name="AreaFrom" value={this.state.AreaFrom} onChange={this.handleInputChange} />
                                </div>
                                <div className="col-lg-6">
                                    <strong>Площ до</strong>
                                    <input type="number" className="form-control" name="AreaTo" value={this.state.AreaTo} onChange={this.handleInputChange} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <button className="btn-lg btn-success" onClick={this.serach}>Търсене</button>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Search;
