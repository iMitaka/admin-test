import React, { Component } from 'react';
import TextInputComponent from '../../../shared/components/inputs/text-input/TextInputComponent'
import { postCountries, getCountries, deleteCountries } from '../../../services/nomenclature-service'
import { Link } from 'react-router-dom'

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            countries: []
        };

        this.handleInputChange = this.handleInputChange.bind(this)
        this.save = this.save.bind(this)
        this.loadAll = this.loadAll.bind(this)
    }

    componentDidMount() {
        this.loadAll()
    }

    loadAll() {
        getCountries()
            .then(res => res.json())
            .then((result) => {
                this.setState({ countries: result })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    save() {
        postCountries(this.state)
            .then(res => res.text())
            .then((result) => {
                console.log(result)
                this.loadAll();
                this.setState({
                    Name: ''
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    delete(id) {
        deleteCountries(id)
            .then(res => res.text())
            .then((result) => {
                console.log(result)
                this.loadAll();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        let allData = this.state.countries.map((country, index) => {
            return (
                <div key={index} style={{ paddingBottom: 10 }}>
                    <span className="btn btn-danger text-center" onClick={() => this.delete(country.id)}><strong>X</strong></span>
                    <span className="text-center" style={{ paddingLeft: 10 }}><strong>{country.name}</strong></span>
                </div>
            )
        })
        return (
            <div>
                <div className="row">
                    <div className="col-lg-4">
                        <h2><strong>Добавете държава</strong></h2>
                    </div>
                </div>
                <hr />
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

export default Country;
