/* eslint-disable react/prop-types */
import {Paper} from '@mui/material';
import React, {Fragment, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditCategory from './EditCategory';
import {useStore} from '../../store';
import {deleteCategory} from '../../api/api';

const CategoryItem = ({item}) => {
  const {title, color, description, dailyLimit, weeklyLimit, monthlyLimit} =
    item;

  const cred = useStore(state => state.credential);
  const storeDeleteCategory = useStore(state => state.deleteCategory);
  const [showEditMenu, setShowEditMenu] = useState(false);

  const handleDelete = async () => {
    const result = await deleteCategory(cred, item._id);
    if (result) {
      storeDeleteCategory(item._id);
    }
  };

  return (
    <Fragment>
      <Paper
        sx={{
          padding: 2,
          margin: 'auto',
          marginTop: 5,
          marginBottom: 5,
          maxWidth: 800,
        }}>
        <div style={{display: 'flex'}}>
          <Typography
            textAlign="center"
            variant="h6"
            sx={{textTransform: 'capitalize', color: color}}>
            {title}
          </Typography>

          <div
            style={{display: 'flex', width: 'max-content', marginLeft: 'auto'}}>
            <IconButton
              onClick={() => {
                setShowEditMenu(true);
              }}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon sx={{color: 'error.light', marginLeft: 1}} />
            </IconButton>
          </div>
        </div>

        <Accordion sx={{marginTop: 1}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography>Description:</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{description}</Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
      {showEditMenu && (
        <EditCategory oldCategory={item} setShowModal={setShowEditMenu} />
      )}
    </Fragment>
  );
};

export default CategoryItem;
