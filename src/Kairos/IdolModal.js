import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

export const IdleTimeOutModal = ({showModal, handleClose, handleLogout, remainingTime}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return (
      <div>
        <Modal
           open={showModal}
           onClose={handleClose} 
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description" 
         >
             <Box sx={style}>
               <Typography id="modal-modal-title" variant="h6" component="h2">
               You Have Been Idle!
               </Typography>
               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               Logging you out in {remainingTime} seconds
               </Typography>
               <Button variant="danger" onClick={handleLogout}>
                 Logout
               </Button>
               <Button variant="primary" onClick={handleClose}>
                 Stay
               </Button>
             </Box>
         </Modal>
      </div>

    )
}
