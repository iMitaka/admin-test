import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom' // Redirect
import AuthorizedRoute from './private/AuthorizedRoute'
import Login from '../app/components/login/Login'
import Home from '../app/components/home/Home'
import AddProperty from '../app/components/property/add-property/AddProperty'
import ModifyProperty from '../app/components/property/modify-property/ModifyProperty'
import PageNotFound from '../shared/components/page-not-found/PageNotFound'
import Register from '../app/components/register/register'
import {
    ROUTE_LOGIN,
    ROUTE_HOME,
    ROUTE_ADD_PROPERTY,
    ROUTE_MODIFY_PROPERTY
} from '../shared/constants/RouteConstants';
import EnsureLoggedInContainer from './private/EnsureLoggedInContainer'
import Country from '../app/components/numenclatures/country'
import Town from '../app/components/numenclatures/town'
import Neighborhood from '../app/components/numenclatures/neighborhood'
import OfferType from '../app/components/numenclatures/offer-type'
import PropertyType from '../app/components/numenclatures/property-type'
import Curency from '../app/components/numenclatures/curency'
import BuildingType from '../app/components/numenclatures/building-type'
import PropertyStatus from '../app/components/numenclatures/property-status'
import Extras from '../app/components/numenclatures/extras'
import ApartamentType from '../app/components/numenclatures/apartament-type'

const Routes = () => (
    <Switch>
        <Route exact path={ROUTE_LOGIN} component={Login} />
        <Route exact path={'/register'} component={Register} />
        <EnsureLoggedInContainer>
            <Route exact path={ROUTE_HOME} component={Home} />
            <Route exact path={ROUTE_ADD_PROPERTY} component={AddProperty} />
            <Route exact path={ROUTE_MODIFY_PROPERTY + '/:id'} component={ModifyProperty} />
            <Route exact path={'/country'} component={Country} />
            <Route exact path={'/town'} component={Town} />
            <Route exact path={'/neighborhood'} component={Neighborhood} />
            <Route exact path={'/offer-type'} component={OfferType} />
            <Route exact path={'/property-type'} component={PropertyType} />
            <Route exact path={'/curency'} component={Curency} />
            <Route exact path={'/building-type'} component={BuildingType} />
            <Route exact path={'/property-status'} component={PropertyStatus} />
            <Route exact path={'/extras'} component={Extras} />
            <Route exact path={'/apartament-type'} component={ApartamentType} />
        </ EnsureLoggedInContainer>
        <Route component={PageNotFound} />
    </Switch>
)

export default Routes