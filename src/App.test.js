import React from "react"
import { render, fireEvent, screen } from "utils/tests/test-utils"
import App from "./App"
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

it("initial UI is rendered as expected", () => {
  const { getByTestId } = render(<App />, { initialState})
  const countTextNode = getByTestId("character-name-input")
  expect(countTextNode.textContent).toBe("")
})
