import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import { startSetAbsences } from './actions/absences';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(startSetAbsences())

ReactDOM.render(jsx, document.getElementById('app'))
