import React from "react";
import { useEffect ,useState} from "react";
import { Container,AppBar,Typography,Grow,Grid } from "@material-ui/core"
import memories from "./Images/memories.png"
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import {getPosts} from './actions/Posts.js'

const App=()=>{

  const [currentId,setCurrentId]=useState(null)
    const classe=useStyles();
    const dispatch=useDispatch();

useEffect(()=>{
  dispatch(getPosts());
},[currentId,dispatch])

    return (
      <Container maxwidth="lg">
        <AppBar className={classe.appBar} position="static" color="inherit">
          <Typography className={classe.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img className={classe.image} src={memories} alt="memories" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
             className={classe.mainContainer}
              justifyContent="space-between"
              alignItems="stretch"
              spacing={4}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form  currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    );

}

export default App;