import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = 'https://api.airtable.com/v0/appApuXEvhttewhoa/Table%201?api_key=keyzjTZF2QiihjSEs'

function TraxsPage() {
  const [WorkoutData, setWorkoutData] = useState([]);
  useEffect(() => {
   

    const getWorkoutData = async () => {
      const resp = await axios.get(API_URL);
      
      setWorkoutData(resp.data.records);
      console.log(setWorkoutData)
    }

    getWorkoutData();
  }, []);

  return (
    <div>
      <h1>TraxsPage</h1>      
      {WorkoutData.map((eachWorkout) => (
        <div>
          <h2> {eachWorkout.fields.WorkoutName}</h2>
          <h4> Reps:{eachWorkout.fields.reps}</h4>
          <h4>Sets:{eachWorkout.fields.sets}</h4>
        
        </div>
      ))}
    </div>
  )
}
export default TraxsPage;