import axios from "axios";
import { useEffect, useState, useParams } from "react";

const API_URL = 'https://api.airtable.com/v0/appApuXEvhttewhoa/Table%201?api_key=keyzjTZF2QiihjSEs'

function TraxsPage() {
  const [workoutData, setWorkoutData] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const params = useParams;
  useEffect(() => {
   

    const getWorkoutData = async () => {
      const resp = await axios.get(API_URL);
      
      setWorkoutData(resp.data.records);
      
    }

    getWorkoutData();
    console.log(workoutData)
  }, [toggleFetch]);
  ;
  // const workoutId = workoutData.records.id
  // console.log(workoutId)
  // console.log(workout_id)
  const deleteWorkout = async (id) => {
    
    
    const resp = await axios.delete(API_URL + `&records[]=${id}`);
    setToggleFetch(!toggleFetch)
  }

  return (
    <div>
      <h1>TraxsPage</h1>      
      {workoutData.map((eachWorkout) => (
        <div key={eachWorkout.id}>
          
          <h2> {eachWorkout.fields.WorkoutName}</h2>
          <h4> Reps:{eachWorkout.fields.reps}</h4>
          <h4>Sets:{eachWorkout.fields.sets}</h4>
          <button type='submit' onClick={(id) => { deleteWorkout(eachWorkout.id) }}>Remove Workout</button>
        </div>
      ))}
    </div>
  )
}
export default TraxsPage;