import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "100%",
    height: "100%",
    padding: "23px",
  },
  cardActions: {
    display: "flex",
    textAlign: "center",
  },
  blogTitle: {
    marginBottom: "50px",
    marginTop: "10px",
    textAlign: "center",
  },
  InputField: {
    textAlign: "center",
    justifyContent: "space-between",
    margin: "20px",
    padding: "5px",
    width: "100%",
  },
}));

function NewPost() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.blogsContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        New Posts
      </Typography>

      <Grid container spacing={0} alignItems="center" justifyContent="center">
        <Grid item xs={50} sm={12} md={6}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <div className={classes.InputField}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter the title"
                  />
                </div>
                <div className={classes.InputField}>
                  <textarea
                    type="text"
                    name="name"
                    placeholder="Enter the post content.."
                  />
                </div>
              </CardContent>
            </CardActionArea>
            <div className={classes.InputField}>
              <Button variant="contained">Post</Button>
            </div>
          </Card>
        </Grid>
      </Grid>
      <Box my={32} className={classes.paginationContainer}></Box>
    </Container>
  );
}
export default NewPost;
