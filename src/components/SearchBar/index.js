import React, {
  useEffect, 
  useState
} from "react"
import { InputBase } from "@material-ui/core"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import SearchIcon from "@material-ui/icons/Search"
import styled from "styled-components"
import { 
  GENDER_OPTION_ALL, 
  GENDER_OPTION_MALE, 
  GENDER_OPTION_FEMALE 
} from "config"

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  background-color: #f4f4f7;
  border-radius: 20px;
  width: 400px;
  height: 40px;
  padding: 1em;
`
const SearchBar = ( { handleGenderChange, handleFilter } ) => {
  const [searchCharacter, setSearchCharacter] = useState("")
  const [gender, setGender] = useState(GENDER_OPTION_ALL)

  useEffect(
    () => { 
      handleGenderChange(gender)
    },
    [gender]
  )

  const onGenderChange = e => {
    setGender(e.target.value)
  }

  const onFilterChange = e => {
    setSearchCharacter(e.target.value)
    handleFilter(e.target.value)
  }

  return (
    <SearchContainer>
      <SearchIcon />
      <InputBase 
        fullWidth 
        placeholder="Search a character" 
        value={searchCharacter}
        onChange={onFilterChange}
        data-testid="character-name-input"
      />
      <Select
        value={gender}
        onChange={onGenderChange}
        disableUnderline={true}
      >
          <MenuItem value={GENDER_OPTION_ALL}>{GENDER_OPTION_ALL}</MenuItem>
          <MenuItem value={GENDER_OPTION_MALE}>{GENDER_OPTION_MALE}</MenuItem>
          <MenuItem value={GENDER_OPTION_FEMALE}>{GENDER_OPTION_FEMALE}</MenuItem>
        </Select>
    </SearchContainer>
  )
}

export default SearchBar
