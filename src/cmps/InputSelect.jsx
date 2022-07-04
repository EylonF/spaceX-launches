import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function InputSelect({ handleChange, options, label }) {
  const [select, setSelect] = React.useState("");

  const _handleChange = (event) => {
    const { value } = event.target;
    setSelect(value);
    handleChange(event, "change");
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">{label}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={select}
        label="select"
        onChange={_handleChange}
      >
        {options.map((opt) => (
          <MenuItem key={opt[0]} value={opt[0]}>
            {opt[1]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
