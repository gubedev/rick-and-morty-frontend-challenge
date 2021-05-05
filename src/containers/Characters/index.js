import { makeStyles } from "@material-ui/core/styles"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { 
  fetchCharacters
} from "store/actions"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import CharacterCard from "components/CharacterCard"
import Skeleton from "@material-ui/lab/Skeleton"
import Pagination from "@material-ui/lab/Pagination"
import MuiAlert from "@material-ui/lab/Alert"
import  {
  NO_DATA_FOUND
} from "config"

const CharactersContainer = styled.div`
  display: flex;
  padding: 4em;
`

const SkeletonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  padding: 2em;
`

const SkeletonItem = styled.div`
  padding: .3em;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 100%;
`

const PaginationContainer = styled.div`
  display: flex;
  justify-content:center;
  padding: 2em;
`

const useStyles = makeStyles(theme => ({
  skeleton: {
    display: "flex",
    backgroundColor: "#fff",
    padding: "2px",
  },
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "rgb(255, 152, 0)"
    }
  },
  alert: {
    width: "100%"
  }
}))

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function GridItem({ data }) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <CharacterCard data={data} />
    </Grid>
  )
}

const Characters = props => {
  const { data, isLoading, fetchCharacters, gender, page, pages } = props
  const classes = useStyles()

  const skeletonList = () => {
    return (
      <SkeletonContainer data-testid="skeleton">
        {Array.from(Array(12).keys()).map((item, index) => {
          return (
              <Grid 
                item
                key={index} 
                xs={12} sm={6} md={3}>
                <SkeletonItem>
                  <Skeleton className={classes.skeleton}  height={100} />
                  <Skeleton variant="rect" className={classes.skeleton} height={300} />
                </SkeletonItem>
              </Grid>
          )
        })}
      </SkeletonContainer>
    )
  }

  const handlePageChange = (event, value) => {
    fetchCharacters( {gender, page: value} )
  }

  if (isLoading) {
    return skeletonList()
  } else {
    return (
      <CharactersContainer data-testid="characters-data">
        {data.length ? (
          <ListContainer>
            <Grid container spacing={1}>
              {data.map(character => (
                <GridItem key={character.id} data={character} />
              ))}
            </Grid>
            <PaginationContainer>
              <Pagination 
                count={pages} 
                page={page} 
                onChange={handlePageChange} 
                className={classes.pagination}
                size="large"
              />  
            </PaginationContainer>
          </ListContainer>
        ) : (
          <Alert 
            severity="error"
            className={classes.alert}
          >
            {NO_DATA_FOUND}
          </Alert>
        )}
      </CharactersContainer>
    )
  }
}

function mapStateToProps({ characters }) {
  return {
    data: characters.list.filtered,
    gender: characters.list.gender,
    page: characters.list.page,
    pages: characters.list.pages,
    isLoading: characters.list.isLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCharacters: fetchCharacters
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
