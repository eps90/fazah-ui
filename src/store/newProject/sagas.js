import {all, call, put, takeLatest} from "redux-saga/effects";
import {addingProjectFailure, addingProjectSuccess} from "./actions";
import createProject from "../../service/repository/project/createProject";
import {ADD_NEW_PROJECT_REQUESTED} from "./actions";

export function* addProject({properties}) {
    try  {
        yield call(createProject, properties.name, properties.availableLangs);
        yield put(addingProjectSuccess());
    } catch (e) {
        yield put(addingProjectFailure());
    }
}

export default function* watchNewProject() {
    yield all([
        takeLatest(ADD_NEW_PROJECT_REQUESTED, addProject)
    ]);
}
