import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import { GridExpandMoreIcon } from '@mui/x-data-grid';


function ServiceRequests() {
  return (
    <>
    <h1 className='text-center'>Service Requests</h1>
    <div className='container w-75'>
    <Accordion className='mb-1'>
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button><i className="fa-solid fa-xl fa-xmark"></i></Button>
          <Button><i className="fa-solid fa-xl fa-check"></i></Button>
        </AccordionActions>
      </Accordion>
    <Accordion className='mb-1'>
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button><i className="fa-solid fa-xl fa-xmark"></i></Button>
          <Button><i className="fa-solid fa-xl fa-check"></i></Button>
        </AccordionActions>
      </Accordion>
    <Accordion className='mb-1'>
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button><i className="fa-solid fa-xl fa-xmark"></i></Button>
          <Button><i className="fa-solid fa-xl fa-check"></i></Button>
        </AccordionActions>
      </Accordion>
    </div>
     </>   
  )
}

export default ServiceRequests