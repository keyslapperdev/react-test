import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Tabs, Tab } from '@material-ui/core';

import { colors } from './common';

const useStyles = makeStyles({
  navBar: {
    paddingTop: "10px", 
    backgroundColor: colors.secondary,
    color: colors.white,
    display: "flex",
    justifyContent: "center",
  },
  navOpt: {
    borderRadius: "1.4em 1.4em 0 0",
    '&:hover': {
      backgroundColor: colors.primary,
    },
  },
  navOptSelected: {
    backgroundColor: colors.primary,
  },
  navOptIndicator: {
    backgroundColor: colors.primary,
  },
});

function NavBar(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const navOptions = [
    "Home", "Menu", "Promotions"
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.setActive(navOptions[newValue]);
  };

  return (
    <Box className={classes.navBar}>
      <Tabs
        value={value}
        onChange={handleChange}
        classes={{indicator: classes.navOptIndicator}}
        centered
      >
        {navOptions.map((opt) =>
          <Tab classes={{
            root: classes.navOpt,
            selected: classes.navOptSelected,
          }} key={opt} label={opt} />
        )}
      </Tabs>
    </Box>
  );
}

export default NavBar;