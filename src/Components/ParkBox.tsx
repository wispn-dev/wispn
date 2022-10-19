import React, { useEffect } from 'react';
import { Checkbox } from "@mui/material";
import { useAppSelector, useAppDispatch } from '../hooks';
import { toggleActivity } from '../reducers';
import { Box } from '@mui/system';

function ParkBox(props: {data: any}) {
    // useState hooks to later identify which checkboz is being selected?
    // const [checked, setChecked] = React.useState(true);
    const allActivities = useAppSelector((state)=>state.activities);
    const dispatch = useAppDispatch();
    // const checked = allActivities[props.activity];

    

//     const handleChange = (event:any) => {
//       dispatch(toggleActivity({activity: props.activity, status: !checked}));
//   };


  return (
    <Box>
        <p>{props.data.fullName}</p>
    </Box>
  )
}

export default ParkBox;

