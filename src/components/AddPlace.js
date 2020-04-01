import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright';
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default class AddPlace extends React.Component {
  //const classes = useStyles();
  
  constructor(){
    super();
    this.state = {
   token:''
    }
   
  }

  handleClick(){
    
  }
  

  
  render(){
    if (this.state.token){
      return (
        <Redirect to={{
          pathname:"/dashboard"
        }}
        />
      );
    }
    else {
  return (
    
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div >
        <Avatar >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add new Place
        </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            // value={this.state.username}
            label="Place name"
            name="name"
            autoComplete="text"
            // onChange={this.onEmailChanged}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            // value={this.state.password}
            name="phonenumber"
            label="Phone Number"
            type="phone"
            id="phonenumber"
            // onChange={this.onPasswordChanged}
          />
          <TextField
          margin="normal"
          required
          fullWidth
          multiline
          rows="5"
          name="description"
          label="Enter Description"
          type="text"
          id="description"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            // value={this.state.password}
            name="city"
            label="City"
            type="text"
            id="city"
            // onChange={this.onPasswordChanged}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            // value={this.state.password}
            name="categories"
            label="Categories"
            type="text"
            id="categories"
            // onChange={this.onPasswordChanged}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleClick}
            
          >
           Add Place
          </Button>
        
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
  }
}

  
}