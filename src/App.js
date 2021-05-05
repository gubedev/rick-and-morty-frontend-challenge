import React, { Suspense, lazy } from "react"
import { 
  useDispatch
} from "react-redux"
import { 
  fetchCharacters,
  filterCharacters
} from "store/actions"
import { 
  BrowserRouter, 
  Route, 
  Switch 
} from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import Header from "components/Header"

const Characters = lazy(() => import("containers/Characters"))

function App() {
  const dispatch = useDispatch()
  
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <div>
          <Header 
              handleGenderChange={ gender  =>
                dispatch(fetchCharacters( {gender, page:1} ))
              }
              handleFilter={
                searchName => dispatch(filterCharacters( searchName ))
              }
          />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact>
                <Characters />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
