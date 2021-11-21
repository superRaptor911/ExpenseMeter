/* eslint-disable react/prop-types */
import {InputLabel, MenuItem, Paper, Select, TextField} from '@mui/material';
import React, {Fragment} from 'react';

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
      <Fragment>
        <InputLabel id="demo-simple-select-label2">Type</InputLabel>
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
          <MenuItem value={'WEEKLY'}>Weekly</MenuItem>
          <MenuItem value={'MONTHLY'}>Monthly</MenuItem>
        </Select>
      </Fragment>

      <TextField
        id="standard-basic"
        label="Bar Count"
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
