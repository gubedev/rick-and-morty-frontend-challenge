import { combineReducers } from "redux"
import characters from "./characters"

const createReducer = asyncReducers =>
  combineReducers({
    characters,
    ...asyncReducers,
  })

export default createReducer
