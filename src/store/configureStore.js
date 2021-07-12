import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import absencesReducer from '../reducers/absences';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            absences: absencesReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};