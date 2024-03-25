import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {reducer as todoReducer} from "./Todo/reducer";
import thunk from 'redux-thunk'
import { reducer as loginReducer } from "./Auth/reducer";
const rootReducer = combineReducers({todoReducer, loginReducer});

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
