import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import React, {useRef, useState} from 'react';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {useStore} from '../../store';
import {addCategories} from '../../api/api';

const AddCategory = () => {
  const [showModal, setShowModal] = useState(false);
  const storeAddCategory = useStore(state => state.addCategory);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const colorRef = useRef();
  const dailyLimitRef = useRef();
  const weeklyLimitRef = useRef();
  const monthlyLimitRef = useRef();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const color = colorRef.current.value;
    const dailyLimit = dailyLimitRef.current.value;
    const weeklyLimit = weeklyLimitRef.current.value;
    const monthlyLimit = monthlyLimitRef.current.value;

    const result = await addCategories(
      title,
      color,
      description,
      dailyLimit,
      weeklyLimit,
      monthlyLimit,
    );

    if (result) {
      storeAddCategory(result);
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
          <div>
            <label style={{marginRight: 20}}>Color</label>
            <input type="color" style={{width: '50%'}} ref={colorRef} />
          </div>

          <TextField
            id="standard-basic"
            label="Description"
            variant="standard"
            inputRef={descriptionRef}
          />

          <TextField
            id="standard-basic"
            label="Daily Limit"
            defaultValue="0"
            type="number"
            variant="standard"
            required
            inputRef={dailyLimitRef}
          />

          <TextField
            id="standard-basic"
            label="Weekly Limit"
            defaultValue="0"
            type="number"
            variant="standard"
            required
            inputRef={weeklyLimitRef}
          />

          <TextField
            id="standard-basic"
            label="Monthly Limit"
            defaultValue="0"
            type="number"
            variant="standard"
            required
            inputRef={monthlyLimitRef}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Paper>
      </Modal>
    </div>
  );
};

export default AddCategory;
