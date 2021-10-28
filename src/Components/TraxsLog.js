import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import CSS from "./Components/CSS-Files/TraxsLog.css"
import CSS from "./CSS-Files/TraxsLog.css";
const API_URL =
  "https://api.airtable.com/v0/appApuXEvhttewhoa/Table%201?api_key=keyzjTZF2QiihjSEs";

function TraxsLog() {
  const [nameOfWorkout, setNameOfWorkOut] = useState("");
  const [numsOfReps, setNumsOfReps] = useState("");
  const [numsOfSets, setNumsOfSets] = useState("");
  const [toggleFetch, setToggleFetch] = useState(false);

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
    setNameOfWorkOut("");
    setNumsOfReps("");
    setNumsOfSets("");
    setToggleFetch(!toggleFetch);
  };

  return (
    <div>
      <h1 className="traxsHeader">TraxsLogs</h1>
      <form onSubmit={handlePostRequest} className="traxsForm">
        <label className="sr-only" htmlFor="Name of WorkOut"></label>
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

      <div className="traxsSection">
        <h1 className="traxsHeader ">How to use FitTraxs Logs:</h1>
        <ul>
          <li>Enter your completed workout.</li>
          <li>Enter the number of Reps completed.</li>
          <li>Enter the number of Sets completed.</li>
          <li>
            Click on Submit and check{" "}
            <Link to="/TraxsPage" exact>
              {" "}
              TraxsPage{" "}
            </Link>{" "}
            to view your workout!
          </li>
        </ul>
      </div>
    </div>
  );
}
export default TraxsLog;
