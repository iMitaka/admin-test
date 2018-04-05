import React from 'react';
import './Preloader.css'
import { connect } from 'react-redux'

const Preloader = ({ loading }) => {
    if (!loading) return null;
    return (
        <div>
            <div id="myOverlay"></div>
            <div id="loader"></div>
        </div>
    );
};

export default connect((state) => ({
    loading: state.ajaxStatus > 0
}))(Preloader);