import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme =>({
    root: {
      minWidth: 275,
      paddingTop:theme.spacing(2),
      marginTop:theme.spacing(2)
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
    spacing: {
      marginTop:theme.spacing(2)
    }
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Sheraton PJ', 'Farhan', 200, 2, 400),
    createData('Le Meridien Bangsar', 'Hakim', 250, 1, 250),
    createData('Ibis Melaka', 'Sally', 180,  1, 180),
    createData('Ibis Melaka', 'John', 180, 2, 360),
    createData('IOI puchong ', 'Jimmy', 200, 2, 400),
  ];
export default function Booking(props){
    const classes = useStyles();
  
    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Latest Booking
          </Typography>
          <TableContainer component={Paper} className={classes.spacing}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hotel name</TableCell>
            <TableCell align="right">Customer name</TableCell>
            <TableCell align="right">Daily price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.places.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
             <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.phonenumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </CardContent>
      </Card>
        )
}