import React from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import Fade  from "@material-ui/core/Fade"
import { 
  red, 
  pink, 
  green, 
  blue 
} from "@material-ui/core/colors"
import { dateToStringESFormatted } from "utils/formatters/dateFormatter"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    backgroundColor: "rgb(60, 62, 68)",
    color: "white",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  maleAvatar: {
    backgroundColor: blue[500],
  },
  femaleAvatar: {
    backgroundColor: pink[200],
  },
  liveAvatar: {
    backgroundColor: green[500],
  },
  deadAvatar: {
    backgroundColor: red[200],
  },
  title: {
    color: "#fff",
    fontWeight: "bold"
  },
  subColor: {
    color: "#fff",
  },
}))

const CardContainer = styled.div`
    &:hover {
      transform: translateY(-5px)
    }
    cursor:pointer;
`
export default function CharacterCard({ data }) {
  const StatusAvatar = styled.div`
    border-radius: 50%;
    height: 10px;
    width: 10px;
    background: ${data.status === "Alive" ? "green" : data.status === "Dead" ? "red" : "gray"};
    margin-right: 1em;
  `
  const classes = useStyles()

  return (
    <CardContainer>
      <Fade in={true} timeout={400}>
        <Card className={classes.root}>
          <CardHeader
            avatar={<Avatar className={data.gender === "Male" ? classes.maleAvatar : classes.femaleAvatar}>{data.gender === "Male" ? "M" : "F"}</Avatar>}
            title={<Typography className={classes.title}>{data.name}</Typography>}
            subheader={<Typography className={classes.subColor}>{dateToStringESFormatted(new Date(data.created))}</Typography>}
          />
          <CardMedia 
            className={classes.media} 
            image={data.image} 
            title={data.name} 
          />
          <CardContent>
            <p>Species: {data.species}</p>
            <p>Location: {data.location.name}</p>
          </CardContent>
          <CardActions disableSpacing>
            <StatusAvatar />
            <div>{data.status}</div>
          </CardActions>
        </Card>
      </Fade>
    </CardContainer>
  )
}
