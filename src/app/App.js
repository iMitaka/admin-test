import React, { Component } from 'react';
import Routes from '../routes/Routes'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import Preloader from '../shared/components/preloader/Preloader'

class App extends Component {

  render() {
    return (
      <div>
        <Preloader />
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <Routes />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
