import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Stack from '@mui/material/Stack';
import { Autocomplete, InputAdornment } from '@mui/material';
import Search from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core';



const useStyles=makeStyles({
  root:{
    width: '500px',
    marginTop: '250px',
    marginLeft: '350px',
  }
})

export default function FreeSolo({ states, selectHandler }) {
  const classes=useStyles();
  return (
    <Stack
      spacing={2}
      className={classes.root}
    >
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={states.map((option) => option.state)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Enter your delivery location"
            type="search"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            onSelect={selectHandler}
          />
        )}
      />
    </Stack>
  );
}
