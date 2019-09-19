import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles, TextField, Typography } from '@material-ui/core';


function translate(string){
  return `${string.replace(/-./g, c => c[1].toUpperCase()).replace(/(: *)/g, `: "`).replace(/( *;)/g, `",`)}`;
}

function App(props) {
  const [CSSCode, setCSSCode] = useState('');
  const { classes } = props;
  return (
    <div className={classes.paper}>
      <Typography className={classes.title}>
        CSS to Material-UI Style Translator
      </Typography>
      <TextField
        variant="outlined"
        id="translator-multiline-input"
        label="Paste your CSS here"
        multiline
        rowsMax="20"
        rows="20"
        value={CSSCode}
        onChange={(e) => setCSSCode(e.target.value)}
        className={classes.cssMultilineInput}
        margin="normal"
        />
      <TextField
        variant="outlined"
        id="translator-multiline-output"
        label="Output"
        multiline
        rowsMax="20"
        rows="20"
        value={translate(CSSCode)}
        className={classes.cssMultilineInput}
        margin="normal"
      />
    </div>
  );
}

export default withStyles({
  title: {
    width: '100%',
    fontSize: '2em',
  },

  cssMultilineInput: {
    fontFamily: 'Inconsolata',
    width: '40%',
    margin: '10px 3%',
  },
  paper: {
    backgroundColor: '#f2fffd',
    width: '100%',
    height: '100vh',
    textAlign: 'center',
    overflow: 'hidden',
  }
})(App);
