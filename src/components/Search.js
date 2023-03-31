import { Stack, TextField, InputAdornment } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <TextField
          id="search-textfield"
          placeholder="Search note here..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          sx={{ width: "50%" }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Stack>
    </>
  );
};

export default Search;
