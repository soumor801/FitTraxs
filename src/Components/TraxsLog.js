import axios from "axios";
import { useEffect, useState } from "react";
// import CSS from "./Components/CSS-Files/TraxsLog.css"
import CSS from "./CSS-Files/TraxsLog.css"
const API_URL =
  "https://api.airtable.com/v0/appApuXEvhttewhoa/Table%201?api_key=keyzjTZF2QiihjSEs";

function TraxsLog() {
  const [nameOfWorkout, setNameOfWorkOut] = useState("");
  const [numsOfReps, setNumsOfReps] = useState("");
  const [numsOfSets, setNumsOfSets] = useState("");
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    
},[toggleFetch])


  const handlePostRequest = async (ev) => {
    ev.preventDefault();
    const newWorkOut = {
      records: [
        {
          fields: {
            WorkoutName: nameOfWorkout,
            reps: numsOfReps,
            sets: numsOfSets,
          },
        },
      ],
    };
    
    
    await axios.post(API_URL, newWorkOut);
    setNameOfWorkOut('')
    setNumsOfReps('')
    setNumsOfSets('')
    setToggleFetch(!toggleFetch)
  };

  return (
    <div>
      <h1 className='traxsHeader'>TraxsLogs</h1>
      <form onSubmit={handlePostRequest} className='traxsForm' >
        {/* <label htmlFor="Name of WorkOut">Name of WorkOut: </label>
        <input
          type="text"
          placeholder="Bench Press"
          id="Name of WorkOut"
          onChange={(ev) => setNameOfWorkOut(ev.target.value)}
        />

        <label htmlFor="Number of Reps">Number of Reps: </label>
        <input
          type="text"
          placeholder="10 Reps"
          id="Number of Reps"
          onChange={(ev) => setNumsOfReps(ev.target.value)}
        />

        <label htmlFor="Number of Sets">Number of Sets: </label>
        <input
          type="text"
          placeholder="3 Sets"
          id="Number of Sets"
          onChange={(ev) => setNumsOfSets(ev.target.value)}
        />
        <input type="submit" /> */}


        <label className="sr-only" htmlFor="Name of WorkOut">
        </label>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          id="Name of WorkOut"
          placeholder="Workout"
          onChange={(ev) => setNameOfWorkOut(ev.target.value)}
        />

        <div className="input-group mb-2 mr-sm-2">
          <label htmlFor="Number of Reps"> </label>
          <input
            type="number"
            className="form-control"
            id="Number of Reps"
            placeholder="Reps"
            onChange={(ev) => setNumsOfReps(ev.target.value)}
          />

          
          <label htmlFor="Number of Sets"></label>
          <input
            type="number"
            className="form-control"
            id="Number of Sets"
            placeholder="Sets"
            onChange={(ev) => setNumsOfSets(ev.target.value)}
          />
        </div>

        <button type="submit" className="btnPrimary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default TraxsLog;
