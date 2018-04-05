import React, { Component } from 'react';
import * as nomenclatureService from '../../../../../services/nomenclature-service'

export default class Towns extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Countries: []
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.loadAll = this.loadAll.bind(this)
    }

    loadAll(id) {
        nomenclatureService.getTowns(id)
        .then(res => res.json())
        .then((data) => this.setState({ Countries: data }))
        .catch((err) => console.log(err))
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    componentWillReceiveProps(newProps) {
            this.loadAll(newProps.countryId)
    }

    render() {
        let options = this.state.Countries.map((x) => {
            return (
                <option key={x.id} value={x.id}>{x.name}</option>
            )
        })
        return (
            <div className="text-center">
                <strong >Град</strong>
                <select className="form-control" name={this.props.name} onChange={this.props.onChange} value={this.props.value}>
                <option value="0" disabled={this.props.disableEmpty}>{this.props.empltyLabel}</option>
                    {options}
                </select>
                <br />
            </div>

        );
    }
}

