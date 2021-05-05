import * as Actions from "store/actions"

import { 
  GENDER_OPTION_ALL
} from "config"

const initialState = {
  data: {},
  searchName: "",
  filtered: {},
  gender: GENDER_OPTION_ALL,
  page: 1,
  isLoading: true,
  error: {},
}

const list = function (state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_CHARACTERS: {
      const { gender, page } = action.payload
      return {
        ...state,
        gender,
        page,
        isLoading: true,
        error: {},
      }
    }
    case Actions.FETCH_CHARACTERS_SUCCESS: {
     
      const { results, info } = action.payload
      const { pages } = info

      const filtered = getFilteredCharacters(results, state.searchName)

      return {
        ...state,
        data: results,
        filtered,
        pages,
        isLoading: false,
        error: {},
      }
    }
    case Actions.FETCH_CHARACTERS_ERROR: {
      return {
        ...state,
        data: {},
        filtered: {},
        isLoading: false,
        error: action.error,
      }
    }
    case Actions.FILTER_CHARACTERS: {
      const searchName = action.payload
      const filtered = getFilteredCharacters(state.data,searchName)
      return {
        ...state,
        searchName,
        filtered,
        isLoading: false,
        error: {},
      }
    }
    default: {
      return state
    }
  }
}

export default list

function getFilteredCharacters(source, searchName) {
  return source.filter(character => searchName === "" || character.name.toLowerCase().includes(searchName.toLowerCase()))
}
