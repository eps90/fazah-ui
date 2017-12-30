import {fetchProjects} from "../../service/repository/project";
import {call, put, takeLatest} from "redux-saga/effects";
import {failProjectListing, PROJECTS_REQUESTED, setProjects} from "./actions";

export function* fetchProjectList() {
    try {
        const projects = yield call(fetchProjects);
        yield put(setProjects(projects));
    } catch (e) {
        yield put(failProjectListing());
    }
}

export default function* watchProjects() {
    yield takeLatest(PROJECTS_REQUESTED, fetchProjectList);
}
