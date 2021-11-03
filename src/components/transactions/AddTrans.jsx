import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import React, {useRef, useState} from 'react';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import {addTransaction} from '../../api/api';
import {useStore} from '../../store';

const AddTrans = () => {
  const [showModal, setShowModal] = useState(false);
  const [transType, setTransType] = useState('EXPENSE');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());

  const cred = useStore(state => state.credential);
  const storeAddTrans = useStore(state => state.addTransaction);

  const titleRef = useRef();
  const noteRef = useRef();
  const amountRef = useRef();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async () => {
    const title = titleRef.current.value;
    const note = noteRef.current.value;
    const amount = amountRef.current.value;

    const result = await addTransaction(
      cred,
      title,
      transType,
      note,
      date,
      amount,
      category,
    );
    if (result) {
      storeAddTrans(result);
      setShowModal(false);
    }
  };

  return (
    <div style={{margin: 'auto', width: 'max-content', marginTop: 20}}>
      <Fab color="primary" aria-label="add" onClick={toggleModal}>
        <AddIcon />
      </Fab>
      <Modal
        open={showModal}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Paper
          sx={{
            width: 600,
            height: 500,
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
            inputRef={titleRef}
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={transType}
            label="Age"
            onChange={event => {
              setTransType(event.target.value);
            }}>
            <MenuItem value={'EXPENSE'}>Expense</MenuItem>
            <MenuItem value={'INCOME'}>Income</MenuItem>
          </Select>

          <TextField
            id="standard-basic"
            label="Note"
            variant="standard"
            inputRef={noteRef}
          />
          <TextField
            id="standard-basic"
            label="Amout"
            type="number"
            variant="standard"
            required
            inputRef={amountRef}
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

export default AddTrans;
