import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, Box } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 20
  },
  pos: {
    marginBottom: 12
  }
}));

const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: '#ff5252',
    m: 2,
    border: 3,
    style: { width: '5rem', height: '5rem' },
  };

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={9}>
            <Paper className={classes.paper}> Video</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Grid
                  container
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <Grid item xs={12}>
                  <Box borderRadius="50%" {...defaultProps}>
                  <Avatar
                      alt="Remy Sharp"
                      src="data:image/jpeg;base64,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"
                      style={{ width: '5rem', height: '5rem' }}
                    />
                  </Box>
                    
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      className={classes.title}
                      variant="h6"
                      fontWeight="fontWeightBold"
                      gutterBottom
                    >
                      Vivek Rana
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      India. Joined Oct 2013
                    </Typography>

                    <Divider variant="fullWidth" orientation="horizontal" />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    style={{
                      maxHeigth: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <AssignmentReturnedIcon />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography className={classes.title}>
                      <Box textAlign="left" m={1}>
                        108 <br />
                        Jobes Done
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    style={{
                      maxHeigth: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <AssignmentReturnedIcon />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography className={classes.title}>
                      <Box textAlign="left" m={1}>
                        100 % (72/72) <br />
                        Recommended
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid
                    item
                    xs={2}
                    style={{
                      maxHeigth: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <AssignmentReturnedIcon />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography className={classes.title}>
                      <Box textAlign="left" m={1}>
                        12 <br />
                        Repeat Clients
                      </Box>
                    <Divider variant="fullWidth" orientation="horizontal" />
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions
                style={{
                  diaplay: "flex",
                  flexDirection: "row",
                  justifyContent: "center"
                }}
              >
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  size="large"
                  raised
                >
                  <Typography
                    variant="h6"
                    component="h2"
                    style={{ color: "	#FFFFFF" }}
                  >
                    Contact Me
                  </Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
