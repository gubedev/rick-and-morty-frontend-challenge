import { 
  put, 
  takeLatest, 
  call 
} from "redux-saga/effects"
import { fetchCharacters } from "api"
import { 
  FETCH_CHARACTERS, 
  FETCH_CHARACTERS_SUCCESS, 
  FETCH_CHARACTERS_ERROR 
} from "store/actions/characters"

function* fetchCharactersSaga(action) {
  try {
    const data = yield call(fetchCharacters, action.payload)
    yield put({
      type: FETCH_CHARACTERS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    yield put({
      type: FETCH_CHARACTERS_ERROR,
      error: error.data
    })
  }
}

export function* fetchCharactersWatcher() {
  yield takeLatest(FETCH_CHARACTERS, fetchCharactersSaga)
}
