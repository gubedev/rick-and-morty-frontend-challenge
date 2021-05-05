import { combineReducers } from "redux"
import list from "./listCharacters.reducer"

const characters = combineReducers({
  list
})

export default characters
