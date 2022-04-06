import { Container, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import classes from '../Menu/Menu.module.css';
import SubMenuSectionModal from './SubMenuSectionModal';

const Menu = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const [menuDetails, setMenuDetails] = useState([]);
  const [sectionName, setSectionName]= useState("")
  const clickToSectionDetails = (section_items, section_name) => {
    setMenuDetails(section_items);
    setSectionName(section_name)
    setOpen(true);
  };

  console.log("asdsad")

  const handleToClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <ul className={classes.ul}>
        {menu.map((section) => {
          return (
            <li
              className={classes.li}
              onClick={() =>
                clickToSectionDetails(section.menu_items, section.section_name)
              }
            >
              <Container>
                <Typography variant="h5" className={classes.sectionName}>
                  {section.section_name}
                </Typography>
              </Container>
            </li>
          );
        })}
      </ul>
      <SubMenuSectionModal
        open={open}
        handleToClose={handleToClose}
        menuDetails={menuDetails}
        sectionName={sectionName}
      />
    </div>
  );
};

export default Menu;
