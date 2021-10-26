import axios from "axios";
import { useEffect, useState } from "react";
import Traxslog from "./CSS-Files/TraxsPage.css"

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
      <h1>TraxsLogs</h1>
      <form onSubmit={handlePostRequest}>
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


        <label class="sr-only" htmlFor="Name of WorkOut">
          Name of WorkOut:
        </label>
        <input
          type="text"
          class="form-control mb-2 mr-sm-2"
          id="Name of WorkOut"
          placeholder="Workout"
          onChange={(ev) => setNameOfWorkOut(ev.target.value)}
        />

        <div class="input-group mb-2 mr-sm-2">
          <label htmlFor="Number of Reps"> </label>
          <input
            type="number"
            class="form-control"
            id="Number of Reps"
            placeholder="Reps"
            onChange={(ev) => setNumsOfReps(ev.target.value)}
          />

          <label htmlFor="Number of Sets"></label>
          <input
            type="number"
            class="form-control"
            id="Number of Sets"
            placeholder="Sets"
            onChange={(ev) => setNumsOfSets(ev.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary mb-2">
          Submit
        </button>
      </form>
    </div>
  );
}
export default TraxsLog;
