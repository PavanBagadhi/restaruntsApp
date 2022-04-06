import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import MenuTable from '../UI/MenuTable';

const SubMenuSectionModal = ({ open, handleToClose, menuDetails, sectionName }) => {
  console.log(menuDetails, "new  Branch")
  return (
    <Dialog onClose={handleToClose} open={open} fullWidth>
      <DialogTitle>{sectionName}</DialogTitle>
      <DialogContent>
        <MenuTable menuDetails={menuDetails}/>
      </DialogContent>
    </Dialog>
  );
};

export default SubMenuSectionModal;
