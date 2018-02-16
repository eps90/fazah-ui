import {all, fork} from "redux-saga/effects";
import projectSagas from "./project/sagas";
import catalogueSagas from "./catalogue/sagas";
import newProjectSagas from "./newProject/sagas";
import catalogeEditSagas from "./catalogueEdit/sagas";

export default function* runSagas() {
    yield all([
        fork(projectSagas),
        fork(catalogueSagas),
        fork(newProjectSagas),
        fork(catalogeEditSagas)
    ]);
}
