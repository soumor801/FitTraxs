import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = 'https://api.airtable.com/v0/appApuXEvhttewhoa/Table%201'

function TraxsLog() {
  const [nameOfWorkout, setNameOfWorkOut] = useState('');
  const [numsOfReps, setNumsOfReps] = useState('');
  const [numsOfSets, setNumsOfSets] = useState('');

const handlePostRequest = async (ev) => {
  ev.preventDefault();
  const newWorkOut= {
    records: [
      {
        fields: {
          'Workout Name': nameOfWorkout,
          'reps': numsOfReps,
          'sets': numsOfSets
        }
      }
    ]
  }

  await axios.post(API_URL, newWorkOut);
  
  
}

  

  return (
    <div>
      <h1>TraxsLogs</h1>
      <form onSubmit={handlePostRequest}>
      <label htmlFor="Name of WorkOut">Name of WorkOut: </label>
        <input type='text' placeholder='Bench Press' id='Name of WorkOut'/> 
        
        <label htmlFor="Number of Reps">Number of Reps: </label>
        <input type='text' placeholder='10 Reps' id='Number of Reps' />
        
        <label htmlFor="Number of Sets">Number of Sets: </label>
        <input type='text' placeholder='3 Sets' id='Number of Sets'/>
        <input type='submit'/>



      </form>
    </div>
  )
}
export default TraxsLog;