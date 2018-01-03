import projects from "./project/reducers";
import catalogues from "./catalogue/reducers";
import {combineReducers} from "redux";

export default combineReducers({
    projects,
    catalogues
});
