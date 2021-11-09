/* eslint-disable react/prop-types */
import React, {useEffect, useRef, useState} from 'react';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import {editTransaction} from '../../api/api';
import {useStore} from '../../store';

const EditTrans = ({id, setShowEditMenu}) => {
  const [transType, setTransType] = useState('EXPENSE');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState();
  const [note, setNote] = useState();
  const [amount, setAmount] = useState();

  const cred = useStore(state => state.credential);
  const categories = useStore(state => state.categories);
  const transactions = useStore(state => state.transactions);
  const storeEditTrans = useStore(state => state.editTransaction);

  useEffect(() => {
    let oldTrans = null;
    for (const i of transactions) {
      if (i._id === id) {
        oldTrans = i;
        break;
      }
    }
    if (!oldTrans) {
      console.error('EditTrans::Fatal error! cant find ', id);
    }

    setTransType(oldTrans.transType);
    setCategory(oldTrans.category);
    setDate(oldTrans.date);
    setTitle(oldTrans.title);
    setNote(oldTrans.note);
    setAmount(oldTrans.amount);
  }, [id]);

  const handleSubmit = async () => {
    const result = await editTransaction(
      cred,
      id,
      title,
      transType,
      note,
      date,
      amount,
      category,
    );

    if (result) {
      storeEditTrans(result);
    }
    setShowEditMenu(false);
  };

  return (
    <div style={{margin: 'auto', width: 'max-content', marginTop: 20}}>
      <Modal
        open={true}
        onClose={() => {
          setShowEditMenu(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Paper
          sx={{
            width: 600,
            height: 550,
            margin: 'auto',
            marginTop: '10%',
            display: 'flex',
            flexDirection: 'column',
            padding: 5,
            justifyContent: 'space-between',
          }}>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            required
            value={title}
            onChange={event => {
              setTitle(event.target.value);
            }}
          />

          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={transType}
            label="Type"
            onChange={event => {
              setTransType(event.target.value);
            }}>
            <MenuItem value={'EXPENSE'}>Expense</MenuItem>
            <MenuItem value={'INCOME'}>Income</MenuItem>
          </Select>

          <InputLabel id="demo-simple-select-label2">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label2"
            id="demo-simple-select2"
            value={category}
            label="Category"
            onChange={event => {
              setCategory(event.target.value);
            }}>
            {categories &&
              categories.map(item => (
                <MenuItem value={item._id} key={item._id}>
                  {item.title}
                </MenuItem>
              ))}
          </Select>

          <TextField
            id="standard-basic"
            label="Note"
            variant="standard"
            value={note}
            onChange={event => {
              setNote(event.target.value);
            }}
          />
          <TextField
            id="standard-basic"
            label="Amount"
            type="number"
            variant="standard"
            required
            value={amount}
            onChange={event => {
              setAmount(event.target.value);
            }}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={props => <TextField {...props} />}
              label="Date Time"
              value={date}
              onChange={newValue => {
                setDate(newValue);
              }}
            />
          </LocalizationProvider>

          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Paper>
      </Modal>
    </div>
  );
};

export default EditTrans;
