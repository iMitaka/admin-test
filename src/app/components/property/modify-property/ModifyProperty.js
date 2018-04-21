import React, { Component } from 'react';
import TextInputComponent from '../../../../shared/components/inputs/text-input/TextInputComponent'
import ButtonComponent from '../../../../shared/components/inputs/button/ButtonComponent'
import { connect } from 'react-redux'
import { modifyProperty } from '../../../../redux/property/property-service'
import Countries from './components/countries'
import Towns from './components/towns'
import Neighbourhood from './components/neighbourhood'
import Currency from './components/currency'
import ProperyPurpose from './components/properyPurpose'
import PropertyType from './components/propertyType'
import BuildingStatus from './components/buildingStatus'
import BuildingType from './components/buildingType'
import ApartamentType from './components/аpartamentType'
import { FileUpload } from 'primereact/components/fileupload/FileUpload';
import { deletePhotos, UPLOAD_PHOTO_URL } from '../../../../services/nomenclature-service'
import ImageInTheBox from '../../../../shared/components/image-in-the-box/ImageInTheBox'
import { updateProperty, deleteProperty } from '../../../../services/property-service'
import { AUTH_LOGOUT } from '../../../../redux/auth/auth-action-types';
import Description from './components/Description'
import { getProperty } from '../../../../services/property-service'
import { uploadPhoto, modifyPhotos, getExtras } from '../../../../services/nomenclature-service'
import { DOMAIN_URL } from '../../../../shared/constants/UrlConstants'

class ModifyProperty extends Component {


    constructor(props) {
        super(props)

        this.state = {
            Id: this.props.match.params.id,
            Name: '',
            BedroomsCount: 0,
            BathroomsCount: 0,
            Price: 0,
            Year: 0,
            Floor: 0,
            FloorsInBuilding: 0,
            IsVIP: false,
            CountryId: 0,
            TownId: 0,
            NeighbourhoodId: 0,
            CurrencyId: 0,
            PropertyTypeId: 0,
            ApartamentTypeId: 0,
            BuildingTypeId: 0,
            PropertyPurposeId: 0,
            BuildingStatusId: 0,
            IsVisible: false,
            Area: 0,
            Description: '',
            photos: [],
            Address: '',
            Code: '',
            OwnerName: '',
            OwnerPhone: '',
            uploadedImages: [],
            ExtrasIds: [],
            extrasList: []
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.modifyProperty = this.modifyProperty.bind(this);
        this.onBeforeSend = this.onBeforeSend.bind(this)
        this.photosReady = this.photosReady.bind(this)
        this.deletePhoto = this.deletePhoto.bind(this)
        this.delete = this.delete.bind(this)
        this.descriptionChange = this.descriptionChange.bind(this)

        this.loadProperty = this.loadProperty.bind(this)
    }

    componentWillMount() {
        this.loadProperty()

        getExtras()
        .then(res => res.json())
        .then((result) => {
            this.setState({
                extrasList: result
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    uploadPhoto() {

    }

    loadProperty() {
        getProperty(this.state.Id)
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                this.setState({
                    Name: result.title,
                    IsVisible: result.isVisible,
                    Description: result.description,
                    DescriptionOld: result.description,
                    TownId: result.townId,
                    CountryId: result.countryId,
                    NeighbourhoodId: result.neighborhoodId,
                    PropertyPurposeId: result.offerTypeId,
                    PropertyTypeId: result.propertyTypeId,
                    BuildingStatusId: result.propertyStatusId,
                    BedroomsCount: result.bedroomsCount,
                    BathroomsCount: result.bathroomsCount,
                    Area: result.area,
                    Price: result.price,
                    Year: result.year,
                    Address: result.address,
                    Code: result.code,
                    OwnerName: result.ownerName,
                    OwnerPhon: result.ownerPhone,
                    IsVIP: result.isVIP,
                    Floor: result.floor,
                    FloorsInBuilding: result.allFloorsCount,
                    BuildingTypeId: result.buildingTypeId,
                    CurrencyId: result.curencyId,
                    ApartamentTypeId: result.apartamentTypeId,
                    photos: result.photos,
                    ExtrasIds: result.extrasIds
                })

                console.log(result.description)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    delete() {
        deleteProperty(this.state.Id)
            .then(res => res.text())
            .then((result) => {
                console.log(result)
                this.props.history.push('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleInputChange(event) {
        const target = event.target;
        let value;
        if (target.type === 'file') {
            let images = []

            for (let index = 0; index < target.files.length; index++) {
                images.push(window.URL.createObjectURL(target.files[index]))
            }

            this.setState({
                uploadedImages: images
            });

            let formData = new FormData();
            formData.append('File', target.files[0]);
            console.log(formData.get('File'))
            uploadPhoto(this.state.Id, formData)
                .then(res => res.text())
                .then((result) => {
                    console.log(result)
                    this.loadProperty()
                })
                .catch((err) => {
                    console.log(err)
                })

        } else {
            value = target.type === 'checkbox' ? target.checked : target.value

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
    }

    modifyProperty() {
        let data = {
            IsVisible: this.state.IsVisible,
            Title: this.state.Name,
            Description: this.state.Description,
            TownId: this.state.TownId,
            CountryId: this.state.CountryId,
            NeighborhoodId: this.state.NeighbourhoodId,
            OfferTypeId: this.state.PropertyPurposeId,
            PropertyTypeId: this.state.PropertyTypeId,
            PropertyStatusId: this.state.BuildingStatusId,
            BedroomsCount: this.state.BedroomsCount,
            BathroomsCount: this.state.BathroomsCount,
            Area: this.state.Area,
            Price: this.state.Price,
            Year: this.state.Year,
            Address: this.state.Address,
            OwnerName: this.state.OwnerName,
            OwnerPhone: this.state.OwnerPhone,
            IsVIP: this.state.IsVIP,
            Code: this.state.Code,
            Floor: this.state.Floor,
            AllFloorsCount: this.state.FloorsInBuilding,
            BuildingTypeId: this.state.BuildingTypeId,
            CurencyId: this.state.CurrencyId,
            ApartamentTypeId: this.state.ApartamentTypeId,
            ExtrasIds: this.state.ExtrasIds
        }
        updateProperty(data, this.state.Id)
            .then(res => res.text())
            .then((result) => {
                console.log(result)
                this.loadProperty()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    onBeforeSend(event) {
        event.formData.append('PropertyId', this.state.Id);
    }

    photosReady() {
        this.getAllPhotos()
    }

    modifyPhoto(event, id) {

        const target = event.target;
        let value = target.value

        console.log(id)
        console.log(value)
        modifyPhotos(id, value)
            .then(res => res.text())
            .then((result) => {
                console.log(result)
                this.loadProperty()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    deletePhoto(id) {
        deletePhotos(id)
            .then(res => res.text())
            .then((result) => {
                console.log(result)
                this.loadProperty()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    descriptionChange = (text) => {
        this.setState({ Description: text })
    }

    multiselect = (event) => {
        var options = event.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }

        console.log(value)
        this.setState({
            ExtrasIds: value
        })

    }


    render() {

        let extras = this.state.extrasList.map((extra, index) => {
            return (
                <option key={index} value={extra.id}>{extra.name}</option>
            )
        })

        let photos = this.state.photos.map((photo, index) => {

            let ordernumber = this.state.photos.map((photo2, index2) => {
                return (
                    <option key={index2} selected={(index2 + 1) == (photo.orderNumber)} value={index2 + 1}>{index2 + 1}</option>
                )
            })

            return (
                <div key={index} className="col-lg-3">
                    <select className="form-control" onChange={(event) => this.modifyPhoto(event, photo.id)}>
                        {ordernumber}
                    </select>
                    <ImageInTheBox src={DOMAIN_URL + '/' + this.state.Id + '/' + photo.path}></ImageInTheBox>
                    <button className="btn btn-danger" onClick={() => this.deletePhoto(photo.id)}>Изтрий</button>
                    <hr />
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <TextInputComponent name="Code" disabled={true} label="Код" type="text" value={this.state.Code} onChange={this.handleInputChange} />
                        <br />
                        <TextInputComponent name="Name" label="Име" type="text" value={this.state.Name} onChange={this.handleInputChange} />
                        <br />
                        <TextInputComponent name="BedroomsCount" label="Спални" type="number" value={this.state.BedroomsCount} onChange={this.handleInputChange} />
                        <br />
                        <TextInputComponent name="BathroomsCount" label="Бани" type="number" value={this.state.BathroomsCount} onChange={this.handleInputChange} />
                        <br />
                        <TextInputComponent name="Price" label="Цена" type="number" value={this.state.Price} onChange={this.handleInputChange} />
                        <br />
                        <TextInputComponent name="Year" label="Година" type="number" value={this.state.Year} onChange={this.handleInputChange} />
                        <br />
                        <TextInputComponent name="Area" label="Площ" type="number" value={this.state.Area} onChange={this.handleInputChange} />
                        <br />
                        <TextInputComponent name="Floor" label="Етаж" type="number" value={this.state.Floor} onChange={this.handleInputChange} />
                        <br />
                        <TextInputComponent name="FloorsInBuilding" label="Етажи в сградата" type="number" value={this.state.FloorsInBuilding} onChange={this.handleInputChange} />
                        <br />
                        <input type="checkbox" name="IsVIP" checked={this.state.IsVIP} onChange={this.handleInputChange} /> Направи ВИП обява
                         <br />
                        <input type="checkbox" name="IsVisible" checked={this.state.IsVisible} onChange={this.handleInputChange} /> Видима обява
                    </div>
                    <div className="col-lg-3">
                        <Countries name="CountryId" value={this.state.CountryId} onChange={this.handleInputChange} disableEmpty={true} empltyLabel={'Моля, изберете'} />
                        <Towns name="TownId" countryId={this.state.CountryId} value={this.state.TownId} onChange={this.handleInputChange} disableEmpty={true} empltyLabel={'Моля, изберете'} />
                        <Neighbourhood name="NeighbourhoodId" townId={this.state.TownId} value={this.state.NeighbourhoodId} onChange={this.handleInputChange} disableEmpty={true} empltyLabel={'Моля, изберете'} />
                        <Currency name="CurrencyId" value={this.state.CurrencyId} onChange={this.handleInputChange} disableEmpty={true} empltyLabel={'Моля, изберете'} />
                        <ProperyPurpose name="PropertyPurposeId" value={this.state.PropertyPurposeId} onChange={this.handleInputChange} disableEmpty={true} empltyLabel={'Моля, изберете'} />
                        <PropertyType name="PropertyTypeId" value={this.state.PropertyTypeId} onChange={this.handleInputChange} disableEmpty={true} empltyLabel={'Моля, изберете'} />
                        <BuildingStatus name="BuildingStatusId" value={this.state.BuildingStatusId} onChange={this.handleInputChange} disableEmpty={true} empltyLabel={'Моля, изберете'} />
                        <BuildingType name="BuildingTypeId" value={this.state.BuildingTypeId} onChange={this.handleInputChange} disableEmpty={true} empltyLabel={'Моля, изберете'} />
                        <ApartamentType name="ApartamentTypeId" value={this.state.ApartamentTypeId} onChange={this.handleInputChange} disableEmpty={true} empltyLabel={'Моля, изберете'} />

                    </div>
                    <div className="col-lg-3">
                        <strong>Изберете екстри към имота:</strong>
                        <select className="form-control" multiple={true} onChange={this.multiselect} style={{height: 500}} value={this.state.ExtrasIds}>
                            {extras}
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <TextInputComponent name="Address" label="Адрес" type="text" value={this.state.Address} onChange={this.handleInputChange} />
                        <br />
                        <TextInputComponent name="OwnerName" label="Име на собственика" type="text" value={this.state.OwnerName} onChange={this.handleInputChange} />
                        <br />
                        <TextInputComponent name="OwnerPhone" label="Телефон на собственика" type="text" value={this.state.OwnerPhone} onChange={this.handleInputChange} />
                        <br />
                    </div>
                </div>
                <Description value={this.state.Description} onChange={this.descriptionChange} />
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div dangerouslySetInnerHTML={{ __html: this.state.DescriptionOld }}></div>
                    </div>
                </div>
                <hr />
                <h4><strong>Прикачване на снимки:</strong></h4>
                <div className="text-center">
                    <div className="upload-btn-wrapper">
                        <button className="btn">Прикачи снимки</button>
                        <input type="file" name="img" onChange={this.handleInputChange} accept="image/*" />
                    </div>
                </div>
                <br />
                <div className="row">
                    {photos}
                </div>
                <hr />
                <ButtonComponent styleClass="info" label="Запази" onClick={this.modifyProperty} />
                <br />
                <ButtonComponent styleClass="danger" label="Изтрий" onClick={this.delete} />
                <hr />
            </div>
        );
    }
}

export default ModifyProperty;
