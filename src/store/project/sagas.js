import {fetchProject, fetchProjects} from "../../service/repository/project";
import {call, put, select, takeLatest, all} from "redux-saga/effects";
import {
    failProjectListing, PROJECT_SELECTION_REQUESTED, PROJECTS_REQUESTED, selectProjectFailure, selectProjectSuccess,
    setProjects, SHOW_PROJECT_CATALOGUES
} from "./actions";
import {getProject} from "./../selectors";
import {push} from "react-router-redux";

export function* fetchProjectList() {
    try {
        const projects = yield call(fetchProjects);
        yield put(setProjects(projects));
    } catch (e) {
        yield put(failProjectListing());
    }
}

export function* selectOrFetchProject({projectId}) {
    try {
        let project = yield select(getProject, projectId);
        if (project === null) {
            project = yield call(fetchProject, projectId);
        }

        yield put(selectProjectSuccess(project));
    } catch (e) {
        yield put(selectProjectFailure());
    }
}

export function* openCataloguesForProject({projectId}) {
    yield* selectOrFetchProject({projectId});

    const cataloguesUrl = `/projects/${projectId}/catalogues`;
    yield put(push(cataloguesUrl));
}

export default function* watchProjects() {
    yield all([
        takeLatest(PROJECTS_REQUESTED, fetchProjectList),
        takeLatest(PROJECT_SELECTION_REQUESTED, selectOrFetchProject),
        takeLatest(SHOW_PROJECT_CATALOGUES, openCataloguesForProject),
    ]);
}
