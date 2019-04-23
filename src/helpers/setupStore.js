import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from 'redux-thunk'


import fetchRecipesReducer from '../store/reducers/fetchRecipes'
import userAuthenticationReducer from '../store/reducers/userAuthentication'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    index : fetchRecipesReducer,
    auth : userAuthenticationReducer

})

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk))
)