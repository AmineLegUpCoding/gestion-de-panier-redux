import { legacy_createStore, combineReducers } from "redux";
import panierReducer from "./reducers/panierReducer";
const reducers = combineReducers({
    panier:panierReducer
})
const store = legacy_createStore(panierReducer)
export default store