export const FETCH_CHARACTERS = "FETCH_CHARACTERS"
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS"
export const FETCH_CHARACTERS_ERROR = "FETCH_CHARACTERS_ERROR"

export const FILTER_CHARACTERS = "FILTER_CHARACTERS"

export function fetchCharacters(data) {
  return {
    type: FETCH_CHARACTERS,
    payload: data,
  }
}

export function filterCharacters(data) {
  return {
    type: FILTER_CHARACTERS,
    payload: data,
  }
}