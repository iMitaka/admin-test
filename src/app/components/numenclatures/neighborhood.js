import React, { Component } from 'react';
import TextInputComponent from '../../../shared/components/inputs/text-input/TextInputComponent'
import { getNeighbourhood, createNeighbourhood, deleteNeighbourhood } from '../../../services/nomenclature-service'
import { Link } from 'react-router-dom'
import Country from '../property/modify-property/components/countries'
import Town from '../property/modify-property/components/towns'

class Neighborhood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            TownId: '',
            CountryId: '',
            allData: [],
        };

        this.handleInputChange = this.handleInputChange.bind(this)
        this.save = this.save.bind(this)
        this.loadAll = this.loadAll.bind(this)
    }

    componentDidMount() {
        this.loadAll()
    }

    loadAll(TownId) {
        getNeighbourhood(TownId)
            .then(res => res.json())
            .then((result) => {
                this.setState({ allData: result })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        if(name == "TownId") {
            this.loadAll(value)
        }

        if(name == "CountryId") {
            this.loadAll(0)
        }

        this.setState({
            [name]: value
        })
    }

    save() {
        createNeighbourhood(this.state)
            .then(res => res.text())
            .then((result) => {
                console.log(result)
                this.loadAll(this.state.TownId);
                this.setState({
                    Name: ''
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    delete(id) {
        deleteNeighbourhood(id)
            .then(res => res.text())
            .then((result) => {
                console.log(result)
                this.loadAll(this.state.TownId);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        let allData = this.state.allData.map((data, index) => {
            return (
                <div key={index} style={{ paddingBottom: 10 }}>
                    <span className="btn btn-danger text-center" onClick={() => this.delete(data.id)}><strong>X</strong></span>
                    <span className="text-center" style={{ paddingLeft: 10 }}><strong>{data.name}</strong></span>
                </div>
            )
        })
        return (
            <div>
                <div className="row">
                    <div className="col-lg-4">
                        <h2><strong>Добавете квартал/район</strong></h2>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-4">
                    <Country name="CountryId" value={this.state.CountryId} onChange={this.handleInputChange} disableEmpty={false} empltyLabel={'Моля, изберете'} />
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                    <Town name="TownId" value={this.state.TownId} countryId={this.state.CountryId} onChange={this.handleInputChange} disableEmpty={false} empltyLabel={'Моля, изберете'} />
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <TextInputComponent name="Name" label={'Име'} type="text" value={this.state.Name} onChange={this.handleInputChange} />
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <button className="btn btn-success" onClick={this.save}>ЗАПАЗИ</button>
                        <br />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-3">
                        {allData}
                    </div>
                </div>
            </div>
        );
    }
}

export default Neighborhood;
