import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants';
import { all, put, takeLatest } from 'redux-saga/effects';
import getPeople from './apis';

function* fetchData (action) {
  try {
    const data = yield getPeople();
    yield put({ type: FETCHING_DATA_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE });
  }
}

function* dataSaga () {
  // yield all([
  //   takeLatest(FETCHING_DATA, fetchData),
  // ]);
  yield takeLatest(FETCHING_DATA, fetchData);
}

export default dataSaga
