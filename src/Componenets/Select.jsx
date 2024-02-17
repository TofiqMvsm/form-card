// Select.js
import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Select = ({ options, selectedOption, handleOptionChange }) => {
  return (
    <Autocomplete
        className="mt-12"
      value={selectedOption}
      onChange={handleOptionChange}
      id="controllable-states-demo"
      options={options}
      sx={{ width: 600 }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default Select;