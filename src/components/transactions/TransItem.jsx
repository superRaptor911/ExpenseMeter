/* eslint-disable react/prop-types */
import Paper from '@mui/material/Paper';
import React, {Fragment, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Container} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import {format} from 'date-fns';
import {deleteTransaction} from '../../api/api';
import {useStore} from '../../store';
import EditTrans from './EditTrans';
import {getCategoryColor, getCategoryTitle} from './helper';

const TransItem = ({transaction}) => {
  const {title, transType, amount, note, category, date, _id} = transaction;
  const storeDeleteTrans = useStore(state => state.deleteTransaction);
  const categories = useStore(state => state.categories);
  const [showEditMenu, setShowEditMenu] = useState(false);

  const handleDelete = async () => {
    const result = await deleteTransaction(_id);
    if (result) {
      console.log('deleted ', _id);
      storeDeleteTrans(_id);
    }
  };

  const handleEdit = () => {
    setShowEditMenu(true);
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
            sx={{textTransform: 'capitalize'}}>
            {title}
          </Typography>

          <div
            style={{display: 'flex', width: 'max-content', marginLeft: 'auto'}}>
            <IconButton onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon sx={{color: 'error.light', marginLeft: 1}} />
            </IconButton>
          </div>
        </div>

        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            color: transType === 'EXPENSE' ? 'error.main' : 'success.main',
            padding: '0px !important',
          }}>
          <Typography>???{amount}</Typography>
          <Typography>{transType}</Typography>
        </Container>

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography
            sx={{
              backgroundColor: getCategoryColor(category, categories),
              padding: 0.25,
              borderRadius: 1,
            }}>
            {getCategoryTitle(category, categories)}
          </Typography>
          <Typography>{format(date, 'dd-MMM-yyyy')}</Typography>
        </div>

        <Accordion sx={{marginTop: 1}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography>Note:</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{note}</Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
      {showEditMenu && <EditTrans id={_id} setShowEditMenu={setShowEditMenu} />}
    </Fragment>
  );
};

export default TransItem;
