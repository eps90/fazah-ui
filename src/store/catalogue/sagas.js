import {CATALOGUES_REQUESTED, failCataloguesListing, setCatalogues} from "./actions";
import {takeLatest, call, put} from "redux-saga/effects";
import {fetchCataloguesForProject} from "../../service/repository/catalogues";

export function* fetchCatalogues({projectId}) {
    try {
        const catalogues = yield call(fetchCataloguesForProject, projectId);
        yield put(setCatalogues(catalogues));
    } catch (err) {
        yield put(failCataloguesListing());
    }
}

export default function* watchSagas() {
    yield takeLatest(CATALOGUES_REQUESTED, fetchCatalogues);
}

