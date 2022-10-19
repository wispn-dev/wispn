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
    const { data } = props;
    // const checked = allActivities[props.activity];

    

//     const handleChange = (event:any) => {
//       dispatch(toggleActivity({activity: props.activity, status: !checked}));
//   };


  return (
    <a href={data.url} target="_blank" rel="noopener noreferrer" className='park-link'> 
    <Box className='park-box'>
        <h4>{data.fullName}</h4>
        <img src={data.images[0].url} alt={data.images[0].altText}></img>
        <p><b>State(s): </b>{data.states}</p>
        <p><b>Description: </b>{data.description}</p>
        

    </Box>
    </a>
  )
}

export default ParkBox;

/*
keys on data
url: official park website √
fullName: full name of park √
description: short description of park
states: states the park is in √
entranceFees: [
  {
    cost, description, title
  }
]
images[0].url: image link
images[0].altText: image alt text







*/
