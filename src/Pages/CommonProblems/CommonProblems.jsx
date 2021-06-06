import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import problems from './CommonProblems';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(17),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const CommonProblems = () => { 
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {problems && problems.map(x => <Accordion key={x.title}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography className={classes.heading}>{x.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{x.content}</Typography>
                </AccordionDetails>
            </Accordion>)}
        </div>
    );
}


export default CommonProblems;