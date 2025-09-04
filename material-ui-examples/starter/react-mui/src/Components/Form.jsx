import { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function Form() {
  const [value, setValue] = useState();

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <Stack display="row">
      <Box>
        <FormControl>
          <FormLabel>İsimler</FormLabel>
          <RadioGroup
            row
            name="isimler"
            defaultValue={2}
            onClick={handleChange}
          >
            <FormControlLabel control={<Radio />} label="Ahmet" value="0" />
            <FormControlLabel control={<Radio />} label="Mahmut" value="1" />
            <FormControlLabel control={<Radio />} label="Mustafa" value="2" />
          </RadioGroup>
        </FormControl>
      </Box>
      <p>{value}</p>
    </Stack>
  );
}
