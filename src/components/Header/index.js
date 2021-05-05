import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import SearchBar from "components/SearchBar"
import AppIcon from "components/AppIcon"

const useStyles = makeStyles(theme => ({
  appName: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2em",
    backgroundColor: "#fff",
  }
}))

const Header = ( {handleGenderChange, handleFilter}) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.appName}>
        <AppIcon />
        <SearchBar 
          handleGenderChange={handleGenderChange}
          handleFilter={handleFilter}
        />
        <div>
          <b>Frontend challenge</b>
        </div>
      </div>
    </>
  )
}

export default Header
