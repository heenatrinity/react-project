import React from "react";
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
import { ThumbUpAlt } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: "100%",
    height: "100%",
    padding: "50px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
  blogTitle: {
    marginBottom: "50px",
    marginTop: "10px",
    textAlign: "center",
  },
}));

function Homepage() {
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Latest Posts
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={50} sm={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box ml={2}>
                  <ThumbUpAlt />
                </Box>
                <Box>
                  <Button variant="outline-dark">view</Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={50} sm={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading 2
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box ml={2}>
                  <ThumbUpAlt />
                </Box>
                <Box>
                  <Button variant="outline-dark">view</Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={50} sm={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading 3
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box ml={2}>
                  <ThumbUpAlt />
                </Box>
                <Box>
                  <Button variant="outline-dark">view</Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={50} sm={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Link
                    to="/newpost"
                    style={{ textDecoration: "none", color: "unset" }}
                  >
                    {" "}
                    <Typography gutterBottom variant="h5" component="h2">
                      <Link
                        to="/newpost"
                        style={{ textDecoration: "none", color: "unset" }}
                      >
                        New Post
                      </Link>
                    </Typography>
                  </Link>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}></CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={18} className={classes.paginationContainer}></Box>
      </Container>
    </div>
  );
}

export default Homepage;
