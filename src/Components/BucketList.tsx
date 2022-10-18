import React, {useEffect} from 'react';
import ActivityBox from './ActivityBox';
import { FormControlLabel, FormGroup } from "@mui/material";
import { useAppDispatch, useAppSelector } from '../hooks';


function BucketList() {
  // access state here -> useAppSelector to access state?
  const allActivities = {'running': false, 'swimming': false};
  // const allActivities = useAppSelector((state)=>state.activities)
  const dispatch = useAppDispatch();
  
  const checkboxes: JSX.Element[] = [];
  // for each activity in the state
    // push to checkboxes {<FormControlLabel control={<ActivityBox />} label="Check me"/>}
  Object.keys(allActivities).forEach(activity => {
    checkboxes.push(<FormControlLabel control={<ActivityBox />} label={activity}/>)
  });

  useEffect(() => {
    // make api call to get the activities <-- written by backend team
    const fetchActivities = async () => {
      const response = await fetch('/activities');
      
    }
    // set the activites state to the fetched activities

    fetchActivities();
  }, [])

  

  return (
    <FormGroup>
      {/* forEach loop here to generate checkboxes?*/}
      {/* Gonna use this Activities slice */}
      {/* <FormControlLabel control={<ActivityBox />} label="Check me"/> */}
      {checkboxes}
    </FormGroup>

  )
}

export default BucketList;