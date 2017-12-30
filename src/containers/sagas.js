import {all, fork} from "redux-saga/effects";
import projectSagas from './project/sagas';

export default function* runSagas() {
    yield all([
        fork(projectSagas)
    ]);
}
