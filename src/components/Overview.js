import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles(theme =>({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        marginTop:10,
        color: theme.palette.text.secondary,
      },
  }));
export default function Overview(){
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
           Overview
          </Typography>
          <Divider/>
          <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Paper className={classes.paper}>xs</Paper>
            </Grid>
            </Grid>
        </CardContent>
      </Card>
        )
}