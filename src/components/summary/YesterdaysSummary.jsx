/* eslint-disable react/prop-types */
import {Paper, Typography} from '@mui/material';
import React from 'react';
import {getCategoryLimit, getTotalSpent} from './helper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SumTransItem from './SumTransItem';

const YesterdaysSummary = ({yesterdaysTransactions, categories}) => {
  const transCount = yesterdaysTransactions ? yesterdaysTransactions.length : 0;
  const totalSpent = getTotalSpent(yesterdaysTransactions);
  const limit = getCategoryLimit(categories, 'DAILY');

  return (
    <Paper sx={{maxWidth: 800, margin: 'auto', padding: 2, marginTop: 5}}>
      <Typography variant="h5" textAlign="center">
        Yesterday
      </Typography>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography>Total Transactions:</Typography>
        <Typography>{transCount}</Typography>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography>Total Spent:</Typography>
        <Typography>₹{totalSpent}</Typography>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography>Limit:</Typography>
        <Typography>₹{limit}</Typography>
      </div>

      <Accordion sx={{marginTop: 1}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>Transactions:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {yesterdaysTransactions &&
            yesterdaysTransactions.map(item => (
              <SumTransItem
                trans={item}
                key={item._id}
                categories={categories}
              />
            ))}
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};

export default YesterdaysSummary;
