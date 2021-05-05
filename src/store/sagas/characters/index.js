import { all } from "redux-saga/effects"
import { fetchCharactersWatcher } from "./fetchCharacters.saga"

export default function* charactersSaga() {
  yield all([fetchCharactersWatcher()])
}
