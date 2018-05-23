import { Store, createStore, applyMiddleware } from 'redux';
// import { History } from 'history';
import allReducers from './reducers';
import thunk from 'redux-thunk';

export function configureStore(initialState){
    let middleware = applyMiddleware(thunk);

    const store = createStore(allReducers,initialState,middleware);

    return store
}