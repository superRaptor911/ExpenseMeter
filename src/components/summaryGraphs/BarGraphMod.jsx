/* eslint-disable react/prop-types */
import {InputLabel, MenuItem, Paper, Select, TextField} from '@mui/material';
import React from 'react';

const BarGraphMod = ({graphType, setGraphType, number, setNumber}) => {
  return (
    <Paper
      sx={{
        width: 800,
        display: 'flex',
        margin: 'auto',
        marginTop: 4,
        alignItems: 'center',
        padding: 2,
      }}>
      <InputLabel id="demo-simple-select-label2">Graph Type</InputLabel>
      <Select
        labelId="demo-simple-select-label2"
        id="demo-simple-select2"
        value={graphType}
        label="Category"
        sx={{width: 200, marginLeft: 1}}
        onChange={event => {
          setGraphType(event.target.value);
        }}>
        <MenuItem value={'DAILY'}>Daily</MenuItem>
        <MenuItem value={'MONTHLY'}>Monthly</MenuItem>
      </Select>

      <TextField
        id="standard-basic"
        label="Number"
        type="number"
        variant="standard"
        required
        value={number}
        onChange={e => {
          setNumber(e.target.value);
        }}
        sx={{marginLeft: 'auto', marginRight: 4}}
      />
    </Paper>
  );
};

export default BarGraphMod;
