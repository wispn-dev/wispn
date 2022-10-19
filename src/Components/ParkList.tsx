import React, { useEffect, useState } from 'react';
import ParkBox from './ParkBox';
import {  } from "@mui/material";
import { useAppDispatch, useAppSelector } from '../hooks';

// import { setParks } from '../reducers';

function ParkList() {
  // const query = `/parks?parks=${}`
  const allActivities = useAppSelector((state)=>state.activities); // getting state
  // stateful activeParks --> string[] containing active park codes
  const [ parkBoxes, setParkBoxes ] = useState<JSX.Element[]>([]);


  useEffect(() => {
    console.log('triggered park list useEffect');
    // iterate through allactivities
    let activeParks: string[] = [];
    let isFirst = true;
    Object.keys(allActivities).forEach((activity) => {
      // for each checked activity, pull its respective park codes
      // optional -> compile an array of all parks contained in all of the activity arrays <- optional

      if (allActivities[activity].status) {
        if (isFirst) {
          activeParks.push(...allActivities[activity].parks)
          isFirst = false;
        } else {
          activeParks = activeParks.filter(park => allActivities[activity].parks.includes(park));
        }
      };
      // make query with parks from newActiveParks
    });
    if (activeParks.length || isFirst) {
      fetch(`/parks?parks=${activeParks.join()}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const newParkBoxes: JSX.Element[] = [];
        data.data.forEach((element: Object) => {
          newParkBoxes.push(<ParkBox data={element}/>);
        });
        setParkBoxes(newParkBoxes);
      })
    } else {
      setParkBoxes([]);
    }



    // query result -> for each resulting park, render a parkbox with info from that park
      // ParkBox component <Parkbox park={park} />
  }, [allActivities])

  // useEffect(() => {

  // }, [activeParks]);
  
  return (
    <div className='park-list'>
      {parkBoxes.length ? parkBoxes : <p>No parks meet selection criteria...</p>}
    </div>
  )
}

export default ParkList;