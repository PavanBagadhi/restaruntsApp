import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import classes from '../Header/Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import { InputAdornment } from '@mui/material';

const SearchFeild = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const filteredData = useSelector((state) => state.filteredData);
  const changeHandler = (event) => {
    setIsShowDropdown(true);
    setSearchInput(event.target.value);
  };

  console.log(isShowDropdown);

  const blurHandler = (event) => {
    setIsShowDropdown(false);
  };

  const selectListItem = (event) => {
    setSearchInput(event.target.getAttribute('value'));
    // setSearchInput(event.target)
  };

  useEffect(() => {
    const result = data?.filter((restarunt) => {
      return restarunt.restaurant_name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });

    dispatch({ type: 'FILTERED_DATA', payload: result });
  }, [searchInput, data.length]);

  console.log(filteredData);
  return (
    <>
      <TextField
        type="search"
        placeholder="Search Restarunt"
        onChange={changeHandler}
        onBlur={blurHandler}
        className={classes.searchFeild}
        value={searchInput}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      >
        <SearchIcon />
      </TextField>
      {/* <div className={classes.searchIcon}>
        <SearchIcon />
      </div> */}
      {isShowDropdown && (
        <div className={classes.dropDownFeild}>
          <ul>
            {filteredData.map((restaurant) => {
              return (
                <li
                  key={filteredData.restaurant_id}
                  value={restaurant.restaurant_name}
                  onMouseDown={selectListItem}
                >
                  {restaurant.restaurant_name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
export default SearchFeild;
