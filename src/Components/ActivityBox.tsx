import React from 'react';
import { Checkbox } from "@mui/material";

function ActivityBox() {
    // useState hooks to later identify which checkboz is being selected?
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event:any) => {
        setChecked(event.target.checked);
  };

  return (
    <Checkbox defaultChecked/>
  )
}

export default ActivityBox;