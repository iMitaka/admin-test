import React, { Component } from 'react';
import './PropertyCard.css'
import CardConstants from '../../constants/card/CardConstants'

export default class PropertyCard extends Component {

    checkStatus() {
        let backgroundStyleClass = 'status-color-green';

        return (
            <div className={'top-right ' + backgroundStyleClass}>
                <strong>{this.props.status}</strong>
            </div>
        )
    }

    checkVip() {
        if (this.props.isVip) {
            return (
                <div className="top-left"><strong>{CardConstants.vip}</strong></div>
            )
        }
    }

    render() {
        let vip = this.checkVip();
        let status = this.checkStatus();

        return (
            <div>
                <div className="card">
                    <div className="container-img">
                        <img src={this.props.img} className="img-thumbnail fill" alt="thumbnail"></img>
                        {status}
                        <div className="bottom-right">{this.props.price}</div>
                        {vip}
                    </div>
                    <div className="card-title text-field">
                        <p className="ellipsis">{this.props.title}</p>
                    </div>
                    <div className="card-subtitle text-field">
                        <p className="ellipsis">{this.props.address}</p>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12 card-body-props no-padding">
                                <span><strong>{CardConstants.homeTypes}</strong></span><span className="no-bold">{' ' + this.props.properyType}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 card-body-props no-padding">
                                <span ><strong>{CardConstants.area}</strong></span><span className="no-bold">{' ' + this.props.properyArea} <span>m<sup>2</sup></span></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 card-body-props no-padding">
                                <span ><strong>{CardConstants.bedrooms}</strong></span><span className="no-bold">{' ' + this.props.properyBedroom}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 card-body-props no-padding">
                                <span ><strong>{CardConstants.bathrooms}</strong></span><span className="no-bold">{' ' + this.props.properyBathroom}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}































