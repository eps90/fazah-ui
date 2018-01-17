import projects from "./project/reducers";
import catalogues from "./catalogue/reducers";
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

export default combineReducers({
    projects,
    catalogues,
    router: routerReducer
});
