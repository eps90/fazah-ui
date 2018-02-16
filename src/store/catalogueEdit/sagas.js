import {ADD_CATALOGUE_REQUEST, addNewCatalogueFailure, addNewCatalogueSuccess} from "./actions";
import {all, put, takeLatest, call} from "redux-saga/effects";
import createCatalogue from "../../service/repository/catalogue/createCatalogue";

export function* addCatalogue({properties}) {
    try {
        yield call(createCatalogue, properties.name, properties.projectId, properties.parentId);
        yield put(addNewCatalogueSuccess());
    } catch (e) {
        yield put(addNewCatalogueFailure());
    }
}

export default function* watchCatalogueEdit() {
    yield all([
        takeLatest(ADD_CATALOGUE_REQUEST, addCatalogue)
    ]);
}