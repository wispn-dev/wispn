import React, {useEffect} from 'react';
import ActivityBox from './ActivityBox';
import { FormControlLabel, FormGroup } from "@mui/material";
import { useAppDispatch, useAppSelector } from '../hooks';
import { setActivities } from '../reducers';


function BucketList() {
  // access state here -> useAppSelector to access state?
  // const allActivities = {'running': false, 'swimming': false};
  const allActivities = useAppSelector((state)=>state.activities);
  const dispatch = useAppDispatch();
  
  const checkboxes: JSX.Element[] = [];
  // for each activity in the state
    // push to checkboxes {<FormControlLabel control={<ActivityBox />} label="Check me"/>}
  Object.keys(allActivities).forEach(activity => {
    checkboxes.push(<FormControlLabel control={<ActivityBox activity={activity}/>} label={activity}/>)
  });

  useEffect(() => {
    // make api call to get the activities <-- written by backend team
    const fetchActivities = async () => {
      const response = await fetch('/activities');
      const activities = await response.json();
      dispatch(setActivities(activities));

    }
    // set the activites state to the fetched activities

    fetchActivities();
  }, [dispatch])

  

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

/*
[
  "Arts and Culture",
  "Astronomy",
  "Auto and ATV",
  "Biking",
  "Boating",
  "Camping",
  "Canyoneering",
  "Caving",
  "Climbing",
  "Compass and GPS",
  "Dog Sledding",
  "Fishing",
  "Flying",
  "Food",
  "Golfing",
  "Guided Tours",
  "Hands-On",
  "Hiking",
  "Horse Trekking",
  "Hunting and Gathering",
  "Ice Skating",
  "Junior Ranger Program",
  "Living History",
  "Museum Exhibits",
  "Paddling",
  "Park Film",
  "Playground",
  "SCUBA Diving",
  "Shopping",
  "Skiing",
  "Snorkeling",
  "Snow Play",
  "Snowmobiling",
  "Snowshoeing",
  "Surfing",
  "Swimming",
  "Team Sports",
  "Tubing",
  "Water Skiing",
  "Wildlife Watching"
  ]
  */