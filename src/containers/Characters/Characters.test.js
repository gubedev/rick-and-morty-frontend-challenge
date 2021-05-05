import React from "react"
import { render } from "utils/tests/test-utils"
import Characters from "./index"
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

it("characters is showing skeleton", () => {
  let { queryByTestId } = render(<Characters />, { initialState })
  expect(queryByTestId("skeleton")).not.toBe(null)
  expect(queryByTestId("characters-data")).toBe(null)
})
