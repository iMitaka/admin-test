import React, { Component } from 'react';
import TextInputComponent from '../../../../shared/components/inputs/text-input/TextInputComponent'
import ButtonComponent from '../../../../shared/components/inputs/button/ButtonComponent'
import { connect } from 'react-redux'
import { addProperty } from '../../../../redux/property/property-service'
import { ROUTE_MODIFY_PROPERTY } from '../../../../shared/constants/RouteConstants'
import { createProperty } from '../../../../services/property-service'

class AddProperty extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.addProperty = this.addProperty.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    addProperty() {
        createProperty(this.state.Name)
        .then(res => res.text())
        .then((result) => {
            this.props.history.push(ROUTE_MODIFY_PROPERTY + '/' + result)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="container">
                <TextInputComponent name="Name" label="Име" type="text" value={this.state.Name} onChange={this.handleInputChange} />
                <br />
                <ButtonComponent styleClass="info"  label="Добави" onClick={this.addProperty} />
            </div>
        );
    }
}

export default AddProperty;
