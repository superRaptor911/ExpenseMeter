/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {useStore} from '../../store';
import {editCategory} from '../../api/api';

const EditCategory = ({setShowModal, oldCategory}) => {
  const storeEditCategory = useStore(state => state.editCategory);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [color, setColor] = useState();
  const [dailyLimit, setDailyLimit] = useState();
  const [weeklyLimit, setWeeklyLimit] = useState();
  const [monthlyLimit, setMonthlyLimit] = useState();

  useEffect(() => {
    if (!oldCategory) {
      console.error('EditTrans::Fatal error! null item ');
    }

    setTitle(oldCategory.title);
    setDescription(oldCategory.description);
    setColor(oldCategory.color);
    setDailyLimit(oldCategory.dailyLimit);
    setWeeklyLimit(oldCategory.weeklyLimit);
    setMonthlyLimit(oldCategory.monthlyLimit);
  }, [oldCategory]);

  const handleSubmit = async () => {
    const result = await editCategory(
      oldCategory._id,
      title,
      color,
      description,
      dailyLimit,
      weeklyLimit,
      monthlyLimit,
    );
    if (result) {
      storeEditCategory(result);
      setShowModal(false);
    }
  };

  return (
    <div style={{margin: 'auto', width: 'max-content', marginTop: 20}}>
      <Modal
        open={true}
        onClose={() => {
          setShowModal(false);
        }}
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
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
          <div>
            <label style={{marginRight: 20}}>Color</label>
            <input
              type="color"
              style={{width: '50%'}}
              value={color}
              onChange={e => {
                setColor(e.target.value);
              }}
            />
          </div>

          <TextField
            id="standard-basic"
            label="Description"
            variant="standard"
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />

          <TextField
            id="standard-basic"
            label="Daily Limit"
            defaultValue="0"
            type="number"
            variant="standard"
            required
            value={dailyLimit}
            onChange={e => {
              setDailyLimit(e.target.value);
            }}
          />

          <TextField
            id="standard-basic"
            label="Weekly Limit"
            defaultValue="0"
            type="number"
            variant="standard"
            required
            value={weeklyLimit}
            onChange={e => {
              setWeeklyLimit(e.target.value);
            }}
          />

          <TextField
            id="standard-basic"
            label="Monthly Limit"
            defaultValue="0"
            type="number"
            variant="standard"
            required
            value={monthlyLimit}
            onChange={e => {
              setMonthlyLimit(e.target.value);
            }}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Paper>
      </Modal>
    </div>
  );
};

export default EditCategory;
