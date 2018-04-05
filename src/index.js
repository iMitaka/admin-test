import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import { Provider } from 'react-redux'
import store from './redux/storeConfiguration'
import '../node_modules/toastr/build/toastr.min.css'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
