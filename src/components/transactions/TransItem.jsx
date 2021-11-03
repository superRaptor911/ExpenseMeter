/* eslint-disable react/prop-types */
import Paper from '@mui/material/Paper';
import React from 'react';
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

const TransItem = ({transaction}) => {
  const {title, transType, amount, note, category, date} = transaction;

  return (
    <Paper
      sx={{
        padding: 2,
        margin: 'auto',
        marginTop: 5,
        marginBottom: 5,
        maxWidth: 800,
      }}>
      <div style={{display: 'flex', width: 'max-content', marginLeft: 'auto'}}>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon sx={{color: 'error.light', marginLeft: 1}} />
        </IconButton>
      </div>
      <Typography
        textAlign="center"
        variant="h6"
        sx={{textTransform: 'capitalize'}}>
        {title}
      </Typography>

      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          color: transType === 'EXPENSE' ? 'error.main' : 'success.main',
          padding: 0,
        }}>
        <Typography>₹{amount}</Typography>
        <Typography>{transType}</Typography>
      </Container>

      <Typography>{category}</Typography>

      <Typography textAlign="right">
        {format(new Date(date), 'dd-MMM-yyyy')}
      </Typography>

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
  );
};

export default TransItem;
